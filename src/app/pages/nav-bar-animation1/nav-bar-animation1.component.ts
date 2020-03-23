import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-animation1',
  templateUrl: './nav-bar-animation1.component.html',
  styleUrls: ['./nav-bar-animation1.component.scss']
})
export class NavBarAnimation1Component implements OnInit {

  constructor() { }

  ngOnInit(): void
  
  {
   const hambarger = document.getElementById('hambarger');
   const section = document.querySelector('section');
   hambarger.addEventListener('click',()=>
   {
     hambarger.classList.toggle('hide');
     section.classList.toggle('section');
   })


   const button = document.querySelector('img');
   button.addEventListener('click',()=>
   {
     hambarger.classList.toggle('hide')
     section.classList.toggle('section')
   })
  }

}
