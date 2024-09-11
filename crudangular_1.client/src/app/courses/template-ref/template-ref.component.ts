import { Component, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  standalone: true,
  imports: [],
  templateUrl: './template-ref.component.html',
  styleUrl: './template-ref.component.css'
})
export class TemplateRefComponent {
  @ViewChild('myTemplate') myTemplate!: TemplateRef<any>;
  constructor(private viewContainerRef: ViewContainerRef) { }

  insertTemplate() {
    this.viewContainerRef.createEmbeddedView(this.myTemplate);
  }
  deleteTemplate() {
    this.viewContainerRef.clear();
  }
}
