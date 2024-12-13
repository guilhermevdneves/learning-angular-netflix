import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})

export class AppComponent {

}
