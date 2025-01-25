import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from "./sections/intro/intro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'praveenj-portfolio-angular';
}
