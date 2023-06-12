import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminModule } from './admin.module';
import { adminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { FarmersComponent } from './farmers/farmers.component';
import { TownsComponent } from './towns/towns.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { CropsComponent } from './crops/crops.component';
import { FarmerComponent } from './farmer/farmer.component';
import { RecommendationformComponent } from './recommendationform/recommendationform.component';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';

const routes: Routes = [
  {path:"", canActivate:[adminGuard], component:LandingComponent,children:[
    {path:"dashboard",component:DashboardComponent},
    {path:"admins",component:LandingComponent},
     {path:"admin", component:AdminComponent},
     {path:"crops",component:CropsComponent},
     {path:"farmer", component:FarmerComponent},
    {path:"farmers", component:FarmersComponent},
    {path:"towns", component:TownsComponent},
    {path:"recommendations", component:RecommendationsComponent},
    {path:"modalpopup",component:ModalpopupComponent},
    {path:"recommendationform/:id",component:RecommendationformComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
