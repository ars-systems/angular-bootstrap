import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  items:[];

  constructor(private api:ApiService) { 
  }

  async showConfig() {
    await this.api.getConfig()
      .subscribe((results) =>{
        this.items = results["offerings"] ;
      })
  }
  
  ngOnInit() {
    this.showConfig()
  }

}
