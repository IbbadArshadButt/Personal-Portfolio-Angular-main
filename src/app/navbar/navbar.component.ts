import { Component, HostListener, signal } from '@angular/core';
import { NAV_LINKS } from '../portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav
      class="navbar navbar-expand-lg navbar-portfolio fixed-top"
      [class.scrolled]="scrolled()"
    >
      <div class="container">
        <a class="navbar-brand" href="#hero">
          Ibbad<span class="brand-dot">.</span>
        </a>

        <button
          class="navbar-toggler border-0 shadow-none text-white"
          type="button"
          (click)="toggleMenu()"
          aria-label="Toggle navigation"
        >
          <i class="bi" [class.bi-list]="!menuOpen()" [class.bi-x-lg]="menuOpen()"></i>
        </button>

        <div class="collapse navbar-collapse" [class.show]="menuOpen()">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            @for (link of links; track link.target) {
              <li class="nav-item">
                <a
                  class="nav-link"
                  [class.active]="activeSection() === link.target"
                  [href]="'#' + link.target"
                  (click)="closeMenu()"
                >
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    /* 1. Global Navbar Stack Elevation */
    .navbar-portfolio {
      z-index: 9999 !important;
      transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    /* Accent brand highlight handling */
    .brand-dot {
      color: var(--accent, #ffc107);
    }

    /* 2. Responsive Mobile Drawer Override Rules */
    @media (max-width: 991.98px) {
      .navbar-collapse.show {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        /* Opaque solid layout color matching your primary dark background palette */
        background-color: var(--bg-primary, #0b0f19) !important;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9998 !important; /* Positioned just beneath the toggler button icon layer */
        padding: 80px 24px;
        animation: fadeInMobile 0.25s ease forwards;
      }

      /* Stack items cleanly down the screen on mobile formats */
      .navbar-nav {
        text-align: center;
        width: 100%;
        display: flex;
        flex-column: column !important;
        gap: 1.5rem;
      }

      .nav-link {
        font-size: 1.5rem; /* Larger touch targets on small screens */
        color: var(--text-secondary, #8892b0) !important;
      }

      .nav-link.active {
        color: var(--accent, #ffc107) !important;
      }

      /* Keep the closing menu toggle (X) fixed and visible in the upper right corner */
      .navbar-toggler {
        position: relative;
        z-index: 9999 !important;
      }
    }

    /* Simple fade entry animation for the screen overlay */
    @keyframes fadeInMobile {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class NavbarComponent {
  links = NAV_LINKS;
  scrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('hero');

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
    this.detectActive();
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  private detectActive(): void {
    const sections = ['hero', ...this.links.map((l) => l.target)];
    const offset = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= offset) {
        current = id;
      }
    }
    this.activeSection.set(current);
  }
}