import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="works section-lg">
      <div class="container">
        <div class="section-header text-center mb-12">
          <h2 class="fade-in-up">Featured Works</h2>
          <p class="text-lg text-secondary fade-in-up">
            A showcase of my recent projects and achievements
          </p>
        </div>

        <!-- Project Filters -->
        <!-- <div class="project-filters fade-in-up">
          <button 
            class="filter-btn" 
            [class.active]="selectedFilter === 'all'"
            (click)="filterProjects('all')"
          >
            All Projects
          </button>
          <button 
            class="filter-btn" 
            [class.active]="selectedFilter === 'wordpress'"
            (click)="filterProjects('wordpress')"
          >
            WordPress
          </button>
          <button 
            class="filter-btn" 
            [class.active]="selectedFilter === 'angular'"
            (click)="filterProjects('angular')"
          >
            Angular
          </button>
          <button 
            class="filter-btn" 
            [class.active]="selectedFilter === 'ecommerce'"
            (click)="filterProjects('ecommerce')"
          >
            E-commerce
          </button>
        </div> -->

        <!-- Projects Grid -->
        <div class="projects-grid">
          <div 
            class="project-card fade-in-up" 
            *ngFor="let project of filteredProjects"
            [style.animation-delay]="'0.' + (projects.indexOf(project) + 1) + 's'"
          >
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title" />
              <div class="project-overlay">
                <div class="project-actions">
                  <a [href]="project.liveUrl" target="_blank" class="action-btn" title="View Live">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a [href]="project.codeUrl" target="_blank" class="action-btn" title="View Code" *ngIf="project.codeUrl">
                    <i class="fas fa-code"></i>
                  </a>
                </div>
              </div>
              <div class="project-category">{{ project.category }}</div>
            </div>
            
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-technologies">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
              
              <div class="project-meta">
                <div class="project-stats">
                  <span class="stat">
                    <i class="fas fa-calendar"></i>
                    {{ project.year }}
                  </span>
                  <span class="stat" *ngIf="project.duration">
                    <i class="fas fa-clock"></i>
                    {{ project.duration }}
                  </span>
                </div>
                <div class="project-links">
                  <a *ngIf="project.liveUrl && project.liveUrl !== 'expired'" 
                     [href]="project.liveUrl" 
                     target="_blank" 
                     class="btn btn-primary btn-sm">
                    <i class="fas fa-eye"></i>
                    View Project
                  </a>
                  <span *ngIf="project.liveUrl === 'expired'" 
                        class="status-expired">
                    Domain Expired
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-8" *ngIf="hasMoreProjects">
          <button class="btn btn-outline btn-lg" (click)="loadMoreProjects()">
            <i class="fas fa-plus"></i>
            Load More Projects
          </button>
        </div>

        <!-- Testimonials -->
       <!-- <div class="testimonials-section">
          <h3 class="text-center mb-8 fade-in-up">What Clients Say</h3>
          <div class="testimonials-grid">
            <div class="testimonial-card fade-in-up" *ngFor="let testimonial of testimonials">
              <div class="testimonial-content">
                <div class="quote-icon">
                  <i class="fas fa-quote-left"></i>
                </div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <div class="testimonial-author">
                  <div class="author-avatar">
                    <img [src]="testimonial.avatar" [alt]="testimonial.name" />
                  </div>
                  <div class="author-info">
                    <h4 class="author-name">{{ testimonial.name }}</h4>
                    <span class="author-role">{{ testimonial.role }}</span>
                    <span class="author-company">{{ testimonial.company }}</span>
                  </div>
                </div>
              </div>
              <div class="testimonial-rating">
                <i class="fas fa-star" *ngFor="let star of [1,2,3,4,5]"></i>
              </div>
            </div>
          </div>
        </div> -->
      </div> 
    </section>
  `,
  styles: [`
    .works {
      background: var(--bg-primary);
    }

    .project-filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.75rem 1.5rem;
      border: 1px solid var(--border);
      background: var(--bg-secondary);
      color: var(--text-secondary);
      border-radius: 25px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--primary);
        color: var(--primary);
      }

      &.active {
        background: var(--primary);
        color: white;
        border-color: var(--primary);
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .project-card {
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      overflow: hidden;
      border: 1px solid var(--border);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-lg);
      }
    }

    .project-image {
      position: relative;
      height: 250px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }

    .project-card:hover .project-image img {
      transform: scale(1.05);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-actions {
      display: flex;
      gap: 1rem;
    }

    .action-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--primary);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        background: var(--primary-dark);
        transform: scale(1.1);
      }
    }

    .project-category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: var(--primary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0 0 0.75rem 0;
    }

    .project-description {
      color: var(--text-secondary);
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .project-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .tech-tag {
      background: var(--bg-accent);
      color: var(--text-secondary);
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
      border: 1px solid var(--border);
    }

    .project-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .project-stats {
      display: flex;
      gap: 1rem;
    }

    .stat {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: var(--text-light);
      font-size: 0.875rem;

      i {
        color: var(--primary);
      }
    }

    /* Testimonials */
    .testimonials-section {
      margin-top: 6rem;

      h3 {
        color: var(--text-primary);
        font-weight: 600;
      }
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      padding: 2rem;
      border: 1px solid var(--border);
      position: relative;
    }

    .quote-icon {
      font-size: 2rem;
      color: var(--primary);
      margin-bottom: 1rem;
    }

    .testimonial-text {
      font-style: italic;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: var(--text-secondary);
    }

    .testimonial-author {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .author-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .author-name {
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }

    .author-role {
      display: block;
      color: var(--text-secondary);
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
    }

    .author-company {
      display: block;
      color: var(--text-light);
      font-size: 0.875rem;
    }

    .testimonial-rating {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      color: #fbbf24;
    }

    .status-expired {
      color: var(--text-danger);
      font-weight: 600;
      font-size: 0.875rem;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      background: var(--bg-danger-light);
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }

      .project-meta {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
      }

      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class WorksComponent {
  selectedFilter = 'all';
  projects = [
    {
      title: 'Course WordPress Site',
      description: 'Custom course website with advanced filtering, payment integration, and inventory management.',
      image: 'denz-dev/assets/projects/pediatricworkbook-asset.png',
      category: 'WordPress',
      technologies: ['WordPress', 'WooCommerce', 'Elementor', 'Google Analytics', 'PHP', 'MySQL', 'JavaScript', 'Custom Plugin', 'Basic SEO'],
      liveUrl: 'https://pediatricdentistryworkbook.com/',
      year: '2024',
      duration: '3 months and 2 weeks',
      type: 'WordPress'
    },
    {
      title: 'E4 Condotel Wordpress Site',
      description: 'AirBnb Type of Website with Booking System.',
      image: 'denz-dev/assets/projects/e4condotel-asset.jpg',
      category: 'WordPress',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'JavaScript', 'Custom Plugin', 'AirBnb API Integration'],
      liveUrl: 'expired', // Change this to 'expired'
      year: '2024',
      duration: '1 months and 2 weeks',
      type: 'WordPress'
    },
    {
      title: 'Official Organizational Website',
      description: 'Official Organizational Website for the organization.',
      image: 'denz-dev/assets/projects/PDA-ASSET.png',
      category: 'WordPress',
      technologies: ['WordPress', 'Custom Plugin', 'PHP', 'JavaScript', 'Elementor'],
      liveUrl: 'https://pda-cdomisor.com/',
      codeUrl: '',
      year: '2024',
      duration: '2 months',
      type: 'WordPress'
    }
  ];

  filteredProjects = [...this.projects];
  hasMoreProjects = false;

  testimonials = [
    {
      text: 'Alden delivered an exceptional WordPress website that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.',
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      avatar: '/assets/testimonials/sarah.jpg'
    },
    {
      text: 'Working with Alden was a pleasure. He transformed our outdated website into a modern, fast-loading platform that significantly improved our online presence.',
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Digital Solutions',
      avatar: '/assets/testimonials/michael.jpg'
    },
    {
      text: 'The Angular application Alden built for us has streamlined our business operations. His code quality and project management skills are top-notch.',
      name: 'Emma Rodriguez',
      role: 'Project Manager',
      company: 'Innovation Labs',
      avatar: '/assets/testimonials/emma.jpg'
    }
  ];

  filterProjects(filter: string) {
    this.selectedFilter = filter;
    
    if (filter === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => project.type === filter);
    }
  }

  loadMoreProjects() {
    // Implementation for loading more projects
    console.log('Loading more projects...');
  }
}
