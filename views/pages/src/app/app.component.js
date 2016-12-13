"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by user on 2016/12/6.
 */
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = [
            new hero_1.Hero(1, 'Carl'),
            new hero_1.Hero(13, 'Fed'),
            new hero_1.Hero(20, 'Jiang'),
            new hero_1.Hero(30, 'Gui'),
        ];
        this.myHero = this.heroes[3];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My favorite hero is: {{myHero.name}}</h2>\n    <p>Heroes:</p>\n    <ul>\n        <li *ngFor=\"let hero of heroes\">\n            {{hero.name}}\n        </li>\n    </ul>\n    <p *ngIf=\"heroes.length > 3\">There are many heroes!</p>\n    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map