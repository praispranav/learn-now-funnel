import { CommonModule } from '@angular/common';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, CarouselModule, CtaButtonComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: `The internship at Learn Now Academy was an invaluable experience. I gained practical skills in front-end and back-end development, working on real-world projects. The mentors were incredibly supportive and provided valuable guidance throughout my learning journey.`,
      name: 'Priya',
      role: 'Junior Developer',
      image:
        'https://defendpro.in/wp-content/uploads/2025/01/pexels-rina-7275701-2048x2048.jpg',
    },
    {
      text: `I highly recommend the full-stack development internship at Learn Now Academy. The program is well-structured, and the hands-on projects allowed me to apply my theoretical knowledge. The collaborative environment fostered a strong sense of community and learning.`,
      name: 'Rohit',
      role: 'Web Developer',
      image:
        'https://defendpro.in/wp-content/uploads/2025/01/pexels-jaswant-shekhawat-2356768-15047379-2048x2048.jpg',
    },
    {
      text: `My internship at Learn Now Academy exceeded my expectations. I learned valuable industry-relevant skills and gained confidence in my abilities. The mentors were patient and approachable, always willing to answer my questions and provide constructive feedback.`,
      name: 'Kajal',
      role: 'Web Developer',
      image:
        'https://defendpro.in/wp-content/uploads/2024/12/portrait-young-indian-woman-happy-with-internship-human-resources-opportunity-mission-vision-company-va-300x300.jpg',
    },
    {
      text: `
The internship program at Learn Now Academy provided me with a strong foundation in full-stack development. I was able to build a portfolio of projects that showcased my skills to potential employers. The experience was challenging yet rewarding, and I am grateful for the opportunity.`,
      name: 'Noorain',
      role: 'Backend Developer',
      image:
        'https://defendpro.in/wp-content/uploads/2025/01/s2-e1735910117455-768x768.jpeg',
    },
    {
      text: `
I am extremely grateful for the internship opportunity at Learn Now Academy. The practical experience I gained was invaluable, and it has significantly boosted my career prospects. The mentors were highly skilled and provided excellent guidance throughout my learning journey.`,
      name: 'Jitendar',
      role: 'SDE',
      image:
        'https://defendpro.in/wp-content/uploads/2025/01/pexels-lappen-fashion-2754326-4295983-2048x2048.jpg',
    },
  ];
  startIndex = 0;
  intervalId: any;
  isV2Route: boolean = false;

  constructor(private router: Router) {
    this.isV2Route = this.router.url === '/v2';
  }
  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.startIndex = (this.startIndex + 1) % this.testimonials.length;
    }, 3000);
  }

  get visibleTestimonials() {
    const total = this.testimonials.length;
    return [
      this.testimonials[this.startIndex % total],
      this.testimonials[(this.startIndex + 1) % total],
      this.testimonials[(this.startIndex + 2) % total],
    ];
  }
}
