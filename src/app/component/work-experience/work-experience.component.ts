import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  isV2Route: boolean = false;

  constructor(private router: Router) {
    this.isV2Route = this.router.url === '/v2';
  }
  
  features = [
    {icon:"fa-solid fa-earth-asia",
      title: 'Global Exposure',
      description: 'Work on international projects and gain valuable experience.',
    },
    {icon:"fa-solid fa-id-card",
      title: 'Enhance Your Profile',
      description: 'Add international work experience to your resume and stand out.',
    },
  ];
}
