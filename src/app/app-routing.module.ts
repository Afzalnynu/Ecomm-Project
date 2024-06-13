import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAuthGuardGuard } from './seller-auth-guard.guard';
import { CommunationComponent } from './communation/communation.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'',
  },
  {
    component:SellerComponent,
    path:'seller-page',
  
  },
  {
    component:SellerHomeComponent,
    canActivate:[SellerAuthGuardGuard],
    path:'seller-home',
  },
  {
    component:CommunationComponent,
    path:"parent"
  },
  {
    component:AddProductComponent,
    path:'seller-addProduct',
    canActivate:[SellerAuthGuardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
