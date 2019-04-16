import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {

  public tabList:{}[] = [
    {
      name:"Dashboard",
      href:"#",
      active: true
    },
    {
      name:"Offerings",
      href:"#",
      active: false
    },
    {
      name:"Transactions",
      href:"#",
      active: false
    },
    {
      name:"Settings",
      href:"#",
      active: false
    },
    {
      name:"Value",
      href:"#",
      active: true
    }
  ]

  constructor() { 
  }

  data(){
    return this.tabList
  }

  ngOnInit() {
  }

}
