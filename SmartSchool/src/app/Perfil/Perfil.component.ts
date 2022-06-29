import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Perfil',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.css']
})
export class PerfilComponent implements OnInit {

  title = 'Perfil';

  Perfil = [
    {nome: 'Pf1'},
    {nome: 'Pf2'},
    {nome: 'Pf3'},
    {nome: 'Pf4'},
    {nome: 'Pf5'},
    {nome: 'Pf6'},
    {nome: 'Pf7'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
