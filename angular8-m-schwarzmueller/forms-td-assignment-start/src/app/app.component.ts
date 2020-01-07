import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @ViewChild('f', {static: true}) subscriptionForm;

  submitted = false;

  defaultSubscriptionType = 'advanced';

  data = {
    email: '',
    subscriptionType: '',
    password: ''
  };


  onSubmit() {

    this.submitted = true;
    this.data.email = this.subscriptionForm.value.email;
    this.data.password = this.subscriptionForm.value.password;
    this.data.subscriptionType = this.subscriptionForm.value.subscrType;

    console.log(this.data);

    this.subscriptionForm.reset();
  }

}
