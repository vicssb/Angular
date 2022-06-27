import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  title = 'Professores';

  professores = [
    {nome: 'P1'},
    {nome: 'P2'},
    {nome: 'P3'},
    {nome: 'P4'},
    {nome: 'P5'},
    {nome: 'P6'},
    {nome: 'P7'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
