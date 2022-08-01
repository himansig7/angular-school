import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
})
export class StudentRegistrationComponent implements OnInit {
  vm: any = {};

  init() {
   // this.vm.firstName = 'aaaa';
    //this.vm.id = 5;
    //this.vm.yearOfGraduation = '2022';
  }
  constructor() {
  //  this.init();
  }

  save(){

  }
  ngOnInit() {}
}
