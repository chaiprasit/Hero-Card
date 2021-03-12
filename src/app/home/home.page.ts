import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  dummyList: any;

  data: any;
  limit: number = 5;


  loadData(infiniteScroll) {
    setTimeout(()=>{
      this.limit += 5;
      infiniteScroll.target.complete();
    },500);
  }


  logScrollStart(event) {
    console.log("logScrollStart : When Scroll Starts", event);
  }

  logScrolling(event) {
    console.log("logScrolling : When Scrolling", event);
  }

  logScrollEnd(event) {
    console.log("logScrollEnd : When Scroll Ends", event);
  }

  ScrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  ScrollToTop() {
    this.content.scrollToTop(2000);
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
