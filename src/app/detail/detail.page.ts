import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  name: string;
  powerstats: string;
  images: ImageData;
  appearance: string;
  biography: string;
  constructor(public navCtrl: NavController,public actroute: ActivatedRoute) { }

  ngOnInit() {
    const data = this.actroute.snapshot.paramMap.get('getdata')
    let hero = JSON.parse(data)
    // console.log(hero);
    this.name = hero['name']
    this.powerstats = hero['powerstats']
    this.images = hero['images']
    this.appearance = hero['appearance']
    this.biography = hero['biography']
    console.log(this.appearance)

  }

}
