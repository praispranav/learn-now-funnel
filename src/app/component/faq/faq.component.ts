import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs = [
    {
      question: 'Is there any job guarantee?',
      answer: 'Yes, we offer 100% job assurance upon course completion.',
      isOpen: false
    },
    {
      question: 'What is the duration of the program?',
      answer: 'The program duration may vary, typically ranging from 6 to 12 months.',
      isOpen: false
    },
    {
      question: 'Can I pay in installments?',
      answer: 'Yes, we provide flexible installment payment options.',
      isOpen: false
    },
    {
      question: 'Is the certificate globally valid?',
      answer: 'Yes, the certificate is recognized and accepted globally.',
      isOpen: false
    }
  ];

  toggle(index: number): void {
    this.faqs.forEach((faq, i) => {
      faq.isOpen = i === index ? !faq.isOpen : false;
    });
  }
}