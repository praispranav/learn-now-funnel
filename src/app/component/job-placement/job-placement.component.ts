import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-placement',
  imports: [CtaButtonComponent, CommonModule],
  templateUrl: './job-placement.component.html',
  styleUrl: './job-placement.component.scss'
})
export class JobPlacementComponent {
  isV2Route: boolean = false;

  constructor(private router: Router) {
    this.isV2Route = this.router.url === '/v2';
  }
}
