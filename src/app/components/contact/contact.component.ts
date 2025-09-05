import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="contact section-lg">
      <div class="container">
        <div class="section-header text-center mb-12">
          <h2 class="fade-in-up">Get In Touch</h2>
          <p class="text-lg text-secondary fade-in-up">
            Ready to start your project? Let's discuss your ideas and bring them to life
          </p>
        </div>

        <div class="contact-content">
          <div class="contact-info fade-in-up">
            <div class="contact-methods">
              <a href="mailto:denz.devtest&#64;gmail.com" class="contact-link">
                <i class="fas fa-envelope"></i>
                denz.devtest&#64;gmail.com
              </a>

              <a href="tel:+639123456789" class="contact-link">
                <i class="fas fa-phone"></i>
                +63 09764449562
              </a>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="faq-section fade-in-up">
          <h3 class="text-center mb-8">Frequently Asked Questions</h3>
          <div class="faq-grid">
            <div class="faq-item" *ngFor="let faq of faqs">
              <h4 class="faq-question">{{ faq.question }}</h4>
              <p class="faq-answer">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: var(--bg-primary);
    }

    .contact-content {
      display: flex;
      justify-content: center;
      margin-bottom: 6rem;
    }

    .contact-info {
      text-align: center;
      max-width: 600px;
      width: 100%;

      .info-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }

      .info-description {
        color: var(--text-secondary);
        margin-bottom: 2rem;
        line-height: 1.6;
      }
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 2rem;
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 50px;
      color: var(--text-primary);
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 500;
      transition: all 0.3s ease;
      min-width: 300px;
      justify-content: center;

      i {
        color: var(--primary);
        font-size: 1.2rem;
      }

      &:hover {
        background: var(--primary);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);

        i {
          color: white;
        }
      }
    }

    .contact-form {
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      padding: 2.5rem;
      border: 1px solid var(--border);

      .form-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 2rem;
      }
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-label {
      display: block;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .form-input,
    .form-textarea {
      width: 100%;
      padding: 0.875rem;
      border: 2px solid var(--border);
      border-radius: var(--radius);
      font-size: 1rem;
      transition: all 0.3s ease;
      background: var(--bg-primary);

      &:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
      }

      &.error {
        border-color: #ef4444;
      }

      &::placeholder {
        color: var(--text-light);
      }
    }

    .form-textarea {
      resize: vertical;
      font-family: inherit;
    }

    .checkbox-label {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
      color: var(--text-secondary);
      line-height: 1.5;

      input[type="checkbox"] {
        display: none;
      }

      .checkmark {
        width: 20px;
        height: 20px;
        border: 2px solid var(--border);
        border-radius: 4px;
        position: relative;
        transition: all 0.3s ease;
        flex-shrink: 0;
        margin-top: 2px;

        &::after {
          content: '';
          position: absolute;
          left: 6px;
          top: 2px;
          width: 6px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
      }

      input[type="checkbox"]:checked + .checkmark {
        background: var(--primary);
        border-color: var(--primary);

        &::after {
          opacity: 1;
        }
      }
    }

    .submit-btn {
      width: 100%;
      margin-top: 1rem;
    }

    .loading-text {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .success-message,
    .error-message {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 1rem;
      padding: 1rem;
      border-radius: var(--radius);
      font-weight: 500;

      i {
        font-size: 1.25rem;
      }
    }

    .success-message {
      background: #dcfce7;
      color: #166534;
      border: 1px solid #bbf7d0;
    }

    .error-message {
      background: #fef2f2;
      color: #dc2626;
      border: 1px solid #fecaca;
    }

    /* FAQ Section */
    .faq-section {
      h3 {
        color: var(--text-primary);
        font-weight: 600;
      }
    }

    .faq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .faq-item {
      background: var(--bg-secondary);
      border-radius: var(--radius);
      padding: 1.5rem;
      border: 1px solid var(--border);
    }

    .faq-question {
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.75rem;
    }

    .faq-answer {
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 768px) {
      .contact-form {
        padding: 2rem;
      }

      .faq-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple WordPress site takes 2-4 weeks, while complex applications can take 2-4 months. I\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes! I offer monthly maintenance packages that include updates, backups, security monitoring, and performance optimization to keep your website running smoothly.'
    },
    {
      question: 'What\'s your development process?',
      answer: 'I follow a structured approach: Discovery & Planning → Design & Prototyping → Development → Testing & Optimization → Launch & Support. You\'ll be involved at every step.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! I work with clients worldwide and am comfortable with different time zones. Communication is primarily through email, video calls, and project management tools.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in WordPress (PHP, MySQL), Angular (TypeScript, JavaScript), and web performance optimization. I also have experience with various APIs and third-party integrations.'
    },
    {
      question: 'How do you handle project payments?',
      answer: 'I typically work with a 50% upfront payment and 50% upon completion for smaller projects. Larger projects can be broken into milestones with payments tied to deliverables.'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      budget: [''],
      service: [''],
      message: ['', [Validators.required]],
      newsletter: [false]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
