import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <a href="#home" class="logo-text">
              <span class="logo-name">Alden</span>
              <span class="logo-dot">.</span>
            </a>
          </div>

          <ul class="nav-menu" [class.active]="isMenuOpen">
            <li><a href="#home" class="nav-link" (click)="closeMenu()">Home</a></li>
            <li><a href="#about" class="nav-link" (click)="closeMenu()">About</a></li>
            <li><a href="#skills" class="nav-link" (click)="closeMenu()">Skills</a></li>
            <li><a href="#experience" class="nav-link" (click)="closeMenu()">Experience</a></li>
            <li><a href="#works" class="nav-link" (click)="closeMenu()">Works</a></li>
            <li><a href="#services" class="nav-link" (click)="closeMenu()">Services</a></li>
            <li><a href="#contact" class="nav-link" (click)="closeMenu()">Contact</a></li>
          </ul>

          <button 
            class="menu-toggle" 
            [class.active]="isMenuOpen"
            (click)="toggleMenu()"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(135deg, #000000 0%, #000000 100%);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 1000;
      transition: all 0.3s ease;
      color: #e5e7eb;

      &.scrolled {
        background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }

    .logo-text {
      font-size: 1.75rem;
      font-weight: 800;
      text-decoration: none;
      color: #ffffff;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary);
      }
    }

    .logo-name {
      color: #ffffff;
    }

    .logo-dot {
      color: var(--primary);
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;

      @media (max-width: 768px) {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
        flex-direction: column;
        padding: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;

        &.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }
      }
    }

    .nav-link {
      font-weight: 500;
      color: #e5e7eb;
      text-decoration: none;
      padding: 0.5rem 0;
      position: relative;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary);
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary);
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }

      @media (max-width: 768px) {
        font-size: 1.125rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--border);

        &:last-child {
          border-bottom: none;
        }
      }
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      gap: 4px;

      span {
        width: 25px;
        height: 3px;
        background: #ffffff;
        transition: all 0.3s ease;
        border-radius: 2px;
      }

      &.active {
        span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        span:nth-child(2) {
          opacity: 0;
        }

        span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
      }

      @media (max-width: 768px) {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
