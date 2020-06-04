import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.scss']
})
export class ViewitemComponent implements OnInit {
  
  id: number;
  private sub: any;
  item;

  constructor(
    private route: ActivatedRoute,
    private commonService:CommonService,
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.item=this.commonService.items[this.id]
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
