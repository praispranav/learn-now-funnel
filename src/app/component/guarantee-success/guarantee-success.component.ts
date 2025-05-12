import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guarantee-success',
  imports: [CtaButtonComponent, CommonModule],
  templateUrl: './guarantee-success.component.html',
  styleUrl: './guarantee-success.component.scss'
})
export class GuaranteeSuccessComponent {
  isV2Route: boolean = false;

  constructor(private router: Router) {
    this.isV2Route = this.router.url === '/v2';
  }
}
