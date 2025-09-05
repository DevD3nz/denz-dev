import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills section-lg">
      <div class="container">
        <div class="section-header text-center mb-12">
          <h2 class="fade-in-up">Skills & Technologies</h2>
          <p class="text-lg text-secondary fade-in-up">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div class="skills-grid">
          <!-- Frontend Development -->
          <div class="skill-category fade-in-up">
            <div class="category-header">
              <i class="fas fa-laptop-code"></i>
              <h3>Frontend Development</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of frontendSkills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend Development -->
          <div class="skill-category fade-in-up">
            <div class="category-header">
              <i class="fas fa-server"></i>
              <h3>Backend Development</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of backendSkills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools & Technologies -->
          <div class="skill-category fade-in-up">
            <div class="category-header">
              <i class="fas fa-tools"></i>
              <h3>Tools & Technologies</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of toolsSkills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Technology Icons -->
        <div class="tech-showcase">
          <h3 class="text-center mb-8 fade-in-up">Technologies I Love Working With</h3>
          <div class="tech-grid fade-in-up">
            <div class="tech-item" *ngFor="let tech of technologies">
              <div class="tech-icon">
                <i [class]="tech.icon" [style.color]="tech.color"></i>
              </div>
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <!-- Certifications
        <div class="certifications fade-in-up">
          <h3 class="text-center mb-8">Certifications & Learning</h3>
          <div class="cert-grid">
            <div class="cert-item" *ngFor="let cert of certifications">
              <div class="cert-icon">
                <i [class]="cert.icon"></i>
              </div>
              <div class="cert-info">
                <h4>{{ cert.name }}</h4>
                <p>{{ cert.issuer }}</p>
                <span class="cert-year">{{ cert.year }}</span>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  `,
  styles: [`
    .skills {
      background: var(--bg-primary);
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 3rem;
      margin-bottom: 4rem;
    }

    .skill-category {
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      padding: 2rem;
      border: 1px solid var(--border);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;

      i {
        font-size: 2rem;
        color: var(--primary);
      }

      h3 {
        margin: 0;
        color: var(--text-primary);
        font-weight: 600;
      }
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .skill-item {
      .skill-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .skill-name {
        font-weight: 600;
        color: var(--text-primary);
      }

      .skill-level {
        font-weight: 600;
        color: var(--primary);
        font-size: 0.875rem;
      }
    }

    .skill-bar {
      background: var(--bg-accent);
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
    }

    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, var(--primary), var(--primary-light));
      border-radius: 4px;
      transition: width 1s ease-in-out;
      animation: progressFill 2s ease-out;
    }

    .tech-showcase {
      margin-bottom: 4rem;

      h3 {
        color: var(--text-primary);
        font-weight: 600;
      }
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: var(--bg-secondary);
      border-radius: var(--radius);
      border: 1px solid var(--border);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow);
      }
    }

    .tech-icon {
      font-size: 3rem;
      transition: transform 0.3s ease;
    }

    .tech-item:hover .tech-icon {
      transform: scale(1.1);
    }

    .tech-name {
      font-weight: 600;
      color: var(--text-primary);
      text-align: center;
      font-size: 0.875rem;
    }

    .certifications {
      h3 {
        color: var(--text-primary);
        font-weight: 600;
      }
    }

    .cert-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .cert-item {
      display: flex;
      gap: 1rem;
      padding: 1.5rem;
      background: var(--bg-secondary);
      border-radius: var(--radius);
      border: 1px solid var(--border);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-3px);
      }
    }

    .cert-icon {
      font-size: 2rem;
      color: var(--primary);
      flex-shrink: 0;
    }

    .cert-info {
      h4 {
        margin: 0 0 0.5rem 0;
        color: var(--text-primary);
        font-weight: 600;
      }

      p {
        margin: 0 0 0.5rem 0;
        color: var(--text-secondary);
      }

      .cert-year {
        font-size: 0.875rem;
        color: var(--text-light);
        font-weight: 500;
      }
    }

    @keyframes progressFill {
      from {
        width: 0;
      }
      to {
        width: var(--progress-width);
      }
    }

    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .tech-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 1rem;
      }

      .cert-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  frontendSkills = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'JavaScript', level: 88 },
    { name: 'SCSS/Sass', level: 90 },
    { name: 'Bootstrap', level: 85 }
  ];

  backendSkills = [
    { name: 'WordPress', level: 95 },
    { name: 'PHP', level: 88 },
    { name: 'MySQL', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'REST APIs', level: 90 },
    { name: 'Custom Plugins', level: 92 }
  ];

  toolsSkills = [
    { name: 'Git & GitHub', level: 90 },
    { name: 'POSTMAN', level: 60 },
    { name: 'Web Performance', level: 85 },
    { name: 'Responsive Design', level: 95 },
    { name: 'Bitbucket', level: 80 },
    { name: 'Google Cloud Platform', level: 75 }
  ];

  technologies = [
    { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759b' },
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'PHP', icon: 'fab fa-php', color: '#777bb4' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
    { name: 'Sass', icon: 'fab fa-sass', color: '#cc6699' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' }
  ];

  certifications = [
    {
      name: 'WordPress Developer Certification',
      issuer: 'WordPress Academy',
      year: '2023',
      icon: 'fas fa-certificate'
    },
    {
      name: 'Angular Fundamentals',
      issuer: 'Google Developers',
      year: '2022',
      icon: 'fas fa-medal'
    },
    {
      name: 'SEO Fundamentals',
      issuer: 'Google Digital Marketing',
      year: '2022',
      icon: 'fas fa-award'
    },
    {
      name: 'Web Performance Optimization',
      issuer: 'Google PageSpeed',
      year: '2023',
      icon: 'fas fa-trophy'
    }
  ];
}
