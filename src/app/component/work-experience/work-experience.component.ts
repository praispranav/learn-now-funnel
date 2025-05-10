import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
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
