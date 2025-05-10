import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-program-check',
  imports: [CommonModule],
  templateUrl: './program-check.component.html',
  styleUrl: './program-check.component.scss'
})
export class ProgramCheckComponent {
  reasons = [
    "You're a fresh graduate struggling to land your first tech job",
    "You're an IT professional stuck in a low-paying role",
    "You've learned coding but lack real-world project experience",
    "You want global certifications to boost your credibility",
    "You're committed to mastering full stack development and building a high-growth career"
  ];
}
