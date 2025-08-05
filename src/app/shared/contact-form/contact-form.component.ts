import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  contactInfo = {
    email: 'teratechsolutionssarl@gmail.com',
    phone: '+237 698 800 120',
    companyName: 'Tera Tech Solutions Sarl',
  };

  async onSubmit(form: NgForm): Promise<void> {
    if (form.valid) {
      this.isSubmitting = true;
      this.showErrorMessage = false;

      try {
        // Simuler l'envoi du formulaire
        await this.submitForm(this.contactForm);
        this.showSuccessMessage = true;
        this.resetForm();

        // Cacher le message de succès après 5 secondes
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      } catch (error) {
        this.showErrorMessage = true;
        console.error("Erreur lors de l'envoi:", error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  private async submitForm(formData: ContactForm): Promise<void> {
    // Simuler un appel API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simuler un succès 90% du temps
        if (Math.random() > 0.1) {
          console.log('Formulaire envoyé:', formData);
          resolve();
        } else {
          reject(new Error('Erreur simulée'));
        }
      }, 2000);
    });
  }

  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
  }

  onPhoneClick(): void {
    window.location.href = `tel:${this.contactInfo.phone}`;
  }

  onEmailClick(): void {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }
}
