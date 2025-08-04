import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeadserviceSectionComponent } from '../../shared/headservice-section/headservice-section.component';
import { SellInfoToolsSectionComponent } from '../../shared/sell-info-tools-section/sell-info-tools-section.component';
import { RentenginsComponent } from '../../shared/rentengins/rentengins.component';
import { LogisticTransportComponent } from '../../shared/logistic-transport/logistic-transport.component';
import { VideoServiceComponent } from '../../shared/video-service/video-service.component';

@Component({
  selector: 'app-services',
  imports: [
    HeadserviceSectionComponent,
    SellInfoToolsSectionComponent,
    RentenginsComponent,
    LogisticTransportComponent,
    VideoServiceComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Écouter les changements de fragment dans l'URL
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }

  ngAfterViewInit(): void {
    // Vérifier s'il y a un fragment au chargement initial de la page
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      // Délai pour s'assurer que tous les composants sont rendus
      setTimeout(() => {
        this.scrollToSection(fragment);
      }, 100);
    }
  }

  private scrollToSection(fragment: string): void {
    try {
      // Rechercher l'élément par le sélecteur du composant
      const element = document.querySelector(fragment);

      if (element) {
        // Scroll fluide vers l'élément
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });

        // console.log(`Scroll vers la section: ${fragment}`);
      } else {
        console.warn(`Section non trouvée: ${fragment}`);

        // Fallback : essayer de trouver par ID si le sélecteur ne fonctionne pas
        const elementById = document.getElementById(
          fragment.replace(/^app-/, '')
        );
        if (elementById) {
          elementById.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      }
    } catch (error) {
      console.error('Erreur lors du scroll:', error);
    }
  }
}
