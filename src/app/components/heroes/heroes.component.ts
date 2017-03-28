import { Component, OnInit } from '@angular/core';

import { HeroService } from './../../services/hero-service';

@Component({
    moduleId: module.id,
    selector: 'heroes',
    templateUrl: 'heroes.component.html',
    providers: [HeroService]
})

export class HeroesComponent {
    
}