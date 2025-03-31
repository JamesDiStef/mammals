import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'animals';
  mobileNavOpen = false;
  faBars = faBars;

  toggleMenu() {
    console.log('yo yo');
    this.mobileNavOpen = !this.mobileNavOpen;
  }
}
