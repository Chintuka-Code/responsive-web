import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  im() {
    const img = document.querySelector('img')
    const section = document.querySelector('section');
    const heading = document.querySelector('h1');

    img.classList.toggle('img-ani')
    section.classList.toggle('bg-animation1');
    heading.classList.toggle('h1-color1')
  }

  ngOnInit(): void {

    const div = document.querySelector('div')
    const section = document.querySelector('section');
    const heading = document.querySelector('h1');
    
    div.addEventListener('mouseover', () => {
      div.classList.toggle('image-animate');
      section.classList.toggle('bg-animation');
      heading.classList.toggle('h1-color')
      setTimeout(() => {
        this.im();
      }, 2000);
    })

  }
}
