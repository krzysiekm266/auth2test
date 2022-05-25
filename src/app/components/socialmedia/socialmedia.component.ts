import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.scss']
})
export class SocialmediaComponent implements OnInit {
 //font awsome icons
 faTwitter = faTwitter;
 faFacebook = faFacebook;
 title = 'auth2test';
 //properties
  constructor() { }

  ngOnInit(): void {
  }

}
