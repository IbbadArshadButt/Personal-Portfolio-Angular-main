import { Component, HostListener, signal, inject } from '@angular/core';
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
          class="navbar-toggler border-0"
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
            <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a class="btn btn-accent btn-sm px-3" href="#contact" (click)="closeMenu()">
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
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
