import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../shared/cta-button/cta-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pain-point',
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './pain-point.component.html',
  styleUrl: './pain-point.component.scss',
})
export class PainPointComponent {
  features = [
    {
      description:
        ' You’ve done online courses but still can’t build real projects.',
    },
    {
      description: 'No recognized certification to showcase your skills.',
    },
    {
      description: 'Rejected by companies due to lack of hands-on experience.',
    },
    {
      description: 'Rejected by companies due to lack of hands-on experience.',
    },
  ];
}
