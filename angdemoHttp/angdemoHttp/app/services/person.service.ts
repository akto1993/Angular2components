import {Injectable} from 'angular2/core'

export interface Person {
    id: number;
    name: string
}

var MyPersons:Person[] = [
    {"id": 1, "name": "Bolek"},
    {"id": 2, "name": "Lolek"},
    {"id": 3, "name": "Tola"}];

@Injectable()
export class PersonService {
    getPersons(){
        return MyPersons;
    }
}