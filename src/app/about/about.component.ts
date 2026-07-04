import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';
import { COMPETENCIES, ABOUT_BIO, ABOUT_TAGS } from '../portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="about" class="section">
      <div class="container">
        <div class="text-center mb-5" appReveal>
          <p class="section-eyebrow mb-2">— About</p>
          <h2 class="section-title">A bit about me</h2>
          <p class="section-subtitle">
            Developer, solution-oriented, and obsessed with the details that make software feel intentional.
          </p>
        </div>

        <div class="row g-5 align-items-start">
          <div class="col-lg-4" appReveal> 
            <div class="profile-circle mb-4 overflow-hidden d-flex align-items-center justify-content-center mx-auto">
              <img 
                src="/assets/images/profile.png" 
                alt="Ibbad Arshad Profile Picture" 
                class="img-fluid" 
                style="width: 100%; height: 100%; object-fit: cover;"
              />
            </div>
            
            <p class="text-secondary mb-4" style="line-height: 1.75;">
              {{ bio }}
            </p>

            <div class="d-flex flex-wrap gap-2">
              @for (tag of tags; track tag) {
                <span class="pill pill-neutral">{{ tag }}</span>
              }
            </div>
          </div>

          <div class="col-lg-8" appReveal [revealDelay]="120">
            <h3 class="h5 mb-4 text-uppercase" style="letter-spacing: 0.08em; font-size: 0.95rem; color: var(--text-secondary);">
              Core Competencies
            </h3>

            <div class="d-flex flex-column gap-3">
              @for (c of competencies; track c.label; let i = $index) {
                <div class="competency-card" appReveal [revealDelay]="i * 80">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="fw-semibold">{{ c.label }}</span>
                    <span class="text-accent fw-semibold" style="font-size: 0.9rem;">{{ c.level }}%</span>
                  </div>
                  <div class="progress-thin">
                    <div class="progress-bar" [style.width]="c.level + '%'"></div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Perfect Circle Styling */
    .profile-circle {
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      border: 1px solid var(--border-neutral, #333945);
      max-width: 360px; /* Restricts scaling width on extra-large displays */
    }

    /* Fixed Progress Bar Animation Styles */
    .progress-thin {
      background-color: var(--bg-neutral-dark, rgba(255, 255, 255, 0.05));
      border-radius: 4px;
      overflow: hidden;
      height: 6px;
      width: 100%;
    }

    .progress-bar {
      background-color: var(--accent-color, #6366f1);
      height: 100%;
      border-radius: 4px;
      /* Animates the line fill on initial load or change natively */
      transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1); 
    }

    /* Hover effect for the whole block to add depth */
    .competency-card:hover .progress-bar {
      filter: brightness(1.2);
      box-shadow: 0 0 8px var(--accent-color, #6366f1);
    }
  `]
})
export class AboutComponent {
  bio = ABOUT_BIO;
  tags = ABOUT_TAGS;
  competencies = COMPETENCIES;
}