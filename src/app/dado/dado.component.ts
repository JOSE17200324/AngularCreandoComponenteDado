import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.scss']
})
export class DadoComponent implements OnInit {
  valor: number;
  constructor() { }

  ngOnInit(): void {
    this.valor = Math.trunc(Math.random()*6)+1;
  }

}
