import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navigation = this.config.navigation;

  // first import configservive
  constructor(
    private config:ConfigService
  ) { }

  ngOnInit(): void {
  }

}