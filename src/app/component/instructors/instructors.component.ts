import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructors',
  imports: [CtaButtonComponent, CommonModule],
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.scss'
})
export class InstructorsComponent {
  isV2Route: boolean = false;

  constructor(private router: Router) {
    this.isV2Route = this.router.url === '/v2';
  }
}
