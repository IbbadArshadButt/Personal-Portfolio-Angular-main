import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero">
      <div class="code-overlay"></div>
      <div class="hero-glow"></div>

      <div class="container position-relative">
        <div class="row justify-content-center text-center">
          <div class="col-lg-9 col-xl-8">
            <span class="hero-tag mb-4">
              <span class="status-dot"></span>
              Available for new opportunities
            </span>

            <h1 class="hero-name mb-3">Ibbad Arshad</h1>
            <p class="hero-sub mb-4">
              Crafting code that matters.
            </p>

            <p class="text-secondary mx-auto mb-5" style="max-width: 560px;">
              Software engineer focused on building clean, maintainable interfaces
              and the scalable systems behind them across Angular and .NET.
            </p>

            <div class="d-flex flex-wrap justify-content-center gap-3">
              <a class="btn btn-outline-accent" href="#resume">
                <i class="bi bi-file-earmark-text me-2"></i>View Resume
              </a>
              <a class="btn btn-accent" href="#contact">
                <i class="bi bi-send me-2"></i>Get in Touch
              </a>
            </div>

            <div class="d-flex justify-content-center gap-2 mt-5">
              @for (s of socials; track s.label) {
                <a class="social-btn" [href]="s.url" target="_blank" rel="noopener" [attr.aria-label]="s.label">
                  <i class="bi" [class]="s.icon"></i>
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  socials = [
    { label: 'GitHub', icon: 'bi-github', url: 'https://github.com' },
    { label: 'LinkedIn', icon: 'bi-linkedin', url: 'https://linkedin.com' },
    { label: 'Email', icon: 'bi-envelope', url: 'mailto:hello@example.com' },
  ];
}
