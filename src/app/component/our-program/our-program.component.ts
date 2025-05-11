import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-program',
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './our-program.component.html',
  styleUrl: './our-program.component.scss'
})
export class OurProgramComponent {
  features = [
    {
      title: 'Live Client Projects',
      description:
        'Work on real-world projects to build your portfolio.',
    },
    {
      title: 'Paid Internships',
      description:
        'Earn while you learn with guaranteed internships.',
    },
    {
      title: 'Globally Valid Certificate',
      description:
        'Get certified and recognized worldwide.',
    },
    {
      title: 'Job Assistance',
      description:
        'Dedicated support for job placements in India and abroad.',
    },
    {
      title: 'International Work Experience',
      description:
        'Gain exposure from global projects.',
    },
  ];
  isV2Route: boolean = false;

  constructor(private router: Router) {
    this.isV2Route = this.router.url === '/v2';
  }
}
