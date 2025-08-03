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
    phone: '+237 123 456 789',
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

  // Services principaux
  services = [
    'Vente du matériel informatique',
    'Location engins de terrassement',
    'Logistique et transport',
    'Video surveillance',
  ];

  // Réseaux sociaux
  socialMedias = [
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
    { name: 'WhatsApp', icon: 'phone', url: 'https://wa.me/237123456789' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialisation si nécessaire
  }

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
  }

  openSocialLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  callPhone() {
    window.location.href = `tel:${this.contactInfo.phone}`;
  }

  sendEmail() {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }

  openMap() {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      this.contactInfo.address
    )}`;
    window.open(mapUrl, '_blank', 'noopener,noreferrer');
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
