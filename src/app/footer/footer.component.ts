import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center g-3">
          <div class="col-md-6 text-center text-md-start">
            <span class="fw-semibold" style="font-family: 'Poppins', sans-serif;">
              Ibbad<span class="text-accent">.</span>Arshad
            </span>
            <span class="text-secondary ms-2" style="font-size: 0.9rem;">
              — Crafting code that matters.
            </span>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <p class="text-secondary mb-0" style="font-size: 0.88rem;">
              &copy; {{ year }} Ibbad Arshad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
