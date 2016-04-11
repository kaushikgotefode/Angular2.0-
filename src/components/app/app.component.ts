import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from '../../components/app/navbar.component';
import {ToolbarComponent} from '../../components/app/toolbar.component';
import {HomeComponent} from '../../components/home/home.component';
import {AboutComponent} from '../../components/about/about.component';
import {NameListService} from '../../shared/services/name-list.service';
import {SearchComponent} from '../../components/search/search.component';
import {SearchService} from '../../shared/services/search.service';
import {EditComponent} from '../../components/search/edit.component';
import {FormComponent} from '../../components/form/form.component';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService,SearchService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@RouteConfig([
  { path: '/',       name: 'Home',   component: HomeComponent   },
  { path: '/about',  name: 'About',  component: AboutComponent  },
  { path: '/search', name: 'Search', component: SearchComponent },
  { path: '/form',   name: 'Form',   component: FormComponent   },
  { path: '/edit/:id',name:'Edit',   component: EditComponent   }
])
export class AppComponent {}
