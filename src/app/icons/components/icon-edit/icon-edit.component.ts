import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.scss'],
})
export class IconEditComponent implements OnInit {
  myIcon = faEdit;

  constructor() {}

  ngOnInit(): void {}
}
