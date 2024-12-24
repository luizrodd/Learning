import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LookUpDisabilities } from '../../disability.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { LookupItem } from '../../employee-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-disability',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, MatSelectModule, MatOptionModule, MatButtonModule, MatInputModule],
  templateUrl: './add-disability.component.html',
  styleUrl: './add-disability.component.css'
})
export class AddDisabilityComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { disabilities: LookUpDisabilities[]}
  ){}

  form: FormGroup;
  disabilitiesType: LookupItem[] = [];

  ngOnInit() {
    this.form = new FormGroup({
      typeId: new FormControl([null, Validators.required]),
      description: new FormControl({value: null, disabled: true}),
      file: new FormControl([null, Validators.required])
    });
  }

  onDisabilityChange(event: MatSelectChange){
    this.disabilitiesType = this.data.disabilities.find(disability => disability.name === event.value).types;
  }

  onTypeChange(event: MatSelectChange){
    const disability = this.disabilitiesType.find(disability => disability.id === event.value);
    if(disability.name == 'Outro'){
      this.form.get('description').setValidators([Validators.required]);
      this.form.get('description').enable();
    }else{
      this.form.get('description').clearValidators();
      this.form.get('description').disable();
    }
  }

  save(){
    console.log(this.form.value);
  }
}
