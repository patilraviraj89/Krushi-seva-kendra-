import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {

  formdata:any;
  farmers:any;
  id:any;

  constructor(private api:ApiService , private route: ActivatedRoute){
      // let id: any = route.snapshot.params
  }
  ngOnInit(): void {
    this.formdata = new FormGroup({
      id:new FormControl(0),
      name:new FormControl("",Validators.compose([Validators.required])),
      
    })
    
    this.load();

  }
   load(){
    this.api.get("api/farmers").subscribe((result:any)=>{
      this.farmers=result
    })
   }
   save(data:any){
    if(this.id==null){
      this.api.post("api/Admins/farmers",data).subscribe((result:any)=>{
        this.load();
      })
    }
    else{
      this.api.put("api/Admins/"+this.id,data).subscribe((result:any)=>{
        this.load();
      })
    }
   }
   delete(id:number){
    if(confirm("sure to delete")){
      this.api.delete("api/admins/farmers"+ id).subscribe((result:any)=>{
        console.log(result);
        
        this.load();
      })
    }

   }
   edit(id:number){
    this.id=id;
    if(this.id !=null){
      this.api.get("api/admins/farmers" + this.id).subscribe((result:any)=>{
        this.formdata.patchValue({
          id:this.id,
          name:result.name,
          username:result.username,
          password:result.password,
        })
      })
    }
   }
}
