import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder  } from '@angular/forms';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  hacon: any = [];
  contactForm = this.fb.group({
    firstName:[''],
    lastName:[''],
    email: [''],
    company: [''],
    url: [''],
    phone:[''],
    preferredContactTime: this.fb.group({
      selectTime: ['-1']
    })
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    }
  contactSubmit(): void{
    this.hacon = JSON.stringify(this.contactForm.value);
    console.log(this.contactForm.value);
    }




}
