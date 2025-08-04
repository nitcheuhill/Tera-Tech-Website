import { Component } from '@angular/core';
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
export class ServicesComponent {}
