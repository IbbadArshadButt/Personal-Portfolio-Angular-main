import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';
import { PROJECTS } from '../portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="projects" class="section bg-elevated">
      <div class="container">
        <div class="text-center mb-5" appReveal>
          <p class="section-eyebrow mb-2">04 — Projects</p>
          <h2 class="section-title">Featured work</h2>
          <p class="section-subtitle">
            A selection of applications and systems I've designed, built, and deployed.
          </p>
        </div>

        <div class="row g-4">
          @for (p of projects; track p.title; let i = $index) {
            <div class="col-md-6 col-xl-4" appReveal [revealDelay]="(i % 3) * 100">
              <article class="card-dark h-100 p-4 d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <span class="project-icon">
                    <i class="bi" [class]="p.icon"></i>
                  </span>
                  <span class="pill pill-neutral">{{ p.category }}</span>
                </div>

                <h3 class="h5 mb-2">{{ p.title }}</h3>
                <p class="text-secondary flex-grow-1" style="font-size: 0.95rem; line-height: 1.65;">
                  {{ p.description }}
                </p>

                <div class="d-flex flex-wrap gap-2 my-3">
                  @for (s of p.stack; track s) {
                    <span class="pill">{{ s }}</span>
                  }
                </div>

                <div class="d-flex gap-2 mt-auto">
                  <a class="btn btn-outline-accent btn-sm flex-fill" [href]="p.github" target="_blank" rel="noopener">
                    <i class="bi bi-github me-1"></i>GitHub
                  </a>
                  <a class="btn btn-accent btn-sm flex-fill" [href]="p.demo" target="_blank" rel="noopener">
                    <i class="bi bi-box-arrow-up-right me-1"></i>Live Demo
                  </a>
                </div>
              </article>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects = PROJECTS;
}
