import { Component } from '@angular/core';
import { HeadserviceSectionComponent } from '../../shared/headservice-section/headservice-section.component';

@Component({
  selector: 'app-services',
  imports: [HeadserviceSectionComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {}
