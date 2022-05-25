import { map, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  //fort awsome icons

  faHouseChimney = faHouseChimney;
  //properties
  home: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {


  }

}
