import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { format, toZonedTime } from 'date-fns-tz';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {

  timeZoneName = 'America/Sao_Paulo'


  constructor(){}

  ngOnInit(){
  }

  formatedDate(date: string){
    date = date + 'Z';

    const data = new Date(date);
    const zonedDate = toZonedTime(data, this.timeZoneName);

    return zonedDate;
  }
}
