import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray  } from '@angular/forms';
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
    }),
    skills:this.fb.array([

    ])
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void { }
  contactSubmit(): void{
    this.hacon = JSON.stringify(this.contactForm.value);
    console.log(this.contactForm.value);
    }

    get skillForms(){
      return this.contactForm.get('skills') as FormArray;
    }

    addSkillsFormGroup(){
      this.skillForms.push(this.fb.group({
        programLanguage: [''],
        experience: [0]
      }))
    }
    removeSkills(index:number){
      this.skillForms.removeAt(index);
    }


}
