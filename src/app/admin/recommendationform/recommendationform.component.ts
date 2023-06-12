import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalpopupComponent } from 'src/app/modalpopup/modalpopup.component';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-recommendationform',
  templateUrl: './recommendationform.component.html',
  styleUrls: ['./recommendationform.component.css']
})
export class RecommendationformComponent  implements OnInit{
  formdata:any;
  admins:any;
  id:any;
  farmer:any;
  farmerid:any;


  constructor(private api:ApiService , private route: ActivatedRoute , private matdialog:MatDialog){
      this.id = route.snapshot.paramMap.get("id")
  }
  
  ngOnInit(): void {
   
    
    this.api.get("api/farmers/" +this.id).subscribe((result:any)=>{
      this.farmer=result;
      
    })


    this.formdata = new FormGroup({
      id:new FormControl(0),
      name:new FormControl("",Validators.compose([Validators.required])),
      
    })
    
    this.load();

    // this.farmerid = this.route

    // this.api.get("api/farmers").subscribe((result:any)=>{
    //   this.farmers=result
    // })

  }
  OpenPop(){
  this.matdialog.open(ModalpopupComponent, {data:{id:this.id}});
  }
   load(){
    this.api.get("api/admins").subscribe((result:any)=>{
    })
    this.api.get("api/recommendations/"+this.id).subscribe((result:any)=>{
      this.admins=result;
      console.log(this.admins);
      

     })
   }
   save(data:any){
    if(this.id==null){
      this.api.post("api/Admins/farmer",data).subscribe((result:any)=>{
        this.load();
      })
    }
    else{
      this.api.put("api/Admins/"+this.id,data).subscribe((result:any)=>{
        this.load();
      })
    }
   }
  //  delete(id:number){
  //   if(confirm("sure to delete")){
  //     this.api.delete("api/admins/"+ id).subscribe((result:any)=>{
  //       console.log(result);
        
  //       this.load();
  //     })
  //   }

  //  }
  //  edit(id:number){
  //   this.id=id;
  //   if(this.id !=null){
  //     this.api.get("api/admins/" + this.id).subscribe((result:any)=>{
  //       this.formdata.patchValue({
  //         id:this.id,
  //         name:result.name,
  //         username:result.username,
  //         password:result.password,
  //       })
  //     })
  //   }
  //  }
}

