import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {NavbarComponent} from '../../components/app/navbar.component';
import {ToolbarComponent} from '../../components/app/toolbar.component';
import {HomeComponent} from '../../components/home/home.component';
import {AboutComponent} from '../../components/about/about.component';
import {NameListService} from '../../shared/services/name-list.service';
import {SearchComponent} from '../../components/search/search.component';
import {SearchService} from '../../shared/services/search.service';
import {EditComponent} from '../../components/search/edit.component';
import {FormComponent} from '../../components/form/form.component';
import {MobileComponent} from '../../components/mobileApp/mobileApp.component';

//const css: string = require();
@RouteConfig([
  { path: '/', name: 'Home',   component: HomeComponent   },
  { path: '/about',  name: 'About',  component: AboutComponent  },
  { path: '/search', name: 'Search', component: SearchComponent },
  { path: '/form',   name: 'Form',   component: FormComponent   },
  { path: '/edit/:id',name:'Edit',   component: EditComponent   },
  { path: '/mobileApp/...', name: 'Mobile', component: MobileComponent}
  
])

@Component({
  selector: 'sd-app',
  providers: [NameListService, SearchService],
  templateUrl: './components/app/app.component.html',
  // styleUrls: ['../node_modules/bootstrap/dist/css/bootstrap.css'],
  directives: [RouterOutlet, RouterLink, NavbarComponent, ToolbarComponent]
})
export class AppComponent {}
