import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {

  code;
  pname;
  qty;

  constructor(
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.commonService.items.push({ code: this.code, name: this.pname, qty: this.qty });
    this.router.navigate(['/itemdashboard']);
  }
  
}
