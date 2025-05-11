import { Component } from '@angular/core';
import { LandingCardComponent } from '../../component/landing-card/landing-card.component';
import { TopCompaniesComponent } from '../../component/top-companies/top-companies.component';
import { WhyLearnNowComponent } from '../../component/why-learn-now/why-learn-now.component';
import { ProgramCheckComponent } from '../../component/program-check/program-check.component';
import { PainPointComponent } from '../../component/pain-point/pain-point.component';
import { JobPlacementComponent } from '../../component/job-placement/job-placement.component';
import { FullStackProgramComponent } from '../../component/full-stack-program/full-stack-program.component';
import { WhatYouLearnComponent } from '../../component/what-you-learn/what-you-learn.component';
import { OurProgramComponent } from '../../component/our-program/our-program.component';
import { RoadmapComponent } from '../../component/roadmap/roadmap.component';
import { JobRolesComponent } from '../../component/job-roles/job-roles.component';
import { SalaryAlumniComponent } from '../../component/salary-alumni/salary-alumni.component';
import { PricingCertificationComponent } from '../../component/pricing-certification/pricing-certification.component';
import { GuaranteeSuccessComponent } from '../../component/guarantee-success/guarantee-success.component';
import { WorkExperienceComponent } from '../../component/work-experience/work-experience.component';
import { InstructorsComponent } from '../../component/instructors/instructors.component';
import { TestimonialsComponent } from '../../component/testimonials/testimonials.component';
import { FaqComponent } from '../../component/faq/faq.component';
import { CtaComponent } from '../../component/cta/cta.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';

@Component({
  selector: 'app-about',
  imports: [
    LandingCardComponent,
    TopCompaniesComponent,
    WhyLearnNowComponent,
    CtaButtonComponent,
    ProgramCheckComponent,
    PainPointComponent,
    JobPlacementComponent,
    FullStackProgramComponent,
    WhatYouLearnComponent,
    OurProgramComponent,
    RoadmapComponent,
    JobRolesComponent,
    SalaryAlumniComponent,
    PricingCertificationComponent,
    GuaranteeSuccessComponent,
    WorkExperienceComponent,
    InstructorsComponent,
    TestimonialsComponent,
    FaqComponent,
    CtaComponent,
    FooterComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
