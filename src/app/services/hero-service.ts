import { Injectable } from '@angular/core';

import { MockHeroes } from './../components/mock-heroes/mock-heroes.component';

@Injectable()

export class HeroService{
    getHeroes(){ return MockHeroes; }
}