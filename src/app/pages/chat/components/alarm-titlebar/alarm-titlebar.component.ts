import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alarm-titlebar',
  templateUrl: './alarm-titlebar.component.html',
  styleUrls: ['./alarm-titlebar.component.scss']
})
export class AlarmTitlebarComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
