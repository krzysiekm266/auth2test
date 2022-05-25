import { Component ,OnInit} from '@angular/core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //font awsome icons
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  title = 'auth2test';
  //properties


  ngOnInit():void {

  }


}
