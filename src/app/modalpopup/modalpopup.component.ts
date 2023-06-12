import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent  implements OnInit{
  form:any;
  id:any;
  farmer:any;
  crop:any;
  admin:any;
  recommndations:any;

  constructor(private api:ApiService ,private router:Router,private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any){
    console.log(data);
    

  }
  getSelectedValue(event:any){
  
    // Prints selected value
    console.log(event.target.value);
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      id:new FormControl(0),
      rdate:new FormControl("",Validators.compose([Validators.required])),
      farmersid:new FormControl(parseInt(this.data.id),Validators.compose([Validators.required])),
      cropsid:new FormControl(1,Validators.compose([Validators.required])),
      adminid:new FormControl(parseInt(localStorage.getItem("userid") || '0'),Validators.compose([Validators.required])),
      message:new FormControl("",Validators.compose([Validators.required])),
    
  })
 
  }

  load(){
    this.api.get("api/farmers").subscribe((result:any)=>{
      this.farmer=result
    })
    this.api.get("api/crops").subscribe((result:any)=>{
      this.crop=result;
    })
    this.api.get("api/admin").subscribe((result:any)=>{
      this.admin=result;
    })
    this.api.get("api/recommendations").subscribe((result:any)=>{
      this.recommndations=result;
      console.log(this.recommndations);
      
    })
   }


  save(data:any){
    console.log(data);
    
    if(this.id==null){
      this.api.post("api/recommendations",data).subscribe((result:any)=>{
       
       
      })
    }

    // this.router.navigate(['/admin/recommendationform']);
      // this.api.post("api/recommendations",data).subscribe((result:any)=>{
      //  console.log(result);
        
      //  this.router.navigate(['/admin/recommendations']);
      // })
    
  }
}

