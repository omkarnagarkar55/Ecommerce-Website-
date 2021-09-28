import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-star',
    template: `<div *ngIf="rating" style ="cursor: pointer;">
        <p style ="display:inline;" (click)="displayRating()" 
        *ngFor = "let i of counter(rating)" > <span class="fa fa-star checked"></span></p>
        <p *ngIf ="rt">{{rating}}</p>
     </div> `,
    styles:[`.checked{
        color: orange;
    }`]
})

export class StarComponent{
    @Input() rating:number

    flag:boolean = false

    rt:boolean = false

    counter(i: number) {
        return new Array(i);
    }

    displayRating(){
        this.rt = true
    }
}