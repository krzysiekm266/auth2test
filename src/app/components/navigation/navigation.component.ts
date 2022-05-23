import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  faBrain,
  faGears,
  faGear,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  //fort awsome icons
  faBrain = faBrain;
  faGears = faGears;
  faGear = faGear;
  faBook = faBook;
  //properties
  @Output() welcomeShow = new EventEmitter<boolean>();
  @Output() welcomeHide = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  showWelcome() {
    this.welcomeShow.emit(true);
  }

  hideWelcome() {
    this.welcomeHide.emit(false);
  }
}
