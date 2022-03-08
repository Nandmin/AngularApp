import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  //ide jönnek az authentikációs kérések
  apiUrl = `http://localhost:3000/`
  //menu items
  navigation: { label: string, href: string, role: number}[] = [
    { label: 'Home', href: '', role: 1 },
    { label: 'Users', href: '/users', role: 2 }
  ];

  userColumns: { key: string, label: string}[] = [
    {key: 'id', label: '#'},
    {key: 'first_name', label: 'First Name'},
    {key: 'last_name', label: 'Last Name'},
    {key: 'email', label: 'Email'},
    {key: 'role', label: 'Role'},
  ]

  constructor() { }
}
