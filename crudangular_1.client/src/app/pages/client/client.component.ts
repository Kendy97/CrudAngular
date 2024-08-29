import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';

import { Observable } from 'rxjs';

interface Client {
  id: number;
  name: string;
  email: string;
  bio: string;
}

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  constructor(private clientService: ClientService) { }


  clients: Client[] = [];
  newClient: Client = { id: 0, name: '', email: '', bio: '' };
  state: string = 'List';
  ngOnInit(): void {
    this.getClients();
  }


  toggleAdd() {
    this.state = 'Add'
  }
  toggleEdit() {
    this.state = 'Edit'
  }
  toggleList() {
    this.state = 'List'
  }

  getClients(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients);
  }

  addClient(): void {
    if (this.newClient.name && this.newClient.email && this.newClient.bio) {
      this.clientService.addClient(this.newClient)
        .subscribe(client => {
          this.clients.push(client);
          this.newClient = { id: 0, name: '', email: '', bio: '' };
        });
    }
  }

  deleteClient(clientId: number): void {
    this.clientService.deleteClient(clientId)
      .subscribe(() => {
        this.clients = this.clients.filter(client => client.id !== clientId);
      });
  }

  editClient(client: Client): void {
    this.clientService.editClient(client)
      .subscribe(() => {
        const index = this.clients.findIndex(c => c.id === client.id);
        if (index !== -1) {
          this.clients[index] = { ...client };
        }
      });
  }



}
