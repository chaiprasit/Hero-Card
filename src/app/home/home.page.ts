import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  limit: number = 20;

  loadData(infiniteScroll) {
    setTimeout(()=>{
      this.limit += 20;
      infiniteScroll.target.complete();
    },500);
  }



  constructor(public router: Router)
  { }




  ngOnInit() {
    fetch('./assets/data/herodata.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }

  viewDetails(items: any) {
    let datadetail = JSON.stringify(items);
    this.router.navigate(["detail", datadetail]);
  }


}
