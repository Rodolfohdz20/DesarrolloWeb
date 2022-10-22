import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";


const URL = '../assets/Data/productosSetUp.json';
@Injectable({
    providedIn: "root"
})

export class SetUpService {
    constructor(private http: HttpClient) {}
    getAll(){
        return this.http.get(URL)
    }
}