import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {


  public formularz: FormGroup;

  constructor() {
    this.formularz = new FormGroup({
      imie: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      haslo: new FormControl('', [Validators.required, Validators.minLength(6)]),
      potwierdzHaslo: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  czyHaslaZgodne(): boolean {
    return this.formularz.get('haslo')?.value === this.formularz.get('potwierdzHaslo')?.value;
  }

  onSubmit(): void {
    if (this.formularz.valid && this.czyHaslaZgodne()) {
      console.log('Formularz wysłany', this.formularz.value);
    } else {
      console.log('Formularz jest niepoprawny lub hasła nie są zgodne');
    }
  }

}
