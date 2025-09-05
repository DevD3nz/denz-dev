import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience section-lg">
      <div class="container">
        <div class="section-header text-center mb-12">
          <h2 class="fade-in-up">Experience & Education</h2>
          <p class="text-lg text-secondary fade-in-up">
            My professional journey and continuous learning path
          </p>
        </div>

        <div class="experience-content">
          <!-- Work Experience -->
          <div class="experience-section">
            <h3 class="section-title fade-in-up">
              <i class="fas fa-briefcase"></i>
              Work Experience
            </h3>
            <div class="timeline">
              <div class="timeline-item fade-in-up" *ngFor="let job of workExperience">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <div class="job-header">
                    <h4 class="job-title">{{ job.title }}</h4>
                    <span class="job-period">{{ job.period }}</span>
                  </div>
                  <div class="job-company">
                    <i class="fas fa-building"></i>
                    {{ job.company }} - {{ job.location }}
                  </div>
                  <p class="job-description">{{ job.description }}</p>
                  <div class="job-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      <li *ngFor="let achievement of job.achievements">{{ achievement }}</li>
                    </ul>
                  </div>
                  <div class="job-technologies">
                    <span class="tech-tag" *ngFor="let tech of job.technologies">{{ tech }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="education-section">
            <h3 class="section-title fade-in-up">
              <i class="fas fa-graduation-cap"></i>
              Education & Certifications
            </h3>
            <div class="education-grid">
              <div class="education-item fade-in-up" *ngFor="let edu of education">
                <div class="edu-icon">
                  <i [class]="edu.icon"></i>
                </div>
                <div class="edu-content">
                  <h4 class="edu-title">{{ edu.title }}</h4>
                  <div class="edu-institution">{{ edu.institution }}</div>
                  <div class="edu-period">{{ edu.period }}</div>
                  <p class="edu-description" *ngIf="edu.description">{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Professional Stats -->
        <div class="stats-section fade-in-up">
          <div class="stats-grid">
            <div class="stat-item" *ngFor="let stat of professionalStats">
              <div class="stat-icon">
                <i [class]="stat.icon"></i>
              </div>
              <div class="stat-content">
                <span class="stat-number">{{ stat.number }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience {
      background: var(--bg-secondary);
    }

    .experience-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      margin-bottom: 4rem;

      @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 2rem;

      i {
        color: var(--primary);
      }
    }

    /* Timeline Styles */
    .timeline {
      position: relative;
      padding-left: 2rem;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--border);
      }
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .timeline-marker {
      position: absolute;
      left: -2rem;
      top: 0.5rem;
      width: 12px;
      height: 12px;
      background: var(--primary);
      border-radius: 50%;
      border: 3px solid var(--bg-secondary);
    }

    .timeline-content {
      background: var(--bg-primary);
      border-radius: var(--radius);
      padding: 2rem;
      border: 1px solid var(--border);
      box-shadow: var(--shadow);
    }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.75rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .job-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }

    .job-period {
      background: var(--primary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .job-company {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-secondary);
      font-weight: 500;
      margin-bottom: 1rem;

      i {
        color: var(--primary);
      }
    }

    .job-description {
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .job-achievements {
      margin-bottom: 1.5rem;

      h5 {
        color: var(--text-primary);
        font-weight: 600;
        margin-bottom: 0.75rem;
      }

      ul {
        margin: 0;
        padding-left: 1.25rem;

        li {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          line-height: 1.5;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    .job-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
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

    /* Education Styles */
    .education-grid {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .education-item {
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

    .edu-icon {
      font-size: 2rem;
      color: var(--primary);
      flex-shrink: 0;
      margin-top: 0.25rem;
    }

    .edu-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0 0 0.5rem 0;
    }

    .edu-institution {
      color: var(--text-secondary);
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    .edu-period {
      color: var(--text-light);
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
    }

    .edu-description {
      margin: 0;
      font-size: 0.875rem;
    }

    /* Professional Stats */
    .stats-section {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 2rem;
      border: 1px solid var(--border);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .stat-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .stat-icon {
      font-size: 2.5rem;
      color: var(--primary);
    }

    .stat-content {
      display: flex;
      flex-direction: column;
    }

    .stat-number {
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--text-primary);
      line-height: 1;
    }

    .stat-label {
      color: var(--text-secondary);
      font-weight: 500;
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      .timeline {
        padding-left: 1.5rem;
      }

      .timeline-marker {
        left: -1.5rem;
      }

      .job-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .timeline-content {
        padding: 1.5rem;
      }

      .stats-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  `]
})
export class ExperienceComponent {
  workExperience = [
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2020 - Present',
      description: 'Providing comprehensive web development services to clients worldwide, specializing in WordPress and Angular applications.',
      achievements: [
        'Successfully delivered 3+ projects with 100% client satisfaction',
        'Improved website performance by average of 40% through optimization',
        'Developed custom WordPress plugins used by 5+ websites',
      ],
      technologies: ['WordPress', 'Angular', 'PHP', 'TypeScript', 'MySQL', 'Google API',]
    },
    {
      title: 'Web Developer',
      company: 'MyMedsPh',
      location: 'Philippines',
      period: '2021 - Present',
      description: 'Worked as part of a development team creating features for the web application and resolve bugs.',
      achievements: [
        'convert single database in multiple databases',
        'create a new feature for the web application',
        'resolve bugs in the web application',
        'Refactored legacy code to cleaner, maintainable structures following best practices.',
        'Optimized database queries and improved application performance, reducing load times.',
        'Collaborated with team members using Git for version control and agile workflows.',
        'Developed RESTful APIs and ensured seamless integration with Angular frontend.'
      ],
      technologies: ['Angular', 'typescript', 'PHP', 
        'JavaScript', 'MySQL', 'Git', 'REST API','Sass','Material UI','Laravel','docker','Bitbucket','Postman','Google Cloud Platform',]
    }
  ];

  education = [
    {
      title: 'Bachelor of Science in Information Technology',
      institution: 'Mindanao State University at Naawan',
      period: '2015 - 2019',
      icon: 'fas fa-university',
      description: 'focusing on web development and software engineering. '
    },
    // {
    //   title: 'WordPress Developer Certification',
    //   institution: 'WordPress Academy',
    //   period: '2023',
    //   icon: 'fas fa-certificate'
    // },
    // {
    //   title: 'Angular Fundamentals',
    //   institution: 'Google Developers',
    //   period: '2022',
    //   icon: 'fas fa-medal'
    // },
    // {
    //   title: 'SEO Optimization Course',
    //   institution: 'Google Digital Marketing',
    //   period: '2022',
    //   icon: 'fas fa-award'
    // }
  ];

  professionalStats = [
    {
      number: '6+',
      label: 'Projects Completed',
      icon: 'fas fa-project-diagram'
    },
    {
      number: '4+',
      label: 'Years Experience',
      icon: 'fas fa-calendar-alt'
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      icon: 'fas fa-star'
    },
    {
      number: '3 days a week',
      label: 'Support Available',
      icon: 'fas fa-headset'
    }
  ];
}
