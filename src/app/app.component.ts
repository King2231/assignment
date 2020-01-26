import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ReadFundService } from './read-fund.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation:ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    title = 'assignment';
    
    funds=[];
    constructor(
        private _readFund:ReadFundService
    ){

    }
    ngOnInit(){
        this._readFund.readFund().subscribe(
            (data:any)=>{
                if(data.statusCode==200){
                    this.funds=data.result.funds;
                    console.log(this.funds)
                }
            }
        )
    }
}
