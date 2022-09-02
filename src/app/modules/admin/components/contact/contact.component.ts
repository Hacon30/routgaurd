import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators  } from '@angular/forms';
import { morningOrEveningRequired } from '../shared/customerror.directive';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  hacon: any = [];
  contactForm = this.fb.group({
    firstName:['',[Validators.required]],
    lastName:[''],
    email: [''],
    company: [''],
    url: [''],
    phone:[''],
    preferredContactTime: this.fb.group({
      selectTime: ['-1', [morningOrEveningRequired]]
    }),
    skills:this.fb.array([

    ])
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

   }
  contactSubmit(): void{
    this.hacon = JSON.stringify(this.contactForm.value);
    console.log(this.contactForm.value);
    }

    get skillForms(){
      return this.contactForm.get('skills') as FormArray;
    }
    get selectTime(){
      return  this.contactForm.get(['selectTime']);
    }
    get firstName(){
      return this.contactForm.get('firstName')
    }
    getProgramming(index:number){
      return this.skillForms.at(index).get('programLanguage');
    }
    addSkillsFormGroup(){
      this.skillForms.push(this.fb.group({
        programLanguage: ['', [Validators.required]],
        experience: [0]
      }))
    }
    removeSkills(index:number){
      this.skillForms.removeAt(index);
    }
    sampleSetValue(){
      this.contactForm.setValue({
        firstName:"Hassan" ,
        lastName:"Conteh",
        email: "hacondesign@gmail.com",
        company: "Hacon Design",
        url: "http://hacon.design",
        phone: "4695656392",
        preferredContactTime:{
          selectTime: 'morning'
        },
        skills: []
      }
      )
    }
    samplePatchValue(){
      this.contactForm.patchValue({
        firstName: "Atimu",
        email: "Alluct22@gmail.com"
      })
    }

}
