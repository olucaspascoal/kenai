import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public principal=[
    {
      nome: 'Batman',
      dia: '12/12/2021',
      star: 5,
      tempo: '1h 57m',
      tipo: 'Ação'
    }
  ];

  public filmes = [
    {
      nome: 'Batman',
      dia: '12/12/2021',
      star: 5,
      tempo: '1h 57m',
      tipo: 'Ação' 
    }
  ]

  constructor() { }
  ngOnInit(): void {
  }

}
