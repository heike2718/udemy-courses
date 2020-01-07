import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'fenale'];
  @ViewChild('f', { static: true }) signupForm: NgForm;

  submitted = false;

  user: {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '';
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';

    // will override all inputs!
    // this.signupForm.setValue({
    //   userData: {
    //     userName: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({ userData: { userName: suggestedName } });
  }

  // onSubmit(form: NgForm) {

  //   console.log(form);

  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
