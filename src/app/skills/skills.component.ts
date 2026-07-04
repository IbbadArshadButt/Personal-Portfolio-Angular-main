import { Component, signal } from '@angular/core';
import { RevealDirective } from '../reveal.directive';
import { TECH_CATEGORIES } from '../portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <div class="text-center mb-5" appReveal>
          <p class="section-eyebrow mb-2">02 — Skills</p>
          <h2 class="section-title">Tech stack</h2>
          <p class="section-subtitle">
            The tools and technologies I reach for to design, build, and ship software.
          </p>
        </div>

        <div class="d-flex justify-content-center flex-wrap gap-2 mb-5" appReveal>
          @for (cat of categories; track cat.key) {
            <button
              class="tech-tab"
              [class.active]="active() === cat.key"
              (click)="active.set(cat.key)"
              type="button"
            >
              <i class="bi me-2" [class]="cat.icon"></i>{{ cat.label }}
            </button>
          }
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8" appReveal>
            <div class="card-dark p-4 p-md-5">
              @for (cat of categories; track cat.key) {
                @if (active() === cat.key) {
                  <div class="d-flex flex-column gap-4">
                    @for (skill of cat.skills; track skill.name) {
                      <div class="skill-item">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                          <span class="fw-semibold">{{ skill.name }}</span>
                          <span class="text-accent fw-semibold" style="font-size: 0.9rem;">{{ skill.level }}%</span>
                        </div>
                        <div class="progress-thin">
                          <!-- Fixed syntax for modern explicit string width concatenation -->
                          <div class="progress-bar" [style.width]="skill.level + '%'"></div>
                        </div>
                      </div>
                    }
                  </div>
                }
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Target container for custom progress bar */
    .progress-thin {
      background-color: var(--bg-neutral-dark, rgba(255, 255, 255, 0.05));
      border-radius: 4px;
      overflow: hidden;
      height: 6px;
      width: 100%;
    }

    /* Fixed progress line filling & smooth animation transition */
    .progress-bar {
      background-color: var(--accent-color, #6366f1);
      height: 100%;
      border-radius: 4px;
      /* Animates the line fill seamlessly when tabs switch */
      transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Interactive hover state highlighting active progress bars */
    .skill-item:hover .progress-bar {
      filter: brightness(1.2);
      box-shadow: 0 0 8px var(--accent-color, #6366f1);
    }
  `]
})
export class SkillsComponent {
  categories = TECH_CATEGORIES;
  active = signal(this.categories[0].key);
}