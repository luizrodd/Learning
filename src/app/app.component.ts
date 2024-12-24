import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Address {
  id: string;
  address1: string;
  address2: string;
  address3?: string;
  city: string;
  countryName: string;
  state: string;
  typeName: string;
  zipCode: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, HttpClientModule],
  styleUrl: './app.component.css',
  template: `
    <h1>Form Array</h1>
    <form [formGroup]="form">
      <div *ngFor="let city of cities.controls; index as i">
          <div formArrayName="cities">
          <div [formGroupName]="i">
            <input formControlName="address1" />
            <input formControlName="zipCode" />
          </div>
          <button type="button" (click)="onSubmit(i)">Submit</button>
        </div>
      </div>
    </form>

    <button (click)="addCity()">Add City</button>
    <button (click)="setPreset()">Set preset</button>


    <button (click)="navigateToDate()">Data</button>
    <button (click)="navigateToDisability()">Disability</button>
    <button (click)="navigateToImages()">Images</button>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  city: Address[] = [
    {
      address1: '123 Main St',
      address2: 'Apt 1',
      address3: 'Suite 2',
      city: 'LA',
      countryName: 'USA',
      id: '1',
      state: 'CA',
      typeName: 'home',
      zipCode: 90001,
    },
    {
      id: '2',
      address2: 'Apt 2',
      address3: 'Suite 3',
      address1: '456 Elm St',
      city: 'MTV',
      countryName: 'USA',
      state: 'CA',
      typeName: 'home',
      zipCode: 94043,
    },
  ];

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      cities: this.fb.array(
        this.city.map((address) =>
          this.fb.group({
            id: address.id,
            countryName: address.countryName,
            zipCode: address.zipCode,
            address1: address.address1,
            address2: address.address2,
            address3: address.address3,
            city: address.city,
            state: address.state,
            type: address.typeName,
          })
        )
      ),
    });
  }

  get cities(): FormArray {
    return this.form.get('cities') as FormArray;
  }

  addCity() {
    this.cities.push(new FormControl());
  }

  onSubmit(index: number) {
    const city = (this.form.get('cities') as FormArray).at(index).value;
    console.log(city);
  }

  setPreset() {
    this.cities.patchValue(['LA', 'MTV']);
  }

  navigateToDate() {
    this.route.navigate(['date']);
  }

  navigateToDisability(){
    this.route.navigate(['disability']);
  }

  navigateToImages(){
    this.route.navigate(['images']);
  }

}
