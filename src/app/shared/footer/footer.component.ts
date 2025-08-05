import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  // Informations de contact
  contactInfo = {
    phone: '+237698800120',
    email: 'contact@votreentreprise.com',
    address: 'Douala, Littoral, Cameroun',
  };

  // Liens de navigation
  navigationLinks = [
    { name: 'Accueil', action: () => this.scrollToSection('app-hero-section') },
    {
      name: 'À propos',
      action: () => this.scrollToSection('app-about-section'),
    },
    { name: 'Nos services', action: () => this.navigateToServices() },
    { name: 'FAQ', action: () => this.scrollToSection('app-faq-section') },
    { name: 'Contact', action: () => this.scrollToSection('app-contact-form') },
  ];

  // Services principaux avec leurs sections correspondantes
  servicesWithSections = [
    {
      name: 'Vente du matériel informatique',
      sectionId: 'app-sell-info-tools-section',
      action: () =>
        this.navigateToServiceSection('app-sell-info-tools-section'),
    },
    {
      name: 'Location engins de terrassement',
      sectionId: 'app-rentengins',
      action: () => this.navigateToServiceSection('app-rentengins'),
    },
    {
      name: 'Logistique et transport',
      sectionId: 'app-logistic-transport',
      action: () => this.navigateToServiceSection('app-logistic-transport'),
    },
    {
      name: 'Video surveillance',
      sectionId: 'app-video-service',
      action: () => this.navigateToServiceSection('app-video-service'),
    },
  ];

  // Pour la compatibilité avec le template existant
  get services() {
    return this.servicesWithSections.map((service) => service.name);
  }

  // Réseaux sociaux
  socialMedias = [
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
    { name: 'WhatsApp', icon: 'phone', url: 'https://wa.me/237698800120' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialisation si nécessaire
  }

  /**
   * Scroll vers une section sur la page d'accueil
   */
  scrollToSection(sectionId: string) {
    // Vérifier si on est sur la page d'accueil
    if (this.router.url !== '/' && !this.router.url.includes('#')) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.performScroll(sectionId);
        }, 300);
      });
    } else {
      this.performScroll(sectionId);
    }
  }

  /**
   * Navigation vers la page services (général)
   */
  navigateToServices() {
    this.router.navigate(['/services']);
  }

  /**
   * Navigation vers une section spécifique de la page services
   */
  navigateToServiceSection(sectionId: string) {
    // Si on est déjà sur la page services, juste scroller
    if (
      this.router.url === '/services' ||
      this.router.url.startsWith('/services#')
    ) {
      setTimeout(() => {
        this.performScrollOnServicesPage(sectionId);
      }, 100);
    } else {
      // Sinon, naviguer vers services avec fragment
      this.router.navigate(['/services'], {
        fragment: sectionId,
      });
    }
  }

  /**
   * Exécute le scroll avec offset pour navbar
   */
  private performScroll(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80; // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  /**
   * Scroll spécifique pour la page services
   */
  private performScrollOnServicesPage(sectionId: string) {
    const element =
      document.querySelector(sectionId) ||
      document.getElementById(sectionId.replace('app-', ''));

    if (element) {
      const offset = 80; // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn(`Section non trouvée: ${sectionId}`);
    }
  }

  /**
   * Ouvre un lien de réseau social
   */
  openSocialLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /**
   * Lance un appel téléphonique
   */
  callPhone() {
    window.location.href = `tel:${this.contactInfo.phone}`;
  }

  /**
   * Ouvre le client email
   */
  sendEmail() {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }

  /**
   * Ouvre Google Maps
   */
  openMap() {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      this.contactInfo.address
    )}`;
    window.open(mapUrl, '_blank', 'noopener,noreferrer');
  }

  /**
   * Scroll vers le haut de la page
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  /**
   * Gestion de la newsletter (à implémenter selon vos besoins)
   */
  subscribeNewsletter(email: string) {
    console.log('Newsletter subscription:', email);
    // Implémenter la logique d'abonnement newsletter
  }
}
