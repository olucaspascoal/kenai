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
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    this.horario = (h+":"+m)
  }
}
