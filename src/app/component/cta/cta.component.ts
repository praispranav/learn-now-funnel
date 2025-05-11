import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  imports: [CtaButtonComponent, CommonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  isV2Route: boolean;

  constructor(private router: Router) {
    this.isV2Route = this.router.url === '/v2';
  }
}
