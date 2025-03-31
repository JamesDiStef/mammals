import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import '@fortawesome/fontawesome-free/css/all.min.css';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'animals';
  mobileNavOpen = false;

  toggleMenu() {
    console.log('yo yo');
    this.mobileNavOpen = !this.mobileNavOpen;
  }
}
