import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.scss']
})
export class AddFeatureComponent implements OnInit {
  addFeatureForm: FormGroup;

  constructor() {
    this.addFeatureForm = new FormGroup({});
   }

  ngOnInit(): void {

  }

  initForm() {
    this.addFeatureForm = new FormGroup({
      
    })
  }

}
