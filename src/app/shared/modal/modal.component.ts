import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  loading = false;

  form: FormGroup<any>;
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      education: ['bca', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      // Your submission logic here
      this.loading = true;
      this.apiService
        .insertLead({
          ...this.form.value,
          leadsType: sessionStorage.getItem('leadsType') || 'Webinar',
        })
        .subscribe({
          next: (res) => {
            console.log(res);
            this.onClose();
            this.loading = false;
          },
          error: (err) => {
            console.error(err);
          },
        });
    } else {
      // Mark all controls as touched to trigger error display
      this.markAllAsTouched();
    }
  }

  onClose() {
    // Your logic to close the modal
    const webinarLink = 'https://rzp.io/rzp/learn-now-webinar';
    const partialPaymentLink = ' https://rzp.io/rzp/learn-now-course-partial';
    const fullPaymentLink = 'https://rzp.io/rzp/learn-now-course'

    const leadsType = sessionStorage.getItem('leadsType');
    if(leadsType === 'Full'){
      window.open(fullPaymentLink, );
    } else if (leadsType === 'Partial') {
      window.open(partialPaymentLink, );
    } else {
      window.open(webinarLink,);
    }

    console.log('Modal closed');
    this.close.emit();
  }

  markAllAsTouched() {
    this.form.markAllAsTouched();
  }
}
