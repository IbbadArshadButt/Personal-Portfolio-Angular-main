import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';
import { EXPERIENCE } from '../portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="experience" class="section bg-elevated">
      <div class="container">
        <div class="text-center mb-5" appReveal>
          <p class="section-eyebrow mb-2">04 — Experience</p>
          <h2 class="section-title">Where I've worked</h2>
          <p class="section-subtitle">
            Roles where I've shipped real software and grown as an engineer.
          </p>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-9" appReveal>
            <div class="timeline">
              @for (exp of experience; track exp.role; let i = $index) {
                <div class="timeline-item" appReveal [revealDelay]="i * 100">
                  <span class="timeline-dot"></span>

                  <div
                    class="card-dark p-4"
                    [class.border-accent-strong]="exp.featured"
                    [style.borderColor]="exp.featured ? 'var(--accent)' : null"
                  >
                    <div class="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                      <div>
                        <h3 class="h5 mb-1">{{ exp.role }}</h3>
                        <p class="text-accent mb-0 fw-medium" style="font-size: 0.95rem;">
                          {{ exp.company }}
                        </p>
                      </div>
                      <div class="text-end">
                        <span class="pill pill-neutral">
                          <i class="bi bi-calendar3 me-1"></i>{{ exp.period }}
                        </span>
                        <div class="text-secondary mt-1" style="font-size: 0.82rem;">
                          <i class="bi bi-geo-alt me-1"></i>{{ exp.location }}
                        </div>
                      </div>
                    </div>

                    <p class="text-secondary mb-3" style="font-size: 0.95rem;">
                      {{ exp.summary }}
                    </p>

                    <ul class="mb-3 ps-3" style="font-size: 0.92rem; line-height: 1.7;">
                      @for (h of exp.highlights; track h) {
                        <li class="text-secondary">{{ h }}</li>
                      }
                    </ul>

                    <div class="d-flex flex-wrap align-items-center gap-2 pt-2"
                         [style.borderTop]="'1px solid var(--border-subtle)'">
                      <span class="text-muted me-1" style="font-size: 0.8rem;">Tech:</span>
                      @for (t of exp.environment; track t) {
                        <span class="pill">{{ t }}</span>
                      }
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  experience = EXPERIENCE;
}
