import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";


const URL = '../assets/Data/productos.json';
@Injectable({
    providedIn: "root"
})

export class ProductService {
    constructor(private http: HttpClient) {}
    getAll(){
        return this.http.get(URL)
    }
}