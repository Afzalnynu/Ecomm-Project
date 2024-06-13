import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private _router: Router) { }
  menuType: string = 'default'
  sellersName: any = ""
  ngOnInit() {
    this._router.events.subscribe((val: any) => {
      console.log(val.url)
      if (val.url) {
        console.log(val.url);
        if (localStorage.getItem('ecomm-project') && val.url.includes('seller')) {
          let sellerStore = localStorage.getItem('ecomm-project');
          console.log(sellerStore)
          this.sellersName = sellerStore
          this.menuType = 'seller'
        }
        else {
          this.menuType = 'default'
        }
      }
    })

  }

  logout() {

    localStorage.removeItem('ecomm-project')
    this._router.navigateByUrl('seller-home')
  }
}
