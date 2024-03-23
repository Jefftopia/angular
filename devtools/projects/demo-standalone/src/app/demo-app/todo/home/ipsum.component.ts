import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ipsum',
  standalone: true,
  styles: `
  .blocky {
    min-height: 250px;
    display: flex;
    width: 320px;
    background: azure;
    border: 2px solid purple;
  }
  `,
  template: `<div class="blocky">
          Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz 
          Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz 
          Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz 
          Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz 
          Lorum Ipsum foo bar baz Lorum Ipsum foo bar baz 
          Lorum Ipsum foo bar baz 
          Lorum Ipsum foo bar baz 

  </div>`,
})
export class IpsumComponent implements OnInit {
  ngOnInit() {
    console.log('IpsumComponent.ngOnInit');
  }
}
