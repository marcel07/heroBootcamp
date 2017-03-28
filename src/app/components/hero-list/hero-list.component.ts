import { Component, OnInit } from '@angular/core';

import { Hero } from './../hero/hero';
import { HeroService } from './../../services/hero-service'

@Component({
    moduleId: module.id,
    selector: 'hero-list',
    templateUrl: 'hero-list.component.html'
})

export class HeroListComponent {
    heroes: Hero[];
    showHeroes: boolean = false;
    
    constructor(heroService: HeroService){
        this.heroes = heroService.getHeroes();
    }

    toggleHeroes(){
        if(this.showHeroes){
            this.showHeroes = false;
        } else {
            this.showHeroes = true;
        }
    }

    addHero(name) {
        this.heroes.push(name)
    }
}