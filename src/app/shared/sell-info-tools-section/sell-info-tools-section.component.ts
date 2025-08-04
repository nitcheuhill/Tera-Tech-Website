import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sell-info-tools-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sell-info-tools-section.component.html',
  styleUrls: ['./sell-info-tools-section.component.scss'],
})
export class SellInfoToolsSectionComponent {
  // Données des équipements proposés
  equipments = [
    {
      title: 'Ordinateurs de bureau et portables',
      description:
        'Des modèles performants, adaptés pour le travail, la bureautique ou le gaming.',
    },
    {
      title: 'Composants et périphériques',
      description:
        'Cartes mères, processeurs, RAM, disques durs, cartes graphiques, claviers, souris, écrans, imprimantes et scanners. Tout ce dont vous avez besoin pour construire ou optimiser votre système.',
    },
    {
      title: 'Équipements de réseau',
      description:
        'Routeurs, modems, switches et câbles pour garantir une connectivité rapide et sécurisée.',
    },
    {
      title: 'Logiciels et licences',
      description:
        "Systèmes d'exploitation, suites bureautiques, logiciels de sécurité (antivirus, pare-feu) et applications professionnelles pour optimiser vos opérations.",
    },
    {
      title: 'Matériel audiovisuel',
      description:
        'Appareils photo et caméras, drones et autres équipements pour vos besoins en imagerie et vidéo.',
    },
  ];
}
