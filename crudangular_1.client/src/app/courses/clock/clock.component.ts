import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {

  @ViewChild('secondHand') secondHand!: ElementRef;
  @ViewChild('minHand') minHand!: ElementRef;
  @ViewChild('hourHand') hourHand!: ElementRef;

  private intervalId: any;

  ngAfterViewInit() {
    this.intervalId = setInterval(() => {
      this.setDate();
    }, 1000);
    this.setDate();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    this.secondHand.nativeElement.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    this.minHand.nativeElement.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    this.hourHand.nativeElement.style.transform = `rotate(${hourDegrees}deg)`;
  }
}
