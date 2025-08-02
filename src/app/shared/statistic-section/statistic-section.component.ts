import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IntersectionObserverDirective } from '../../intersection-observer.directive';

@Component({
  selector: 'app-statistic-section',
  imports: [CommonModule, IntersectionObserverDirective],
  templateUrl: './statistic-section.component.html',
  styleUrl: './statistic-section.component.scss',
})
export class StatisticSectionComponent {
  title = "Tera Tech Solutions c'est ?";

  statistics = [
    {
      icon: '/Assets/Hero-section/profile-2user.svg',
      number: '40',
      targetValue: 40,
      currentValue: 0,
      description: 'Plus de 40 spécialistes prêt à vous satisfaire',
    },
    {
      icon: '/Assets/Hero-section/clipboard.svg',
      number: '60',
      targetValue: 60,
      currentValue: 0,
      description: 'Plus de 60 projets depuis sa création',
    },
    {
      icon: '/Assets/Hero-section/clock.svg',
      number: '11200',
      targetValue: 11200,
      currentValue: 0,
      description: 'Plus de 11200 heures de spécialisation depuis sa création',
    },
    {
      icon: '/Assets/Hero-section/smiley-heart.svg',
      number: '50',
      targetValue: 50,
      currentValue: 0,
      description: 'Plus de 50 clients satisfaits',
    },
  ];

  // Image principale des personnes avec graphique
  mainImage = '/Assets/Hero-section/Group 37422.svg';

  private hasAnimated = false;

  onIntersection(isVisible: boolean) {
    if (isVisible && !this.hasAnimated) {
      this.hasAnimated = true;
      this.startCountingAnimation();
    }
  }

  private startCountingAnimation() {
    this.statistics.forEach((stat) => {
      this.animateCounter(stat, 2500); // 2.5 secondes d'animation
    });
  }

  private animateCounter(stat: any, duration: number) {
    const startTime = performance.now();
    const startValue = 0;
    const endValue = stat.targetValue;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Utilisation d'une fonction d'easing pour un effet plus fluide
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      stat.currentValue = Math.floor(
        startValue + (endValue - startValue) * easeOutQuart
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        stat.currentValue = endValue; // S'assurer d'atteindre la valeur finale
      }
    };

    requestAnimationFrame(animate);
  }

  // Méthode pour formater les nombres avec des espaces pour les milliers
  formatNumber(value: number): string {
    return value.toLocaleString('fr-FR');
  }

  // TrackBy function pour optimiser le rendu
  trackByStat(index: number, stat: any): any {
    return stat.targetValue;
  }
}
