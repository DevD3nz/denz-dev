import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero section-lg">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <p class="hero-greeting fade-in-up">Hello, I'm</p>
            <h1 class="hero-name fade-in-up">
              Alden <span class="text-primary">Calatrava</span>
            </h1>
            <h2 class="hero-title fade-in-up">
              Web Developer & WordPress Specialist
            </h2>
            <p class="hero-description fade-in-up">
              I create modern, responsive websites using WordPress and Angular. 
              Specializing in custom plugins, SEO optimization, and web performance 
              to help businesses establish a strong online presence.
            </p>
            
            <div class="hero-stats fade-in-up">
              <div class="stat">
                <span class="stat-number">4+</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat">
                <span class="stat-number">4+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat">
                <span class="stat-number">100%</span>
                <span class="stat-label">Client Satisfaction</span>
              </div>
            </div>

            <div class="hero-actions fade-in-up">
              <a href="#contact" class="btn btn-primary btn-lg">
                <i class="fas fa-envelope"></i>
                Get In Touch
              </a>
              <a href="#works" class="btn btn-outline btn-lg">
                <i class="fas fa-eye"></i>
                View My Work
              </a>
            </div>
          </div>

          <div class="hero-image fade-in">
            <div class="image-container">
              <div class="profile-image">
                <img src="/assets/profile.jpg" alt="Alden Calatrava" />
              </div>
              <div class="floating-elements">
                <div class="floating-card wordpress">
                  <i class="fab fa-wordpress"></i>
                  <span>WordPress</span>
                </div>
                <div class="floating-card angular">
                  <i class="fab fa-angular"></i>
                  <span>Angular</span>
                </div>
                <div class="floating-card laravel">
                  <i class="fab fa-laravel"></i>
                  <span>Laravel</span>
                </div>
                <div class="floating-card google-api">
                  <i class="fab fa-google"></i>
                  <span>Google API</span>
                </div>
                <div class="floating-card php">
                  <i class="fab fa-php"></i>
                  <span>PHP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="scroll-indicator">
          <a href="#about" class="scroll-link">
            <span>Scroll Down</span>
            <i class="fas fa-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
      position: relative;
      padding-top: 6rem;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="%23f7fafc" points="0,1000 1000,0 1000,1000"/></svg>');
        opacity: 0.1;
        z-index: 1;
      }
    }

    .container {
      position: relative;
      z-index: 2;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      min-height: 70vh;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
      }
    }

    .hero-greeting {
      font-size: 1.25rem;
      color: var(--primary);
      font-weight: 600;
      margin-bottom: 1rem;
      animation-delay: 0.2s;
    }

    .hero-name {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      margin-bottom: 1rem;
      line-height: 1.1;
      animation-delay: 0.4s;
    }

    .hero-title {
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 600;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      animation-delay: 0.6s;
    }

    .hero-description {
      font-size: 1.125rem;
      line-height: 1.7;
      margin-bottom: 2rem;
      max-width: 500px;
      animation-delay: 0.8s;
    }

    .hero-stats {
      display: flex;
      gap: 2rem;
      margin-bottom: 2.5rem;
      animation-delay: 1s;

      @media (max-width: 768px) {
        justify-content: center;
        gap: 1.5rem;
      }

      @media (max-width: 480px) {
        flex-direction: column;
        gap: 1rem;
      }
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 800;
      color: var(--primary);
      line-height: 1;
    }

    .stat-label {
      font-size: 0.875rem;
      color: var(--text-light);
      font-weight: 500;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      animation-delay: 1.2s;

      @media (max-width: 768px) {
        justify-content: center;
      }

      @media (max-width: 480px) {
        flex-direction: column;
      }
    }

    .hero-image {
      position: relative;
      animation-delay: 0.5s;

      @media (max-width: 768px) {
        order: -1;
      }
    }

    .image-container {
      position: relative;
      max-width: 400px;
      margin: 0 auto;
    }

    .profile-image {
      width: 330px;
      height: 330px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      position: relative;
      border: 8px solid var(--bg-primary);
      box-shadow: var(--shadow-lg);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, var(--primary), var(--secondary));
        opacity: 0.1;
      }
    }

    .floating-elements {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .floating-card {
      position: absolute;
      background: var(--bg-primary);
      border-radius: var(--radius);
      padding: 0.75rem 1rem;
      box-shadow: var(--shadow);
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      font-size: 0.875rem;
      animation: float 3s ease-in-out infinite;

      i {
        font-size: 1.25rem;
      }

      &.wordpress {
        top: 10%;
        right: -10%;
        color: var(--primary);
        animation-delay: 0s;
      }

      &.angular {
        bottom: 20%;
        left: -15%;
        color: #dd0031;
        animation-delay: 1s;
      }

      &.google-api {
        top: 60%;
        right: -5%;
        color: var(--secondary);
        animation-delay: 2s;
      }

      &.php {
        bottom: 10%;
        right: -10%;
        color: #777bb4;
        animation-delay: 1.5s;
      }
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .scroll-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-light);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.875rem;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary);
      }

      i {
        animation: bounce 2s infinite;
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }

    /* Animation delays for staggered effect */
    .fade-in-up:nth-child(1) { animation-delay: 0.2s; }
    .fade-in-up:nth-child(2) { animation-delay: 0.4s; }
    .fade-in-up:nth-child(3) { animation-delay: 0.6s; }
    .fade-in-up:nth-child(4) { animation-delay: 0.8s; }
    .fade-in-up:nth-child(5) { animation-delay: 1.0s; }
    .fade-in-up:nth-child(6) { animation-delay: 1.2s; }
  `]
})
export class HeroComponent {
}
