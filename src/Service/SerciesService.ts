import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})

export class ServicesService {
    url = "http://localhost/Parcial3/"
    constructor(private http: HttpClient) {}
    getAll():Observable<any>{
       /* return this.http.get<any>(this.url)*/
       return this.http.get(`${this.url}getAll.php`);
    }
}