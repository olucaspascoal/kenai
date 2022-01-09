import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  horario: any;
  constructor() { }

  ngOnInit(): void {
    this.hora()
  }
  public hora() {
    const today=new Date();
    const h=today.getHours();
    const m=today.getMinutes();
    this.horario = (h+":"+m)
  }
}
