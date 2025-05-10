import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CtaButtonComponent } from "../../shared/cta-button/cta-button.component";

@Component({
  selector: 'app-salary-alumni',
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './salary-alumni.component.html',
  styleUrl: './salary-alumni.component.scss'
})
export class SalaryAlumniComponent {
  alumni = [
    {
      name: 'Komal',
      company: 'Scorpius Solution SDN BHN',
      image: 'https://defendpro.in/wp-content/uploads/2025/01/s5-e1735909952194.jpeg'
    },
    {
      name: 'Tushar',
      company: 'TCS',
      image: 'https://defendpro.in/wp-content/uploads/2025/01/s4-e1735909996807.jpeg'
    },
    {
      name: 'Riti',
      company: 'Scorpius Solution SDN BHN',
      image: 'https://defendpro.in/wp-content/uploads/2025/01/s3-e1735910064264.jpeg'
    },
    {
      name: 'Noorin',
      company: 'Adstia Agency',
      image: 'https://defendpro.in/wp-content/uploads/2025/01/s2-e1735910117455.jpeg'
    },
    {
      name: 'Tanu',
      company: 'Adstia Agency',
      image: 'https://defendpro.in/wp-content/uploads/2025/01/Tanu.jpeg'
    }
  ];
}
