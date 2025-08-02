import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { AboutSectionComponent } from '../../shared/about-section/about-section.component';
import { ClientSectionComponent } from '../../shared/client-section/client-section.component';
import { StatisticSectionComponent } from '../../shared/statistic-section/statistic-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ClientSectionComponent,
    StatisticSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
