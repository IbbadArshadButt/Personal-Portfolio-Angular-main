import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer-dark py-5 mt-5">
      <div class="container">
        <div class="row g-4 mb-5">
          
          <div class="col-lg-5 col-md-12">
            <h3 class="footer-logo mb-3">Ibbad<span class="text-accent">.</span></h3>
            <p class="footer-bio text-secondary mb-4" style="max-width: 400px; line-height: 1.6;">
              Software Engineer focused on Angular, .NET, and scalable web applications, passionately building robust digital experiences.
            </p>
            <div class="d-flex align-items-center gap-2 footer-status">
              <span class="status-dot animate-pulse"></span>
              <span class="text-secondary small">
                Lahore, Pakistan - {{ currentTime() }} PKT (UTC+5)
              </span>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-6 ms-auto">
            <h4 class="footer-heading fw-bold mb-3">Links</h4>
            <ul class="list-unstyled d-flex flex-column gap-2">
              <li><a href="#hero" class="footer-link">Home</a></li>
              <li><a href="#about" class="footer-link">About</a></li>
              <li><a href="#skills" class="footer-link">Skills</a></li>
              <li><a href="#education" class="footer-link">Education</a></li>
              <li><a href="#certifications" class="footer-link">Certifications</a></li>
              <li><a href="#contact" class="footer-link">Contact</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 col-6">
            <h4 class="footer-heading fw-bold mb-3">Contact</h4>
            <ul class="list-unstyled d-flex flex-column gap-2">
              <li>
                <a href="https://github.com/IbbadArshadButt" target="_blank" class="footer-link d-flex align-items-center gap-2">
                  <i class="bi bi-github"></i> GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/ibbad-arshad" target="_blank" class="footer-link d-flex align-items-center gap-2">
                  <i class="bi bi-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:ibbadbutt3521@gmail.com" class="footer-link d-flex align-items-center gap-2">
                  <i class="bi bi-envelope"></i> Email
                </a>
              </li>
              <li>
                <a href="tel:+923081200084" class="footer-link d-flex align-items-center gap-2">
                  <i class="bi bi-telephone"></i> Phone
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr class="border-secondary opacity-20 my-4" />

        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 pt-2 text-secondary small">
          <div>
            &copy; {{ currentYear }} Ibbad Arshad. All rights reserved.
          </div>
          <div class="text-muted">
            Built with Angular & Bootstrap.
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-dark {
      background-color: var(--bg-primary, #0b0f19);
      border-top: 1px solid var(--border-neutral, rgba(255, 255, 255, 0.05));
    }

    .footer-logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.02em;
    }

    .text-accent {
      color: var(--accent, #ffc107);
    }

    .footer-heading {
      font-size: 0.8rem;
      text-uppercase: true;
      letter-spacing: 0.1em;
      color: var(--text-secondary, #8892b0);
      font-weight: 600;
      text-transform: uppercase;
    }

    .footer-link {
      color: var(--text-secondary, #8892b0);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease, transform 0.2s ease;
      display: inline-flex;
    }

    .footer-link:hover {
      color: #ffffff;
      transform: translateX(2px);
    }

    /* Green pulse dot styles matching image status layer */
    .status-dot {
      width: 8px;
      height: 8px;
      background-color: #10b981;
      border-radius: 50%;
      display: inline-block;
      box-shadow: 0 0 8px #10b981;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .opacity-20 {
      opacity: 0.1;
    }
  `]
})
export class FooterComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  currentTime = signal<string>('');
  private timeInterval: any;

  ngOnInit() {
    this.updateTime();
    // Keep the status clock updating accurately every minute
    this.timeInterval = setInterval(() => this.updateTime(), 60000);
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private updateTime() {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Karachi',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
    this.currentTime.set(new Date().toLocaleTimeString('en-US', options));
  }
}