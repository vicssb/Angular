import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  title = 'Alunos';

  alunos = [
    {nome: 'AAA'},
    {nome: 'BBB'},
    {nome: 'CCC'},
    {nome: 'DDD'},
    {nome: 'EEE'},
    {nome: 'FFF'},
    {nome: 'GGG'},
  ];

  constructor() { }

  ngOnInit()  {
  }

}
