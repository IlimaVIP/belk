import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.scss']
})
export class JewelryComponent implements OnInit {

  jewelry$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => this.jewelry$ = data
    )
  }

}


// .pipe(
//   tap(u => this.user = u),
//   flatMap(u => this.userService.getPreferences(u.username))
// ).subscribe(p => this.preferences = p);