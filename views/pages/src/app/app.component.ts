/**
 * Created by user on 2016/12/6.
 */
import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector:'',
    template:`
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
        <li *ngFor="let hero of heroes">
            {{hero.name}}
        </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    `
})


export class AppComponent{
    title = 'Tour of Heroes';
    heroes = [
        new Hero(1,'Carl'),
        new Hero(13,'Fed'),
        new Hero(20,'Jiang'),
        new Hero(30,'Gui'),
    ];
    myHero = this.heroes[3];
}