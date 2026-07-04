import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RevealDirective } from '../reveal.directive';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <div class="text-center mb-5" appReveal>
          <p class="section-eyebrow mb-2">— Contact</p>
          <h2 class="section-title">Get in touch</h2>
          <p class="section-subtitle">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-lg-5" appReveal>
            <h3 class="h5 mb-4">Let's Connect</h3>

            <div class="d-flex flex-column gap-3 mb-4">
              <a class="contact-row text-decoration-none text-white" href="mailto:ibbadbutt3521@gmail.com">
                <span class="contact-icon"><i class="bi bi-envelope"></i></span>
                <span>
                  <span class="d-block text-muted" style="font-size: 0.78rem;">Email</span>
                  <span class="text-white fw-medium">ibbadbutt3521@gmail.com</span>
                </span>
              </a>

              <a class="contact-row text-decoration-none text-white" href="https://linkedin.com/in/ibbad-arshad" target="_blank" rel="noopener">
                <span class="contact-icon"><i class="bi bi-linkedin"></i></span>
                <span>
                  <span class="d-block text-muted" style="font-size: 0.78rem;">LinkedIn</span>
                  <span class="text-white fw-medium">linkedin.com/in/ibbad-arshad</span>
                </span>
              </a>

              <a class="contact-row text-decoration-none text-white" href="https://github.com/IbbadArshadButt" target="_blank" rel="noopener">
                <span class="contact-icon"><i class="bi bi-github"></i></span>
                <span>
                  <span class="d-block text-muted" style="font-size: 0.78rem;">GitHub</span>
                  <span class="text-white fw-medium">github.com/IbbadArshadButt</span>
                </span>
              </a>

              <a class="contact-row text-decoration-none text-white" href="https://wa.me/923081200084" target="_blank" rel="noopener">
                <span class="contact-icon" style="background-color: rgba(37, 211, 102, 0.1); border-color: rgba(37, 211, 102, 0.2);"><i class="bi bi-whatsapp" style="color: var(--accent, #ffc107);"></i></span>
                <span>
                  <span class="d-block text-muted" style="font-size: 0.78rem;">WhatsApp</span>
                  <span class="text-white fw-medium">Chat on WhatsApp</span>
                </span>
              </a>
            </div>

            <div class="d-flex gap-2">
              @for (s of socials; track s.label) {
                <a class="social-btn" [href]="s.url" target="_blank" rel="noopener" [attr.aria-label]="s.label">
                  <i class="bi" [class]="s.icon"></i>
                </a>
              }
            </div>
          </div>

          <div class="col-lg-7" appReveal [revealDelay]="120">
            <h3 class="h5 mb-4">Send Me a Message</h3>

            <div class="card-dark p-4 p-md-5">
              @if (submitted()) {
                <div class="text-center py-4">
                  <div class="d-inline-flex align-items-center justify-content-center mb-3"
                       style="width: 56px; height: 56px; border-radius: 50%; background: var(--accent-soft); color: var(--accent); font-size: 1.5rem;">
                    <i class="bi bi-check2"></i>
                  </div>
                  <h4 class="h5 mb-2">Message sent</h4>
                  <p class="text-secondary mb-4">Thanks, {{ form.name }} — I'll get back to you shortly.</p>
                  <button class="btn btn-outline-accent" (click)="reset()" type="button">Send another</button>
                </div>
              } @else {
                <form #f="ngForm" (ngSubmit)="submit(f)" novalidate>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label text-secondary" style="font-size: 0.85rem;">Name</label>
                      <input
                        name="name"
                        [(ngModel)]="form.name"
                        required
                        class="form-control-dark form-control"
                        placeholder="Your name"
                        [class.is-invalid]="f.submitted && !form.name"
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label text-secondary" style="font-size: 0.85rem;">Email</label>
                      <input
                        name="email"
                        type="email"
                        [(ngModel)]="form.email"
                        required
                        email
                        class="form-control-dark form-control"
                        placeholder="you@example.com"
                        [class.is-invalid]="f.submitted && (!form.email || !form.email.includes('@'))"
                      />
                    </div>
                    <div class="col-12">
                      <label class="form-label text-secondary" style="font-size: 0.85rem;">Subject</label>
                      <input
                        name="subject"
                        [(ngModel)]="form.subject"
                        required
                        class="form-control-dark form-control"
                        placeholder="What's this about?"
                        [class.is-invalid]="f.submitted && !form.subject"
                      />
                    </div>
                    <div class="col-12">
                      <label class="form-label text-secondary" style="font-size: 0.85rem;">Message</label>
                      <textarea
                        name="message"
                        [(ngModel)]="form.message"
                        required
                        rows="5"
                        class="form-control-dark form-control"
                        placeholder="Tell me about your project..."
                        [class.is-invalid]="f.submitted && !form.message"
                      ></textarea>
                    </div>
                  </div>

                  @if (errorMessage()) {
                    <div class="alert alert-danger mt-3 mb-0 small py-2" role="alert">
                      {{ errorMessage() }}
                    </div>
                  }

                  <div class="d-flex justify-content-end mt-4">
                    <button class="btn btn-accent px-4" type="submit" [disabled]="sending()">
                      @if (sending()) {
                        <span class="spinner-border spinner-border-sm me-2"></span>Sending...
                      } @else {
                        <i class="bi bi-send me-2"></i>Send Message
                      }
                    </button>
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  form: ContactForm = { name: '', email: '', subject: '', message: '' };
  submitted = signal(false);
  sending = signal(false);
  errorMessage = signal<string | null>(null);

  // PLACE YOUR FORMSPREE FORM ID HERE (e.g., 'xoqyzabc')
  private formspreeId = 'xqevwovn'; 

  socials = [
    { label: 'GitHub', icon: 'bi-github', url: 'https://github.com/IbbadArshadButt' },
    { label: 'LinkedIn', icon: 'bi-linkedin', url: 'https://linkedin.com/in/ibbad-arshad' },
    { label: 'X', icon: 'bi-twitter-x', url: 'https://x.com/ibbadbutt085' },
    { label: 'Email', icon: 'bi-envelope', url: 'mailto:ibbadbutt3521@gmail.com' },
  ];

  submit(f: NgForm): void {
    if (f.invalid) {
      f.control.markAllAsTouched();
      return;
    }
    
    this.sending.set(true);
    this.errorMessage.set(null);

    // Asynchronously POST form data to Formspree API directly
    fetch(`https://formspree.io/f/${this.formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
    'Form Source': 'Main Portfolio Contact Section',
    'Visitor Name': this.form.name,
    'Email Address': this.form.email,
    'Subject Line': this.form.subject,
    'Message Details': this.form.message,
    'Submission Date': new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }) + ' PKT'
  })
    })
    .then(response => {
      this.sending.set(false);
      if (response.ok) {
        this.submitted.set(true);
      } else {
        this.errorMessage.set('Oops! There was a problem sending your message. Please try again.');
      }
    })
    .catch(error => {
      this.sending.set(false);
      this.errorMessage.set('Network error. Please check your connection and try again.');
    });
  }

  reset(): void {
    this.form = { name: '', email: '', subject: '', message: '' };
    this.submitted.set(false);
    this.errorMessage.set(null);
  }
}