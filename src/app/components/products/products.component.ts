import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private GetDataService:GetDataService , private router:Router) { }

  slidesStore = [];
  loading=true;

  sliderOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      },
      1140: {
        items: 7
      }
    },
    nav: false
  }

  ngOnInit() {
    this.GetDataService.getData()
    .subscribe(data => {
      console.log(data.data);
      this.loading=false;
      this.slidesStore = data.data;
    })
  }

  logout(){
    localStorage.removeItem('data');
    this.router.navigate(['/login']);
  }

}
