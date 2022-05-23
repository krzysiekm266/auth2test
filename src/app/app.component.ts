import { Component } from '@angular/core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //font awsome icons
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  title = 'auth2test';
  //properties
  welcome:boolean = true;
  onWelcomeShow(value:boolean) {
    this.welcome = value;
  }

  onWelcomeHide(value:boolean) {
    this.welcome = value;
  }
}
