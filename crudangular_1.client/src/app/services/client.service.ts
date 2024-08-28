import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Client {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'https://localhost:7081/api/Klient'; 

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`https://localhost:7081/api/Klient/getClients`);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`https://localhost:7081/api/Klient/addClient`, client);
  }

  editClient(client: Client): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${client.id}`, client);
  }

  deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${clientId}`);
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
