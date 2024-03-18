import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  register: FormGroup | any;
  ngOnInit() {
    this.register = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
      ]),
      father_name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]'),
      ]),
      mother_name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]'),
      ]),
      address: new FormControl('', [Validators.required]),
      number1: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      number2: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      tenthmark: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
      ]),
      twelfth: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
      ]),
      pmark: new FormControl('', [
        Validators.required,
        Validators.maxLength(2),
      ]),
      cmark: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
      ]),
      mmark: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
      ]),
    });
  }
  onSubmit(myEvent1: Event) {
    myEvent1.preventDefault();
    if (this.register.valid == true) {
      alert('Data Submitted Successfully');
    } else {
      alert('Please Enter Valid Data');
    }
  }
}
