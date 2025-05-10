import { Component, Input } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-button',
  imports: [ModalComponent, CommonModule],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss'
})
export class CtaButtonComponent {
  @Input() text: string = 'Get Started Today';
  @Input() icon: string = 'fas fa-rocket';

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
