import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  title = "Learn. Love. Code."; 
  subtitle = "Insights on education and tech from Flatiron School’s passionate community of coders and creators";
  constructor() { }

  ngOnInit() {
  }

}
