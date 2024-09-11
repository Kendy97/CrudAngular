import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-fun3',
  standalone: true,
  imports: [],
  templateUrl: './fun3.component.html',
  styleUrl: './fun3.component.css'
})
export class Fun3Component implements AfterViewInit {
  @ViewChildren('controlInput') inputs!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.inputs.forEach((inputRef: ElementRef) => {
      const inputElement = inputRef.nativeElement as HTMLInputElement;
      inputElement.addEventListener('change', this.handleUpdate.bind(this));
      inputElement.addEventListener('mousemove', this.handleUpdate.bind(this));
    });
  }

  handleUpdate(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const suffix = inputElement.dataset['sizing'] || '';
    document.documentElement.style.setProperty(`--${inputElement.name}`, inputElement.value + suffix);
  }
}
