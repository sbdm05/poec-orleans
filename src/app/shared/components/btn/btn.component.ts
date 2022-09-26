import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() label!: string;
  @Input() route!: string;
  @Input() styleBtn!: string;// ici c'est la classe btn btn-primary

  constructor() {
    console.log(this.label) // ?? undefined
  }

  ngOnInit(): void {}
}
