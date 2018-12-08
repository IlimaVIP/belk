import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {

  bags$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => this.bags$ = data
    )
  }

}
