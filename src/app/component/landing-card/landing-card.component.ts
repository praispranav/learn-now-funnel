import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CtaButtonComponent } from "../../shared/cta-button/cta-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-card',
  standalone: true,
  imports: [CtaButtonComponent, CommonModule],
  templateUrl: './landing-card.component.html',
  styleUrls: ['./landing-card.component.scss']
})
export class LandingCardComponent {
  isV2Route: boolean = false;

  constructor(private router: Router) {
    this.isV2Route = this.router.url === '/v2';
  }
}
