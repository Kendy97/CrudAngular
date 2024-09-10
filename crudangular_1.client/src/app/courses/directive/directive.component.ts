import { Component } from '@angular/core';
import { ChangeColorDirective } from '../directive/change-color.directive';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [ChangeColorDirective],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {



}
