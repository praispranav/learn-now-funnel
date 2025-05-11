import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing-certification',
  imports: [CtaButtonComponent, CommonModule],
  templateUrl: './pricing-certification.component.html',
  styleUrl: './pricing-certification.component.scss'
})
export class PricingCertificationComponent {
  isV2Route: boolean;

  constructor(private router: Router) {
    this.isV2Route = this.router.url === '/v2';
  }

  features = [
    {
      icon: 'fa-solid fa-globe',
      title: 'Globally Valid Certificate',
      description: 'Our certification is recognized by top companies worldwide.',
    },
    {
      icon: 'fa-solid fa-id-card',
      title: 'Add Value to Your Resume',
      description: 'Stand out in the competitive job market with a globally recognized credential.',
    },
  ];
}
