import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rentengins',
  imports: [CommonModule],
  templateUrl: './rentengins.component.html',
  styleUrl: './rentengins.component.scss',
})
export class RentenginsComponent {
  // Données des équipements proposés
  equipments = [
    {
      title: 'Pelles mécaniques(ou pelleteuse)',
    },
    {
      title: 'Chargeuse sur pneus',
    },
    {
      title: 'Bulldozers',
    },
    {
      title: 'Compacteurs',
    },
    {
      title: 'Décapeuse (ou scraper)',
    },
    {
      title: 'Camion-benne (ou tombereau)',
    },
  ];
  equipments1 = [
    {
      title: 'Conseil expert ',
      description:
        "Notre équipe est là pour vous guider. Que vous ayez besoin d'un ordinateur sur mesure pour une tâche spécifique ou d'un engin adapté à votre chantier, nous vous aidons à faire le meilleur choix.",
    },
    {
      title: 'Fiabilité',
      description:
        'Nous sélectionnons uniquement du matériel de marques reconnues pour leur durabilité et leur performance, et nos engins sont régulièrement inspectés et entretenus pour garantir un fonctionnement sans faille.',
    },
    {
      title: 'Service après-vente',
      description:
        'Votre satisfaction est notre priorité. Nous nous engageons à être à vos côtés après votre achat ou votre location pour répondre à vos questions et résoudre d/éventuels problèmes.',
    },
  ];
}
