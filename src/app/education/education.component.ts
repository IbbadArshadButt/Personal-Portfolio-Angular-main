import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="education" class="section">
      <div class="container">
        <!-- Section Header -->
        <div class="mb-5" style="text-align: left !important;" appReveal>
        <p class="section-eyebrow mb-2" style="color: #eeb50c; text-align: left !important;">— BACKGROUND</p>
        <h2 class="section-title text-white" style="text-align: left !important; margin-left: 0;">Education</h2>
        <p class="section-subtitle text-secondary" style="text-align: left !important; margin-left: 0;">Academic background.</p>
        </div>

        <!-- Education Card Layout -->
        <div class="row justify-content-center">
          <div class="col-12" appReveal [revealDelay]="100">
            <div class="card-dark p-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
              
              <!-- Left Side: Icon & Details -->
              <div class="d-flex align-items-start gap-4">
                <div class="edu-icon-box d-flex align-items-center justify-content-center flex-shrink-0">
                  <!-- Removed 'text-info' and linked color directly to your new theme variables -->
                <i class="bi bi-mortarboard" style="font-size: 1.5rem; color: var(--accent, #ffc107);"></i>
                </div>
                <div>
                  <h3 class="h5 fw-bold mb-1 text-white">Bachelors of Science in Software Engineering</h3>
                  <p class="text-secondary mb-3 mb-md-2">University of the Punjab</p>
                  
                  <!-- Meta Badges (Date and Location) -->
                  <div class="d-flex flex-wrap gap-3 text-secondary" style="font-size: 0.9rem;">
                    <span class="d-flex align-items-center gap-2">
                      <i class="bi bi-calendar"></i> 2021 – 2025
                    </span>
                    <span class="d-flex align-items-center gap-2">
                      <i class="bi bi-geo-alt"></i> Punjab, Pakistan
                    </span>
                  </div>
                </div>
              </div>

              <!-- Right Side: Score Badge -->
              <div class="cgpa-badge flex-shrink-0 align-self-end align-self-md-center">
                <span class="text-secondary me-1" style="font-size: 0.8rem; font-weight: 600;">CGPA</span>
                <strong class="text-white">3.67 / 4.0</strong>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .edu-icon-box {
      width: 54px;
      height: 54px;
      /* Uses your soft amber background tint variable */
      background-color: var(--accent-soft, rgba(255, 193, 7, 0.10));
      /* Uses your glow color or a subtle fallback border line */
      border: 1px solid rgba(255, 193, 7, 0.2);
      border-radius: 12px;
    }

    .cgpa-badge {
      /* Matching background container styling */
      background-color: var(--accent-soft, rgba(255, 193, 7, 0.10));
      border: 1px solid rgba(255, 193, 7, 0.2);
      padding: 6px 16px;
      border-radius: 6px;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
    }
  `]
})
export class EducationComponent {}