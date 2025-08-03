import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isTransparent = true;
  isVisible = true;
  isMobileMenuOpen = false;
  lastScrollTop = 0;
  scrollThreshold = 50;
  isHomePage = true;
  currentUrl = '';
  private routerSubscription: Subscription = new Subscription();

  constructor(
    private router: Router, // Gardé privé
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCurrentRoute();
      this.subscribeToRouteChanges();
      this.checkNavbarState();
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkNavbarState();
      this.handleScrollDirection();
    }
  }

  private checkCurrentRoute() {
    this.currentUrl = this.router.url;
    this.isHomePage =
      this.currentUrl === '/' ||
      this.currentUrl === '' ||
      this.currentUrl.includes('#');

    // Si on n'est pas sur la page d'accueil, forcer la navbar blanche
    if (!this.isHomePage) {
      this.isTransparent = false;
    }
  }

  private subscribeToRouteChanges() {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
        this.isHomePage =
          event.url === '/' || event.url === '' || event.url.includes('#');

        // Réinitialiser l'état de la navbar lors du changement de route
        if (!this.isHomePage) {
          this.isTransparent = false;
        } else {
          // Si on revient sur la home page, vérifier la position
          setTimeout(() => {
            this.checkNavbarState();
          }, 100);
        }

        // Fermer le menu mobile lors du changement de route
        this.isMobileMenuOpen = false;
      });
  }

  private checkNavbarState() {
    // Ne vérifier la position du hero que si on est sur la page d'accueil
    if (!this.isHomePage) {
      this.isTransparent = false;
      return;
    }

    const heroSection = document.querySelector('app-hero-section');
    if (heroSection) {
      const heroRect = heroSection.getBoundingClientRect();
      this.isTransparent = heroRect.bottom > 100;
    } else {
      // Si la hero section n'existe pas, utiliser la navbar blanche
      this.isTransparent = false;
    }
  }

  private handleScrollDirection() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < this.scrollThreshold) {
      this.isVisible = true;
    } else if (currentScroll > this.lastScrollTop) {
      // Scrolling down - hide navbar
      this.isVisible = false;
      this.isMobileMenuOpen = false;
    } else {
      // Scrolling up - show navbar
      this.isVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  scrollToSection(sectionId: string) {
    // Si on n'est pas sur la page d'accueil, naviguer d'abord vers la home
    if (!this.isHomePage) {
      this.router.navigate(['/']).then(() => {
        // Attendre que la navigation soit terminée puis scroller
        setTimeout(() => {
          this.performScroll(sectionId);
        }, 300);
      });
    } else {
      this.performScroll(sectionId);
    }
    this.isMobileMenuOpen = false;
  }

  private performScroll(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  navigateToServices() {
    this.router.navigate(['/services']);
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
