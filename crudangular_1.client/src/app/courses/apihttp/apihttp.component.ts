import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apihttp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apihttp.component.html',
  styleUrl: './apihttp.component.css'
})
export class ApihttpComponent {
  public users: any[] = [];
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getApi() {
   
    this.getUsers().subscribe(data => {
      this.users = data;
    });
  }



}
