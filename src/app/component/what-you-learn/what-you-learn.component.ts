import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-what-you-learn',
  imports: [CtaButtonComponent, CommonModule],
  templateUrl: './what-you-learn.component.html',
  styleUrl: './what-you-learn.component.scss'
})
export class WhatYouLearnComponent {
  isV2Route: boolean = false;

  constructor(private router: Router) {
    this.isV2Route = this.router.url === '/v2';
  }
}
