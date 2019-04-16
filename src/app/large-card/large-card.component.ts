import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.sass']
})
export class LargeCardComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
