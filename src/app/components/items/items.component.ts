import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(
    public commonService:CommonService,
    private router:Router
  ) { }

  ngOnInit(): void {
    
  }

  addItem(){
    this.router.navigate(['/additem']);
  }
  editItem(index){
    this.router.navigate(['/edititem',index]);
      }
  delete(index){
    this.commonService.items.splice(index,1)
  }
  view(index){
    this.router.navigate(['item',index]);
  }
}
