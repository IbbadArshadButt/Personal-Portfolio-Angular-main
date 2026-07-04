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
              Open to work
            </span>

            <h1 class="hero-name mb-3">Ibbad Arshad</h1>
            <p class="hero-sub mb-4">
              Software Engineer
            </p>

            <p class="text-secondary mx-auto mb-5" style="max-width: 560px;">
             I build applications that solve real-world problems.
            </p>

            <div class="d-flex flex-wrap justify-content-center gap-3">
              <a class="btn btn-accent" href="#contact">
                <i class="bi bi-send me-2"></i>Get in Touch
              </a>
              <a class="btn btn-outline-accent" href="#experience">
                View my Work
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
    { label: 'GitHub', icon: 'bi-github', url: 'https://github.com/IbbadArshadButt' },
    { label: 'LinkedIn', icon: 'bi-linkedin', url: 'https://linkedin.com/in/ibbad-arshad' },
    { label: 'Email', icon: 'bi-envelope', url: 'mailto:ibbadbutt3521@gmail.com' },
    { label: 'WhatsApp', icon: 'bi-whatsapp', url: 'https://wa.me/923081200084' },
  ];
}
