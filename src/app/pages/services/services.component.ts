import { Component } from '@angular/core';
import { HeadserviceSectionComponent } from '../../shared/headservice-section/headservice-section.component';
import { SellInfoToolsSectionComponent } from '../../shared/sell-info-tools-section/sell-info-tools-section.component';

@Component({
  selector: 'app-services',
  imports: [HeadserviceSectionComponent, SellInfoToolsSectionComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {}
