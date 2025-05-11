import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-full-stack-program',
  imports: [CtaButtonComponent, CommonModule],
  templateUrl: './full-stack-program.component.html',
  styleUrl: './full-stack-program.component.scss'
})
export class FullStackProgramComponent {
  isV2Route: boolean = false;

  constructor(private router: Router) {
    this.isV2Route = this.router.url === '/v2';
  }
}
