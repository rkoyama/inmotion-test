import { Component, OnInit } from '@angular/core';
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  background: ThemePalette = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
