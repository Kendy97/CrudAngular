import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  selectedDate: Date | null = null;
  meetings: { date: Date, title: string, description: string }[] = [];

  constructor(public dialog: MatDialog) { }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value;
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MeetingDialog, {
      width: '300px',
      data: { date: this.selectedDate, title: '', description: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.meetings.push(result);
      }
    });
  }
}

@Component({
  selector: 'meeting-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  template: `
    <h1 mat-dialog-title>Dodaj Spotkanie</h1>
    <div mat-dialog-content>
      <p>Data: {{ data.date | date }}</p>
      <mat-form-field appearance="fill">
        <mat-label>Tytuł</mat-label>
        <input matInput [(ngModel)]="data.title">
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Opis</mat-label>
        <textarea matInput [(ngModel)]="data.description"></textarea>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Anuluj</button>
      <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Zapisz</button>
    </div>
  `,
})
export class MeetingDialog {
  constructor(
    public dialogRef: MatDialogRef<MeetingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { date: Date, title: string, description: string }
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
