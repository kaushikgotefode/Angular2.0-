import {Component} from 'angular2/core';
import {RouterLink, RouteConfig, RouterOutlet} from 'angular2/router';
import {LoginComponent} from './login.component';
import {SignupComponent} from './signup.component';

@RouteConfig([
	{ path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true},
	{ path: '/signup', name: 'Signup', component: SignupComponent }
])

@Component({
	selector:'mobile-app',
	directives: [RouterLink, RouterOutlet],
	template: `<router-outlet></router-outlet>`
})


export class MobileComponent {

}


// templateUrl: './components/mobileApp/mobileApp.component.html',
// styleUrls: ['./components/mobileApp/mobileApp.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.css'],