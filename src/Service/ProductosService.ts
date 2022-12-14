import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";


const URL = 'http://localhost/Parcial3/getAll.php';
@Injectable({
    providedIn: "root"
})

export class ProductService {
    constructor(private http: HttpClient) {}
    getAll(){
        return this.http.get(URL)
    }
}