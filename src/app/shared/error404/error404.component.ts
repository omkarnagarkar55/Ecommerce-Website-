import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {
  errorMessage:string = "Error 404 : Page not Found . Please enter a valid address."
  constructor() { }

  ngOnInit(): void {
  }

}
