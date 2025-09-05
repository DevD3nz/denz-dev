import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services section-lg">
      <div class="container">
        <div class="section-header text-center mb-12">
          <h2 class="fade-in-up">Services I Offer</h2>
          <p class="text-lg text-secondary fade-in-up">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>

        <!-- Main Services -->
        <div class="services-grid">
          <div class="service-card fade-in-up" *ngFor="let service of mainServices">
            <div class="service-icon">
              <i [class]="service.icon"></i>
            </div>
            <div class="service-content">
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
              <ul class="service-features">
                <li *ngFor="let feature of service.features">
                  <i class="fas fa-check"></i>
                  {{ feature }}
                </li>
              </ul>
              <div class="service-price">
                <span class="price-from">Starting from</span>
                <span class="price-amount">\${{ service.startingPrice }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Process Section -->
        <div class="process-section">
          <h3 class="text-center mb-8 fade-in-up">My Development Process</h3>
          <div class="process-steps">
            <div class="process-step fade-in-up" *ngFor="let step of processSteps; let i = index">
              <div class="step-number">{{ i + 1 }}</div>
              <div class="step-content">
                <div class="step-icon">
                  <i [class]="step.icon"></i>
                </div>
                <h4 class="step-title">{{ step.title }}</h4>
                <p class="step-description">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Services -->
        <div class="additional-services">
          <h3 class="text-center mb-8 fade-in-up">Additional Services</h3>
          <div class="additional-grid">
            <div class="additional-item fade-in-up" *ngFor="let service of additionalServices">
              <div class="additional-icon">
                <i [class]="service.icon"></i>
              </div>
              <div class="additional-content">
                <h4 class="additional-title">{{ service.title }}</h4>
                <p class="additional-description">{{ service.description }}</p>
                <span class="additional-price">\${{ service.price }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Packages -->
        <div class="packages-section">
          <h3 class="text-center mb-8 fade-in-up">Service Packages</h3>
          <div class="packages-grid">
            <div class="package-card fade-in-up" *ngFor="let package of packages" [class.featured]="package.featured">
              <div class="package-header">
                <h4 class="package-name">{{ package.name }}</h4>
                <div class="package-price">
                  <span class="currency">$</span>
                  <span class="amount">{{ package.price }}</span>

                </div>
                <p class="package-description">{{ package.description }}</p>
              </div>
              <div class="package-features">
                <ul>
                  <li *ngFor="let feature of package.features">
                    <i class="fas fa-check"></i>
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <div class="package-action">
                <a href="#contact" class="btn" [class.btn-primary]="package.featured" [class.btn-outline]="!package.featured">
                  Get Started
                </a>
              </div>
              <div class="featured-badge" *ngIf="package.featured">
                <span>Most Popular</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="services-cta fade-in-up">
          <div class="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss your requirements and create something amazing together.</p>
            <div class="cta-actions">
              <a href="#contact" class="btn btn-primary btn-lg">
                <i class="fas fa-rocket"></i>
                Start Project
              </a>
              <a href="tel:+639764449562" class="btn btn-outline btn-lg">
                <i class="fas fa-phone"></i>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background: var(--bg-secondary);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 6rem;
    }

    .service-card {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 2.5rem;
      border: 1px solid var(--border);
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      &:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-lg);
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--primary), var(--secondary));
        transition: left 0.3s ease;
      }

      &:hover::before {
        left: 0;
      }
    }

    .service-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 2rem;
      color: white;
      font-size: 2rem;
    }

    .service-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .service-description {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .service-features {
      list-style: none;
      margin-bottom: 2rem;
      text-align: left;

      li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
        color: var(--text-secondary);

        i {
          color: var(--secondary);
          font-size: 0.875rem;
        }
      }
    }

    .service-price {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
    }

    .price-from {
      font-size: 0.875rem;
      color: var(--text-light);
    }

    .price-amount {
      font-size: 2rem;
      font-weight: 800;
      color: var(--primary);
    }

    /* Process Section */
    .process-section {
      margin-bottom: 6rem;

      h3 {
        color: var(--text-primary);
        font-weight: 600;
      }
    }

    .process-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .process-step {
      text-align: center;
      position: relative;
    }

    .step-number {
      width: 60px;
      height: 60px;
      background: var(--primary);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0 auto 1rem;
    }

    .step-icon {
      font-size: 2rem;
      color: var(--secondary);
      margin-bottom: 1rem;
    }

    .step-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .step-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    /* Additional Services */
    .additional-services {
      margin-bottom: 6rem;

      h3 {
        color: var(--text-primary);
        font-weight: 600;
      }
    }

    .additional-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .additional-item {
      display: flex;
      gap: 1rem;
      background: var(--bg-primary);
      border-radius: var(--radius);
      padding: 1.5rem;
      border: 1px solid var(--border);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-3px);
      }
    }

    .additional-icon {
      font-size: 2rem;
      color: var(--primary);
      flex-shrink: 0;
      margin-top: 0.25rem;
    }

    .additional-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .additional-description {
      color: var(--text-secondary);
      margin-bottom: 0.75rem;
    }

    .additional-price {
      font-weight: 700;
      color: var(--primary);
      font-size: 1.125rem;
    }

    /* Packages */
    .packages-section {
      margin-bottom: 6rem;

      h3 {
        color: var(--text-primary);
        font-weight: 600;
      }
    }

    .packages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .package-card {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 2rem;
      border: 1px solid var(--border);
      text-align: center;
      position: relative;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
      }

      &.featured {
        border-color: var(--primary);
        box-shadow: var(--shadow);
        transform: scale(1.05);

        &:hover {
          transform: scale(1.05) translateY(-5px);
        }
      }
    }

    .package-header {
      margin-bottom: 2rem;
    }

    .package-name {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .package-price {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 0.25rem;
      margin-bottom: 1rem;

      .currency {
        font-size: 1.25rem;
        color: var(--text-secondary);
      }

      .amount {
        font-size: 3rem;
        font-weight: 800;
        color: var(--primary);
      }

      .period {
        color: var(--text-light);
      }
    }

    .package-description {
      color: var(--text-secondary);
    }

    .package-features {
      margin-bottom: 2rem;

      ul {
        list-style: none;
        text-align: left;

        li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: var(--text-secondary);

          i {
            color: var(--secondary);
            font-size: 0.875rem;
          }
        }
      }
    }

    .package-action {
      .btn {
        width: 100%;
      }
    }

    .featured-badge {
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--primary);
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 0 0 20px 20px;
      font-size: 0.875rem;
      font-weight: 600;
    }

    /* CTA Section */
    .services-cta {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 3rem 2rem;
      text-align: center;
      border: 1px solid var(--border);
    }

    .cta-content {
      h3 {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.125rem;
        color: var(--text-secondary);
        margin-bottom: 2rem;
      }
    }

    .cta-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;

      @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
      }
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
      }

      .process-steps {
        grid-template-columns: 1fr;
      }

      .additional-grid {
        grid-template-columns: 1fr;
      }

      .packages-grid {
        grid-template-columns: 1fr;
      }

      .package-card.featured {
        transform: none;
      }
    }
  `]
})
export class ServicesComponent {
  mainServices = [
    {
      title: 'WordPress Development',
      description: 'Custom WordPress websites with modern design, optimized performance, and SEO-friendly structure.',
      icon: 'fab fa-wordpress',
      features: [
        'Custom Plugin Development',
        'Plugin Development & Integration',
        'E-commerce Integration',
        'Google API Integration',
        'Performance Optimization',
        'Responsive Design',
        'SEO Basic Setup'
      ],
      startingPrice: 500
    },
    {
      title: 'Angular Applications',
      description: 'Modern, scalable Angular applications with clean architecture and optimal user experience.',
      icon: 'fab fa-angular',
      features: [
        'Single Page Applications',
        'Progressive Web Apps',
        'API Integration',
        'State Management',
        'Material Design',
        'Testing & Documentation'
      ],
      startingPrice: 1200
    },
    {
      title: 'Web Performance Optimization',
      description: 'Comprehensive optimization to improve your website speed, and user experience.',
      icon: 'fas fa-tachometer-alt',
      features: [
        'Core Web Vitals Optimization',
        'Image & Asset Optimization',
        'Caching Implementation',
        'Database Optimization',
        'CDN Setup',
        'Performance Monitoring'
      ],
      startingPrice: 200
    }
  ];

  processSteps = [
    {
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, goals, and creating a detailed project roadmap.',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes for your approval.',
      icon: 'fas fa-pencil-ruler'
    },
    {
      title: 'Development',
      description: 'Building your project with clean, maintainable code following best practices.',
      icon: 'fas fa-code'
    },
    {
      title: 'Testing & Optimization',
      description: 'Thorough testing across devices and browsers, plus performance optimization.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Launch & Support',
      description: 'Deploying your project and providing ongoing support and maintenance.',
      icon: 'fas fa-rocket'
    }
  ];

  additionalServices = [
    {
      title: 'Audit Logs',
      description: 'Audit logs to track the activity of the users in the application.',
      icon: 'fas fa-search',
      price: 300
    },
    {
      title: 'Website Maintenance',
      description: 'Monthly maintenance including updates, backups, and security monitoring.',
      icon: 'fas fa-tools',
      price: 150
    },
    {
      title: 'Custom Plugin Development',
      description: 'Tailored WordPress plugins to extend your website functionality.',
      icon: 'fas fa-puzzle-piece',
      price: 400
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with third-party services and APIs.',
      icon: 'fas fa-plug',
      price: 250
    },
    {
      title: 'Database Optimization',
      description: 'Database cleanup and optimization for improved performance.',
      icon: 'fas fa-database',
      price: 200
    },
    {
      title: 'Security Hardening',
      description: 'Enhanced security measures to protect your website from threats.',
      icon: 'fas fa-shield-alt',
      price: 350
    }
  ];

  packages = [
    {
      name: 'Starter',
      price: 500,
      description: 'Perfect for small businesses and personal websites',
      features: [
        'Responsive WordPress Website',
        'Up to 5 Pages',
        'Contact Form',
        'Basic SEO Setup',
        'Mobile Optimization',
        '30 Days Support'
      ],
      featured: false
    },
    {
      name: 'Professional',
      price: 1200,
      description: 'Ideal for growing businesses and online presence',
      features: [
        'Custom WordPress Theme',
        'Up to 15 Pages',
        'E-commerce Integration',
        'Advanced SEO',
        'Performance Optimization',
        'Google Analytics Setup',
        '90 Days Support'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 5000,
      description: 'Complete solution for large businesses',
      features: [
        'Custom Angular Application',
        'Advanced Functionality',
        'API Integrations',
        'User Management System',
        'Performance Monitoring',
        'Custom Admin Panel',
        '6 Months Support'
      ],
      featured: false
    }
  ];
}
