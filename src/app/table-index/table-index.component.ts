import {ChangeDetectionStrategy, Component} from '@angular/core';
import { FormArray, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-table-index',
  standalone: true,
  imports: [MatTableModule, ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, FormsModule],
  templateUrl: './table-index.component.html',
  styleUrl: './table-index.component.css'
})
export class TableIndexComponent {
  displayedColumns: string[] = ['index', 'name', 'actions', 'confirm'];
  dataSource: IAdvanceConfirmation[] = [
    {
      id: '1',
      requestNumber: '1',
      requesterName: 'John Doe',
      requestedOn: new Date(),
      costCenterCode: '123',
      jobName: 'Job 1',
      totalValue: '100',
      currencyCode: 'USD',
      isConfirmed: false,
      scheduledTo: new Date()
    },
    {
      id: '2',
      requestNumber: '2',
      requesterName: 'Jane Doe',
      requestedOn: new Date(),
      costCenterCode: '123',
      jobName: 'Job 2',
      totalValue: '200',
      currencyCode: 'USD',
      isConfirmed: false,
      scheduledTo: new Date()
    },

  ];

  form: FormGroup = new FormGroup({});

  ngOnInit(){
  }

  confirmAction(element: any, index: number){
    console.log(element, index);

    var advance = this.dataSource.find(x => x.id == element.id)
    advance.scheduledTo = element.scheduledTo;

    alert(advance.scheduledTo)
  }
}

export interface IAdvanceConfirmation {
  id: string;
  requestNumber: string;
  requesterName: string;
  requestedOn: Date;
  costCenterCode: string;
  jobName: string;
  totalValue: string;
  currencyCode: string;
  isConfirmed: boolean;
  scheduledTo: Date;
}
function provideNativeDateAdapter(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

