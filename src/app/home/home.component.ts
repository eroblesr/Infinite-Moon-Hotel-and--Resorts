import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['stepper-errors-example.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})

export class HomeComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  

  constructor() {}

  ngOnInit() {
    
  }
}
