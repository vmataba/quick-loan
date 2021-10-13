import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{

  title = 'Quick Loan'

  loadWidth(navBar: HTMLElement){
    return navBar.style.width
  }

}
