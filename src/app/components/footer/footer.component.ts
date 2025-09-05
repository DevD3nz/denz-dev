import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Main Footer Content -->
          <div class="footer-main">
            <div class="footer-brand">
              <div class="brand-logo">
                <span class="logo-name">Alden</span>
                <span class="logo-dot">.</span>
              </div>
              <p class="brand-description">
                Web Developer specializing in WordPress and Angular applications. 
                Creating modern, responsive websites that drive business growth.
              </p>
              <div class="social-links">
                <a href="https://linkedin.com/in/alden-calatrava" target="_blank" class="social-link">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/alden-calatrava" target="_blank" class="social-link">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/alden-calatrava" target="_blank" class="social-link">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="mailto:calatravaalden&#64;gmail.com" class="social-link">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            <div class="footer-links">
              <div class="link-group">
                <h4 class="link-title">Navigation</h4>
                <ul class="link-list">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#works">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div class="link-group">
                <h4 class="link-title">Services</h4>
                <ul class="link-list">
                  <li><a href="#services">WordPress Development</a></li>
                  <li><a href="#services">Angular Applications</a></li>
                  <li><a href="#services">Web Optimization</a></li>
                  <li><a href="#services">Google API Integration</a></li>
                  <li><a href="#services">Custom Plugin Creation WordPress</a></li>
                  <li><a href="#services">Maintenance</a></li>
                </ul>
              </div>

              <div class="link-group">
                <h4 class="link-title">Contact Info</h4>
                <ul class="contact-info">
                  <li>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:denz.devtest&#64;gmail.com">denz.devtest&#64;gmail.com</a>
                  </li>
                  <li>
                    <i class="fas fa-phone"></i>
                    <a href="tel:+639123456789">+63 09764449562</a>
                  </li>
                  <li>
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Philippines</span>
                  </li>
                  <li>
                    <i class="fas fa-clock"></i>
                    <span>Mon - Fri, 9AM - 6PM PHT</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>



          <!-- Quick Stats -->
          <div class="footer-stats">
            <div class="stat-item">
              <span class="stat-number">8+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">4+</span>
              <span class="stat-label">Years</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="copyright">
              <p>&copy; {{ currentYear }} Alden Calatrava. All rights reserved.</p>
            </div>
            <div class="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>

        <!-- Back to Top -->
        <button 
          class="back-to-top" 
          [class.visible]="showBackToTop"
          (click)="scrollToTop()"
          title="Back to top"
        >
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #000000 0%, #000000 100%);
      color: #e5e7eb;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      }
    }

    .footer-content {
      padding: 4rem 0 2rem;
    }

    .footer-main {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
      margin-bottom: 3rem;

      @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }

    .footer-brand {
      .brand-logo {
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 1rem;

        .logo-name {
          color: white;
        }

        .logo-dot {
          color: var(--primary);
        }
      }

      .brand-description {
        color: #9ca3af;
        line-height: 1.6;
        margin-bottom: 2rem;
        max-width: 300px;
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 45px;
      height: 45px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9ca3af;
      text-decoration: none;
      font-size: 1.125rem;
      transition: all 0.3s ease;

      &:hover {
        background: var(--primary);
        border-color: var(--primary);
        color: white;
        transform: translateY(-3px);
      }
    }

    .footer-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .link-group {
      .link-title {
        color: white;
        font-weight: 600;
        font-size: 1.125rem;
        margin-bottom: 1rem;
      }

      .link-list {
        list-style: none;

        li {
          margin-bottom: 0.75rem;

          a {
            color: #9ca3af;
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
              color: var(--primary);
            }
          }
        }
      }

      .contact-info {
        list-style: none;

        li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: #9ca3af;

          i {
            color: var(--primary);
            width: 16px;
            flex-shrink: 0;
          }

          a {
            color: #9ca3af;
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
              color: var(--primary);
            }
          }
        }
      }
    }

    .newsletter-section {
      background: rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-lg);
      padding: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 3rem;

      .newsletter-title {
        color: white;
        font-weight: 600;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }

      .newsletter-description {
        color: #9ca3af;
        margin-bottom: 1.5rem;
      }
    }

    .newsletter-form {
      .newsletter-input {
        display: flex;
        gap: 0.5rem;

        input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 0.875rem;
          transition: all 0.3s ease;

          &::placeholder {
            color: #9ca3af;
          }

          &:focus {
            outline: none;
            border-color: var(--primary);
            background: rgba(255, 255, 255, 0.15);
          }
        }

        .newsletter-btn {
          width: 45px;
          height: 45px;
          background: var(--primary);
          border: none;
          border-radius: var(--radius);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background: var(--primary-dark);
            transform: scale(1.05);
          }
        }
      }
    }

    .footer-stats {
      display: flex;
      justify-content: center;
      gap: 3rem;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 3rem;

      @media (max-width: 600px) {
        gap: 2rem;
      }
    }

    .stat-item {
      text-align: center;

      .stat-number {
        display: block;
        font-size: 2rem;
        font-weight: 800;
        color: var(--primary);
        line-height: 1;
      }

      .stat-label {
        font-size: 0.875rem;
        color: #9ca3af;
        font-weight: 500;
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 2rem;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;
      }
    }

    .copyright {
      p {
        color: #9ca3af;
        font-size: 0.875rem;
        margin: 0;
      }
    }

    .footer-bottom-links {
      display: flex;
      gap: 2rem;

      a {
        color: #9ca3af;
        text-decoration: none;
        font-size: 0.875rem;
        transition: color 0.3s ease;

        &:hover {
          color: var(--primary);
        }
      }

      @media (max-width: 600px) {
        gap: 1rem;
      }
    }

    .back-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      background: var(--primary);
      border: none;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      font-size: 1.25rem;
      box-shadow: var(--shadow-lg);
      transition: all 0.3s ease;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      z-index: 1000;

      &.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      &:hover {
        background: var(--primary-dark);
        transform: translateY(-3px);
      }
    }

    @media (max-width: 768px) {
      .footer-main {
        grid-template-columns: 1fr;
      }

      .footer-links {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-stats {
        flex-direction: column;
        gap: 1rem;
      }

      .newsletter-section {
        padding: 1.5rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';
  showBackToTop = false;

  constructor() {
    // Listen for scroll events to show/hide back to top button
    window.addEventListener('scroll', () => {
      this.showBackToTop = window.pageYOffset > 300;
    });
  }

  subscribeNewsletter() {
    if (this.newsletterEmail) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', this.newsletterEmail);
      this.newsletterEmail = '';
      // Show success message or handle the subscription
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
