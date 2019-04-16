import { Component, ElementRef, Renderer2, Inject } from '@angular/core';
import { INavBar } from '../navigation';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent extends TabsComponent{

  public tabs:{}[]

  public navBar:INavBar[] = [
    { icon: "question-circle", cssClass: "" },
    { icon: "bell", cssClass: "" },
    { icon: "envelope", cssClass: "" },
    { icon: "user-circle", name: "James Tortis", cssClass: "", submenu: [
      { icon: "bell", name: "Profile" },
      { icon: "question-circle", name: "Settings" },
      { icon: "envelope", name: "Exit" },
    ]},
  ]
  
  public conteiner: ElementRef;
  
  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    super()
    this.conteiner = elementRef;
  }

  toggle(){
    let button = this.conteiner.nativeElement.querySelectorAll('button')
    let dropDown = this.conteiner.nativeElement.querySelectorAll('.navbar-collapse')

    button[0].addEventListener('click', ()=>{
      dropDown[0].classList.remove("show")
    })  
    button[1].addEventListener('click', ()=>{
      dropDown[1].classList.remove("show")
    })  
  }
  
  ngOnInit() {
    this.tabs = this.tabList
  }

}

