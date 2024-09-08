import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';
interface Client {
  id: number;
  name: string;
  email: string;
  bio: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  //private apiUrl = 'https://localhost:7081/api/Klient'; 
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/api/Klient/getClients`);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/api/Klient/addClient`, client);
  }

  editClient(client: Client): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/Klient/${client.id}`, client);
  }

  deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/Klient/${clientId}`);
  }

  private getToken(): string | null {
    return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
  }

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

}
