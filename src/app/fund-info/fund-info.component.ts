import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fund-info',
  templateUrl: './fund-info.component.html',
  styleUrls: ['./fund-info.component.scss']
})
export class FundInfoComponent implements OnInit {
    @Input() fund;
    showInfo=false;
    constructor() { }

    ngOnInit() {
    }

}
