import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about section-lg">
      <div class="container">
        <div class="section-header text-center mb-12">
          <h2 class="fade-in-up">About Me</h2>
          <p class="text-lg text-secondary fade-in-up">
            Get to know more about my background and expertise
          </p>
        </div>

        <div class="about-content">
          <div class="about-text">
            <div class="intro-text fade-in-up">
              <h3 class="mb-4">Passionate Web Developer</h3>
              <p class="text-lg mb-4">
                With over 4 years of experience in web development, I specialize in creating 
                modern, responsive websites that drive business growth. My expertise spans 
                WordPress development, Angular applications, Laravel applications, and everything in between.
              </p>
              <p class="mb-6">
              I believe in writing clean, maintainable code and staying up-to-date with the latest web technologies. 
              I specialize in building robust Laravel applications, dynamic Angular frontends, and seamless integrations with third-party APIs such as Google APIs. 
              I also develop custom WordPress plugins and full websites, with a strong focus on performance optimization and delivering a smooth user experience. 
              And as technology evolves, I’m continuously learning and expanding my skills to bring even more value to every project.
              </p>
            </div>

            <div class="achievements fade-in-up">
              <h4 class="mb-4">What I Bring to the Table</h4>
              <div class="achievement-list">
                <div class="achievement-item">
                  <i class="fas fa-code text-primary"></i>
                  <div>
                    <h5>Clean Code</h5>
                    <p>Writing maintainable, scalable code following best practices</p>
                  </div>
                </div>
                <div class="achievement-item">
                  <i class="fas fa-rocket text-primary"></i>
                  <div>
                    <h5>Performance Focus</h5>
                    <p>Optimizing websites for speed and excellent user experience</p>
                  </div>
                </div>
                <div class="achievement-item">
                  <i class="fas fa-users text-primary"></i>
                  <div>
                    <h5>Client Collaboration</h5>
                    <p>Working closely with clients to understand and exceed expectations</p>
                  </div>
                </div>
                <div class="achievement-item">
                  <i class="fas fa-lightbulb text-primary"></i>
                  <div>
                    <h5>Creative Solutions</h5>
                    <p>Finding innovative approaches to complex technical challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="about-sidebar">
            <div class="info-card fade-in-up">
              <h4 class="mb-4">Quick Info</h4>
              <div class="info-list">
                <div class="info-item">
                  <span class="label">Location:</span>
                  <span class="value">Philippines</span>
                </div>
                <div class="info-item">
                  <span class="label">Experience:</span>
                  <span class="value">4+ Years</span>
                </div>
                <div class="info-item">
                  <span class="label">Availability:</span>
                  <span class="value">Available for projects</span>
                </div>
                <div class="info-item">
                  <span class="label">Languages:</span>
                  <span class="value">English, Filipino</span>
                </div>
              </div>
            </div>

            <div class="specialties-card fade-in-up">
              <h4 class="mb-4">Specialties</h4>
              <div class="specialty-tags">
                <span class="tag">WordPress Development</span>
                <span class="tag">Angular Applications</span>
                <span class="tag">Laravel API Development</span>
                <span class="tag">Google API</span>
                <span class="tag">PHP</span>
                <span class="tag">Custom Plugin Creation</span>
                <span class="tag">Troubleshooting & Debugging</span>
                <span class="tag">Responsive Design</span>
                <span class="tag">API Integration</span>
                <span class="tag">Database Design</span>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: var(--bg-secondary);
    }

    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      align-items: start;

      @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }

    .intro-text h3 {
      color: var(--text-primary);
      font-size: 1.75rem;
      font-weight: 700;
    }

    .achievements h4 {
      color: var(--text-primary);
      font-size: 1.5rem;
      font-weight: 600;
    }

    .achievement-list {
      display: grid;
      gap: 2rem;
    }

    .achievement-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;

      i {
        font-size: 1.5rem;
        margin-top: 0.25rem;
        flex-shrink: 0;
      }

      h5 {
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: var(--text-primary);
      }

      p {
        margin: 0;
        color: var(--text-secondary);
      }
    }

    .about-sidebar {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-card,
    .specialties-card {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 2rem;
      box-shadow: var(--shadow);
      border: 1px solid var(--border);

      h4 {
        color: var(--text-primary);
        font-weight: 600;
        font-size: 1.25rem;
      }
    }

    .info-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--border);

      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }

      .label {
        font-weight: 600;
        color: var(--text-secondary);
      }

      .value {
        color: var(--text-primary);
        font-weight: 500;
      }
    }

    .specialty-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .tag {
      background: var(--bg-accent);
      color: var(--text-secondary);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;
      border: 1px solid var(--border);
      transition: all 0.3s ease;

      &:hover {
        background: var(--primary);
        color: white;
        transform: translateY(-2px);
      }
    }

    .download-cv {
      margin-top: 1rem;
    }

    /* Animation stagger */
    .fade-in-up:nth-child(1) { animation-delay: 0.1s; }
    .fade-in-up:nth-child(2) { animation-delay: 0.2s; }
    .fade-in-up:nth-child(3) { animation-delay: 0.3s; }
    .fade-in-up:nth-child(4) { animation-delay: 0.4s; }
    .fade-in-up:nth-child(5) { animation-delay: 0.5s; }
  `]
})
export class AboutComponent {
}
