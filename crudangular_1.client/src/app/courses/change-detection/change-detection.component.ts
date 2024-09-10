import { ChangeDetectorRef, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'
})
export class ChangeDetectionComponent {

  now: string = ''; 
  message = 'Start';
  intervalId: any;
  constructor(private cdRef: ChangeDetectorRef, private viewContainerRef: ViewContainerRef) { }

  updateMessage() {
    const currentTime = new Date().toLocaleTimeString(); 
    this.message = `${currentTime}`;
    this.cdRef.detectChanges(); 
  }
  @ViewChild('myTemplate') myTemplate!: TemplateRef<any>;
  

  insertTemplate() {
    this.viewContainerRef.createEmbeddedView(this.myTemplate);
    const currentTime2 = new Date().toLocaleTimeString(); 
    this.now = `${currentTime2}`;
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.updateMessage();
      this.insertTemplate();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); 
    }
  }

}
