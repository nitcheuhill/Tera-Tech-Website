import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Service {
  id: number;
  title: string;
  image: string;
  description?: string;
}

@Component({
  selector: 'app-services-section',
  imports: [CommonModule, RouterModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  // Données dynamiques des services
  services: Service[] = [
    {
      id: 1,
      title: 'Vente du matériel informatique',
      image: '/Assets/Hero-section/Info.svg',
      description: 'Solutions informatiques complètes pour votre entreprise',
    },
    {
      id: 2,
      title: 'Location engins de terrassement',
      image: '/Assets/Hero-section/Terrasse.svg',
      description: "Location d'équipements de construction professionnels",
    },
    {
      id: 3,
      title: 'Logistique et transport',
      image: '/Assets/Hero-section/Log.svg',
      description: 'Services de transport et logistique adaptés',
    },
    {
      id: 4,
      title: 'Video surveillance',
      image: '/Assets/Hero-section/Video.svg',
      description: 'Video surveillance',
    },
  ];

  // Configuration du contenu de la section
  sectionContent = {
    title: 'Nos',
    titleHighlight: 'Services',
    description:
      "Parce que chaque entreprise est unique, nous avons développé quatre pôles d'excellence pour répondre à tous vos besoins",
    buttonText: 'Voir plus',
  };

  trackByServiceId(index: number, service: Service): number {
    return service.id;
  }

  onServiceClick(service: Service): void {
    // Logique lors du clic sur un service
    console.log('Service cliqué:', service);
  }

  onCtaClick(): void {
    // Logique lors du clic sur le bouton CTA
    console.log('Bouton CTA cliqué');
  }
}
