import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})

export class SetUpService {
    URL = 'http://localhost/Parcial3/';

    constructor(private http: HttpClient) {}
    getAll(){
        return this.http.get(`${this.URL}getAll.php`);

    }
}