import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'sd-navbar',
  templateUrl: './components/app/navbar.component.html',
  styleUrls: ['./components/app/navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {}
