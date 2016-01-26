System.register(['angular2/core', './services/person.service', 'angular2/http', './components/likebutton'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, person_service_1, http_1, likebutton_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (likebutton_1_1) {
                likebutton_1 = likebutton_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(ps, _http) {
                    this._http = _http;
                    this.message = "Version (with http)";
                    this.persons = ps.getPersons();
                }
                AppComponent.prototype.onSelect = function (person) {
                    this.selectedPerson = person;
                };
                AppComponent.prototype.makeHttpRequest = function () {
                    var _this = this;
                    this.loading = true;
                    this._http.request('http://jsonplaceholder.typicode.com/posts/1')
                        .subscribe(function (res) {
                        _this.data = res.json();
                        _this.loading = false;
                    });
                };
                AppComponent.prototype.LikeIt = function (numOfLikes) {
                    console.log('likes: ' + numOfLikes);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        providers: [person_service_1.PersonService, http_1.HTTP_PROVIDERS],
                        selector: 'my-app',
                        directives: [likebutton_1.LikeButton],
                        template: "\n    <h2>{{message}}</h2>\n    <like-btn (likeBtnClicked)=\"LikeIt($event)\" [counter]=\"100\"></like-btn>\n    <div *ngIf=\"selectedPerson\">\n    <input [(ngModel)]=\"selectedPerson.name\">\n    </div>\n    <div>\n    <ul>\n      <li *ngFor=\"#person of persons\" (click)=\"onSelect(person)\">{{person.name}}</li>\n    </ul>\n    </div>\n    <button type=\"button\" (click)=\"makeHttpRequest()\">Make Request</button>\n    <div *ngIf=\"loading\">Loading... please wait</div>\n    <pre> {{ data  | json }}</pre>\n    "
                    }), 
                    __metadata('design:paramtypes', [person_service_1.PersonService, http_1.Http])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map