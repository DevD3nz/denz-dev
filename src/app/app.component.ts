import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorksComponent } from './components/works/works.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    WorksComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="portfolio-site">
      <app-header></app-header>
      <main>
        <app-hero id="home"></app-hero>
        <app-about id="about"></app-about>
        <app-skills id="skills"></app-skills>
        <app-experience id="experience"></app-experience>
        <app-works id="works"></app-works>
        <app-services id="services"></app-services>
        <app-contact id="contact"></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .portfolio-site {
      min-height: 100vh;
    }

    main section {
      scroll-margin-top: 80px;
    }
  `]
})
export class AppComponent {
  title = 'Alden Calatrava - Web Developer';
}