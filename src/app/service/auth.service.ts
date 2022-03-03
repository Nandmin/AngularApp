import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl= `${this.config.apiUrl}login`;

  constructor(
    private config:ConfigService,
    private http: HttpClientModule
  ) { }
}
