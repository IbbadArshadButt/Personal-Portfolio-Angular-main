import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

interface Certification {
  title: string;
  provider: string;
  link: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="certifications" class="section">
      <div class="container">
        <!-- Section Header -->
        <div class="d-flex justify-content-between align-items-end mb-5" appReveal>
          <div>
            <p class="section-eyebrow mb-2" style="color: #ffc107;">— VERIFIED</p>
            <h2 class="section-title text-start">Certifications</h2>
            <p class="section-subtitle text-start text-secondary">
              Verified certifications across different domains and programming languages.         </p>
          </div>
          <!-- Dynamic counts label matching snapshot image -->
          <span class="text-secondary pb-2" style="font-size: 0.9rem;">{{ certifications.length }} total</span>
        </div>

        <!-- Certifications 2-Column Grid Grid Layout -->
        <div class="row g-4">
          @for (cert of certifications; track cert.title; let i = $index) {
            <div class="col-md-6" appReveal [revealDelay]="i * 50">
              <div class="card-dark p-4 d-flex align-items-start gap-3 h-100 cert-card">
                
                <!-- Certification Icon Block -->
                <div class="cert-icon-box d-flex align-items-center justify-content-center flex-shrink-0">
                  <i class="bi bi-award text-warning" style="font-size: 1.25rem;"></i>
                </div>

                <!-- Text metadata layout descriptions -->
                <div class="d-flex flex-column justify-content-between h-100">
                  <div>
                    <h3 class="h6 fw-bold mb-1 text-white line-clamp">{{ cert.title }}</h3>
                    <p class="text-secondary small mb-3">{{ cert.provider }}</p>
                  </div>
                  
                  <a [href]="cert.link" target="_blank" class="cert-link d-inline-flex align-items-center gap-1 text-warning decoration-none small fw-semibold">
                    View certificate <i class="bi bi-box-arrow-up-right" style="font-size: 0.8rem;"></i>
                  </a>
                </div>

              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cert-icon-box {
      width: 42px;
      height: 42px;
      background-color: rgba(255, 193, 7, 0.05);
      border: 1px solid rgba(255, 193, 7, 0.15);
      border-radius: 8px;
    }

    .cert-card {
      transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .cert-card:hover {
      border-color: rgba(255, 193, 7, 0.25) !important;
      transform: translateY(-2px);
    }

    .cert-link {
      text-decoration: none;
      transition: opacity 0.2s ease;
    }

    .cert-link:hover {
      opacity: 0.85;
    }

    .line-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class CertificationsComponent {
  // Populate matching exactly the entries from image_843525.png
  certifications: Certification[] = [
    {
    title: 'Introduction to Web Development with HTML, CSS, JavaScript',
    provider: 'IBM (Coursera)',
    link: 'https://coursera.org/share/d74d87f258aff23aaff63c67f205e38b'
    },
    {
      title: 'JavaScript programming Essentials',
      provider: 'IBM (Coursera)',
      link: 'https://coursera.org/share/bfbb085d4e119a62986af93b1dcbec89'
    },
    {
      title: 'Introduction to Java',
      provider: 'LearnQuest (Coursera)',
      link: 'https://coursera.org/share/a14e8046a48363e3bfbd431dac1cf422'
    },
    {
      title: 'Introduction to AI',
      provider: 'Google (Coursera)',
      link: 'https://coursera.org/share/c67d28a8f0b960e5a6b75ff2584a2479'
    },
    {
      title: 'Introduction to Public Speaking',
      provider: 'University of Washington (Coursera)',
      link: 'https://coursera.org/share/52fbbd3d331c707001760586d3523506'
    },
    {
      title: 'Getting Started with Fiverr for Freelancers',
      provider: 'Freedom Learning Group (Coursera)',
      link: 'https://coursera.org/share/666997e0a030d0fd46b90944c03ab6d2'
    }
  ];
}