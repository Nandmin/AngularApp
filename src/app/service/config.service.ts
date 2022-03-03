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

  constructor() { }
}
