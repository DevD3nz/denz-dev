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
          <!-- Contact Info -->
          <div class="contact-info fade-in-up">
            <h3 class="info-title">Let's Connect</h3>
            <p class="info-description">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="method-content">
                  <h4>Email</h4>
                  <a href="mailto:calatravaalden&#64;gmail.com">calatravaalden&#64;gmail.com</a>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="method-content">
                  <h4>Phone</h4>
                  <a href="tel:+639123456789">+63 912 345 6789</a>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="method-content">
                  <h4>Location</h4>
                  <span>Philippines</span>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="method-content">
                  <h4>Availability</h4>
                  <span>Mon - Fri, 9:00 AM - 6:00 PM (PHT)</span>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h4>Follow Me</h4>
              <div class="social-icons">
                <a href="https://www.linkedin.com/in/d3nzofficials/" target="_blank" class="social-link">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/alden-calatrava" target="_blank" class="social-link">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/alden-calatrava" target="_blank" class="social-link">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/alden-calatrava" target="_blank" class="social-link">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form fade-in-up">
            <h3 class="form-title">Send Message</h3>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name" class="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    formControlName="name"
                    class="form-input"
                    [class.error]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                    placeholder="Your full name"
                  >
                  <div class="error-message" *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                    Name is required
                  </div>
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    formControlName="email"
                    class="form-input"
                    [class.error]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                    placeholder="your.email&#64;example.com"
                  >
                  <div class="error-message" *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                    <span *ngIf="contactForm.get('email')?.errors?.['required']">Email is required</span>
                    <span *ngIf="contactForm.get('email')?.errors?.['email']">Please enter a valid email</span>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    formControlName="phone"
                    class="form-input"
                    placeholder="+1 (555) 123-4567"
                  >
                </div>

                <div class="form-group">
                  <label for="budget" class="form-label">Project Budget</label>
                  <select id="budget" formControlName="budget" class="form-input">
                    <option value="">Select budget range</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="service" class="form-label">Service Needed</label>
                <select id="service" formControlName="service" class="form-input">
                  <option value="">Select a service</option>
                  <option value="wordpress">WordPress Development</option>
                  <option value="angular">Angular Application</option>
                  <option value="optimization">Web Performance Optimization</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">Project Details *</label>
                <textarea 
                  id="message"
                  formControlName="message"
                  class="form-textarea"
                  [class.error]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                  placeholder="Tell me about your project, requirements, timeline, and any specific details..."
                  rows="6"
                ></textarea>
                <div class="error-message" *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
                  Please provide project details
                </div>
              </div>

              <div class="form-group">
                <label class="checkbox-label">
                  <input type="checkbox" formControlName="newsletter">
                  <span class="checkmark"></span>
                  I'd like to receive updates about web development tips and insights
                </label>
              </div>

              <button 
                type="submit" 
                class="btn btn-primary btn-lg submit-btn"
                [disabled]="contactForm.invalid || isSubmitting"
              >
                <span *ngIf="!isSubmitting">
                  <i class="fas fa-paper-plane"></i>
                  Send Message
                </span>
                <span *ngIf="isSubmitting" class="loading-text">
                  <i class="fas fa-spinner fa-spin"></i>
                  Sending...
                </span>
              </button>

              <div class="success-message" *ngIf="submitSuccess">
                <i class="fas fa-check-circle"></i>
                Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
              </div>

              <div class="error-message" *ngIf="submitError">
                <i class="fas fa-exclamation-circle"></i>
                Something went wrong. Please try again or contact me directly via email.
              </div>
            </form>
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      margin-bottom: 6rem;

      @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }

    .contact-info {
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
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .contact-method {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .method-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.25rem;
      flex-shrink: 0;
    }

    .method-content {
      h4 {
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 0.25rem;
      }

      a {
        color: var(--primary);
        text-decoration: none;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }

      span {
        color: var(--text-secondary);
      }
    }

    .social-links {
      h4 {
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }
    }

    .social-icons {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 50px;
      height: 50px;
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 1.25rem;
      transition: all 0.3s ease;

      &:hover {
        background: var(--primary);
        color: white;
        transform: translateY(-3px);
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
