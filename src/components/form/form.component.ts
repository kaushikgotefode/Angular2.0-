import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {FormBuilder, Validators} from 'angular2/common';
import {ControlMessages} from 'components/form/control-messages.component';
// import {ValidationService} from 'components/form/validation.service';



@Component({
	selector:'form-element',
	templateUrl: 'components/form/form.component.html',
	styleUrls: ['components/form/form.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class FormComponent {
	userForm: any;
	constructor (private _formBuilder: FormBuilder) {
			this.userForm = this._formBuilder.group({
				'name': ['', Validators.required],
				'email': ['', Validators.compose([Validators.required])
			});
		}

	saveUser() {
		debugger;
	}

}
