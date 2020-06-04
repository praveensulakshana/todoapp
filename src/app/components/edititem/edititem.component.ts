import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.scss']
})
export class EdititemComponent implements OnInit {

  id: number;
  private sub: any;
  item;

  constructor(
    private route: ActivatedRoute,
    private commonService:CommonService,
    private router: Router
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

  save() {
    // this.commonService.items.push({ code: this.code, name: this.pname, qty: this.qty });
    this.router.navigate(['/itemdashboard']);
  }
}
