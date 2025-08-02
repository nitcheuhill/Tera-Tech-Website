import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TrustLogo {
  id: number;
  name: string;
  imagePath: string;
  alt: string;
}

@Component({
  selector: 'app-client-section',
  imports: [CommonModule],
  templateUrl: './client-section.component.html',
  styleUrl: './client-section.component.scss',
})
export class ClientSectionComponent {
  trustLogos: TrustLogo[] = [
    {
      id: 2,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo1_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 3,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo2_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 4,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo3_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 5,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo4_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 6,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo5_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 7,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo6_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 8,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo7_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 9,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo8_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 10,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo9_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 11,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo10_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 12,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo11_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 13,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo12_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 14,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo13_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 15,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo14_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 16,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo15_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 17,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo16_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 18,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo17.jpeg',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 19,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo18_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
    {
      id: 20,
      name: 'Tera Tech Solutions Sarl',
      imagePath: '/Assets/About-section/Logo/logo19_prev_ui.png',
      alt: 'Tera Tech Solutions Sarl Logo',
    },
  ];

  // Duplication des logos pour l'animation infinie
  get duplicatedLogos(): TrustLogo[] {
    return [...this.trustLogos, ...this.trustLogos];
  }

  // TrackBy function pour optimiser le rendu
  trackByLogoId(index: number, logo: TrustLogo): number {
    return logo.id;
  }
}
