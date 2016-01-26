System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LikeButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LikeButton = (function () {
                function LikeButton() {
                    //private counter = 1;
                    this.likeBtnClicked = new core_1.EventEmitter();
                }
                LikeButton.prototype.like = function () {
                    this.counter++;
                    this.likeBtnClicked.emit(this.counter);
                };
                LikeButton = __decorate([
                    core_1.Component({
                        selector: 'like-btn',
                        outputs: ['likeBtnClicked'],
                        inputs: ['counter'],
                        template: "\n  <button (click)=\"like()\">LikeIT</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikeButton);
                return LikeButton;
            })();
            exports_1("LikeButton", LikeButton);
        }
    }
});
//# sourceMappingURL=likebutton.js.map