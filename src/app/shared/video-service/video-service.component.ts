import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-video-service',
  imports: [CommonModule],
  templateUrl: './video-service.component.html',
  styleUrl: './video-service.component.scss',
})
export class VideoServiceComponent {
  // Données des équipements proposés
  equipments = [
    {
      title: 'Conception de systèmes',
      description:
        "Notre équipe d'experts analyse vos besoins et la configuration de vos espaces pour créer un plan de surveillance efficace, en choisissant les emplacements stratégiques pour les caméras et les autres équipements.",
    },
    {
      title: 'Installation professionnelle',
      description:
        "Nous nous occupons de l'installation complète de votre système, en utilisant du matériel de haute qualité, et en veillant à ce que tout soit parfaitement configuré pour un fonctionnement optimal.",
    },
    {
      title: 'Équipements de pointe',
      description:
        "Nous travaillons avec des caméras de surveillance haute définition, des enregistreurs vidéo numérique (DVR) ou réseau (NVR), ainsi que des systèmes d'accès à distance pour vous permettre de garder un œil sur vos locaux, où que vous soyez.",
    },
    {
      title: 'Maintenance et support',
      description:
        'Pour garantir la longévité et la fiabilité de votre système, nous offrons des services de maintenance réguliers et un support technique réactif en cas de besoin.',
    },
  ];
}
