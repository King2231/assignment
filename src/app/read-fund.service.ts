import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReadFundService {

    constructor(
        private http:HttpClient
    ) { }

    readFund(){
        return this.http.get('assets/funds.json')
    }
}
