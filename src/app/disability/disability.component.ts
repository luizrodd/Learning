import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Person, Attributes, LookupItem, Disability } from './employee-type';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Subject } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import {
  MatExpansionModule,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { AddDisabilityComponent } from './modal/add-disability/add-disability.component';

export interface LookUpDisabilities {
  name: string;
  types: LookupItem[];
}

@Component({
  selector: 'app-disability',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
  ],
  templateUrl: './disability.component.html',
  styleUrl: './disability.component.css',
})
export class DisabilityComponent {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  employeeDetails: Person;

  attributes: Attributes;
  physicalDisabilities$: LookUpDisabilities[] = [
    {
      name: 'Deficiência Física',
      types: [
        {
          id: 0,
          name: 'Paraplegia',
        },
        {
          id: 1,
          name: 'Tetraplegia',
        },
        {
          id: 2,
          name: 'Amputações',
        },
        {
          id: 3,
          name: 'Paralisia cerebral',
        },
        {
          id: 4,
          name: 'Outro',
        },
      ],
    },
    {
      name: 'Deficiência Auditiva',
      types: [
        {
          id: 5,
          name: 'Surdez',
        },
        {
          id: 6,
          name: 'Perda auditiva unilateral ou bilateral severa',
        },
        {
          id: 7,
          name: 'Outro',
        },
      ],
    },
    {
      name: 'Deficiência Visual',
      types: [
        {
          id: 8,
          name: 'Cegueira total',
        },
        {
          id: 9,
          name: 'Baixa visão',
        },
        {
          id: 10,
          name: 'Visão monocular',
        },
        {
          id: 11,
          name: 'Outro',
        },
      ],
    },
    {
      name: 'Deficiência Intelectual',
      types: [
        {
          id: 12,
          name: 'Síndrome de Down',
        },
        {
          id: 13,
          name: 'Transtornos de desenvolvimento intelectual',
        },
        {
          id: 14,
          name: 'Outro',
        },
      ],
    },
    {
      name: 'Transtorno do Espectro Autista (TEA)',
      types: [
        {
          id: 15,
          name: 'Embora não seja explicitamente listado no Decreto nº 3.298/1999, o TEA é considerado para fins de inclusão na categoria de deficiência, conforme a Lei nº 12.764/2012.',
        },
      ],
    },
  ];
  disabilitiesTypes: LookupItem[];

  constructor(private fb: FormBuilder,
    private dialog: MatDialog
  ){}

  form: FormGroup;


  ngOnInit(): void {
    var disabilities: Disability[] = [
      {
        description: 'eqw',
        disabilityId: 1,
        id: '222-2222-22',
        scannedFileId: '0',
      },
      {
        description: 'eqw',
        disabilityId: 2,
        id: '222-2222-22',
        scannedFileId: '2',
      },
      {
        description: 'eqw',
        disabilityId: 7,
        id: '222-2222-22',
        scannedFileId: '5',
      },
      {
        description: 'eqw',
        disabilityId: 12,
        id: '222-2222-22',
        scannedFileId: '5',
      },
    ];

    this.initial(disabilities);
  }

  initial(disabilities: Disability[]) {
    const result = disabilities.map((disability) => {
      const category = this.physicalDisabilities$.find((x) =>
        x.types.some((y) => y.id === disability.disabilityId)
      );
      const type = category.types.find((y) => y.id === disability.disabilityId);
      return {
        name: category.name,
        type: type.name,
        typeId: type.id,
        fileId: disability.scannedFileId
      };
    });

    this.form = this.fb.group({
      disabilities: this.fb.array(
      result.map((disability) =>
        this.fb.group({
        name:   [{ value: disability.name, disabled: true }],
        typeId: [{ value: disability.typeId, disabled: true }],
        type:   [{ value: disability.type, disabled: true }],
        fileId: [{ value: disability.fileId, disabled: true }]
        })
      )
      )
    });

    this.disabilitiesTypes = this.physicalDisabilities$.flatMap(x => x.types)

    console.log(this.form.value);
  }

  get disabilities(): FormArray {
    return this.form.get('disabilities') as FormArray;
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  uploadFile() {}

  onChangeDisabilityType(event: MatSelectChange) {
    console.log(event.value);

    this.disabilitiesTypes = this.physicalDisabilities$.find(
      (x) => x.name == event.value
    ).types;
    console.log(this.disabilitiesTypes);
  }

  onSubmit(i: number) {
    const disability = (this.form.get('disabilities') as FormArray).at(i).value;
    console.log(disability);
  }

  openAddDisabilityDialog(){
    this.dialog.open(AddDisabilityComponent, {
      width: '600px',
      data: {
        disabilities: this.physicalDisabilities$
      }
    })
  }
}
