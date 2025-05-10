import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss'
})
export class CtaButtonComponent {
  @Input() text: string = 'Get Started Today';
  @Input() icon: string = 'fas fa-rocket';
}
