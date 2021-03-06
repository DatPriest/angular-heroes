import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = HEROES;
  selectedHero?: Hero;
  constructor() { }
  hero : Hero = {
    id : 1,
    name : "Windstorm"
  }
  ngOnInit(): void {
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }
}
