import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StringMap } from '@angular/core/src/render3/jit/compiler_facade_interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  shop$: Object;
  id$: number;
  type$: any;

  constructor(private data: DataService, private route: ActivatedRoute) { 
    console.log(this.route.params);
    this.route.params.subscribe( params => this.id$ = parseInt(params.id) - 1 )
    this.route.params.subscribe( params => this.type$ = params.type )
    console.log(this.id$, this.type$)
  }

  ngOnInit() {
    this.data.getData().subscribe(
      data => this.shop$ = data[0][this.type$]
    )
    
  }

}
