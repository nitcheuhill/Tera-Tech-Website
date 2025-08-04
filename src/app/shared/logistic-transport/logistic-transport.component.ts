import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logistic-transport',
  imports: [CommonModule],
  templateUrl: './logistic-transport.component.html',
  styleUrl: './logistic-transport.component.scss',
})
export class LogisticTransportComponent {
  // Données des équipements proposés
  equipments = [
    {
      title: 'Gestion du fret',
      description:
        'Des modèles performants, adaptés pour le travail, la bureautique ou le gaming.',
    },
    {
      title: 'Entreposage sécurisé',
      description:
        'Nous mettons à votre disposition des espaces de stockage modernes et sécurisés pour vos marchandises, gérés par notre équipe de professionnels.',
    },
    {
      title: 'Distribution et livraison',
      description:
        'Que vous ayez besoin de livrer des produits à vos clients ou de déplacer des équipements entre vos sites, nous garantissons une livraison rapide et efficace.',
    },
  ];
  equipments1 = [
    {
      title: 'Camions de livraison',
      description:
        'Pour la distribution de matériel informatique et de petites marchandises.',
    },
    {
      title: 'Bennes basculantes',
      description:
        'Pour le transport de matériaux de construction et de terrassement.',
    },
    {
      title: 'Engins de levage',
      description:
        ' Pour le chargement et le déchargement de marchandises lourdes.',
    },
  ];
}
