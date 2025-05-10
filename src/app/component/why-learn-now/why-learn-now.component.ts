import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';

@Component({
  selector: 'app-why-learn-now',
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './why-learn-now.component.html',
  styleUrl: './why-learn-now.component.scss',
})
export class WhyLearnNowComponent {
  features = [
    {
      title: '6-Months Comprehensive Training',
      description: 'Master the latest technologies in MEAN/MERN Stack.',
    },
    {
      title: 'Live Client Projects',
      description: 'Gain hands-on experience with real-world projects.',
    },
    {
      title: 'Expert Mentors',
      description:
        'Learn from industry professionals with years of experience.',
    },
    {
      title: '100% Job Assurance',
      description: 'We guarantee job placement upon course completion.',
    },
    {
      title: 'Global Opportunities',
      description:
        'Get assistance in securing jobs abroad and gain international work experience.',
    },
  ];
}
