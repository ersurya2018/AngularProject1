import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form : FormGroup;
  constructor(public fb:FormBuilder) {
    this.form = this.fb.group({
      name: [""],
      email: [""],
      password: [""],
    });
   }

  ngOnInit(): void {
    
  }
  register(){

  }

}
