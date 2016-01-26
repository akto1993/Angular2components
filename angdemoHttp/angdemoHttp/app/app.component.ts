import {Component} from 'angular2/core';
import {PersonService, Person} from './services/person.service'
import {HTTP_PROVIDERS, Http, Response} from 'angular2/http'
import{LikeButton} from './components/likebutton'

@Component({
    providers: [PersonService, HTTP_PROVIDERS],
    selector: 'my-app',
    directives:[LikeButton],
    template: `
    <h2>{{message}}</h2>
    <like-btn (likeBtnClicked)="LikeIt($event)" [counter]="100"></like-btn>
    <div *ngIf="selectedPerson">
    <input [(ngModel)]="selectedPerson.name">
    </div>
    <div>
    <ul>
      <li *ngFor="#person of persons" (click)="onSelect(person)">{{person.name}}</li>
    </ul>
    </div>
    <button type="button" (click)="makeHttpRequest()">Make Request</button>
    <div *ngIf="loading">Loading... please wait</div>
    <pre> {{ data  | json }}</pre>
    `
})
export class AppComponent {

    public loading: boolean;
    public data: Object;

    public persons;
    public message:string = "Version (with http)";

    public selectedPerson:Person;

    constructor(ps:PersonService, private _http:Http) {
        this.persons = ps.getPersons();
    }

    onSelect(person:Person) {
        this.selectedPerson = person;
    }

    makeHttpRequest(){
        this.loading = true;
        this._http.request('http://jsonplaceholder.typicode.com/posts/1')
        .subscribe((res: Response) => {
            this.data = res.json();
            this.loading = false;
        });

    }

    LikeIt(numOfLikes: number){
      console.log('likes: '+numOfLikes);
    }
}
