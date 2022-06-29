import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';

  Dashboard = [
    {nome: 'D1'},
    {nome: 'D2'},
    {nome: 'D3'},
    {nome: 'D4'},
    {nome: 'D5'},
    {nome: 'D6'},
    {nome: 'D7'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
