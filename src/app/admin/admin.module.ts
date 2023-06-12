import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { FarmersComponent } from './farmers/farmers.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { TownsComponent } from './towns/towns.component';
import { CropsComponent } from './crops/crops.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmerComponent } from './farmer/farmer.component';
import { RecommendationformComponent } from './recommendationform/recommendationform.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgApexchartsModule } from 'ng-apexcharts';
// import{SweetAlert2Module} from'@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AdminComponent,
    FarmersComponent,
    RecommendationsComponent,
    TownsComponent,
    CropsComponent,
    FarmerComponent,
    RecommendationformComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule,
    NgApexchartsModule,
    // SweetAlert2Module.forRoot()
  ]
})
export class AdminModule { }
