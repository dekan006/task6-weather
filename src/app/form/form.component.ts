import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor () {
    
  }
  form!: FormGroup;
  

  ngOnInit() {
      this.form = new FormGroup({
        email: new FormControl('', 
          [Validators.email, 
          Validators.required]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ])
      })
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submit', this.form)
      const formData = {...this.form.value}

      console.log('Form Data',formData)
    }
    
  }
}
