import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})
export class CropsComponent implements OnInit {

  formdata:any;
  admin:any;
  id:any;

  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.formdata = new FormGroup({
      id:new FormControl(0),
      name:new FormControl("",Validators.compose([Validators.required])),
      username:new FormControl("",Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required])),
    })
    
    this.load();

  }
   load(){
    this.api.get("api/crops").subscribe((result:any)=>{
      this.admin=result
    })
   }
   save(data:any){
    if(this.id==null){
      this.api.post("api/crops",data).subscribe((result:any)=>{
        this.load();
      })
    }
    else{
      this.api.put("api/crops"+this.id,data).subscribe((result:any)=>{
        this.load();
      })
    }
   }
   delete(id:number){
    if(confirm("sure to delete")){
      this.api.delete("api/crops"+ id).subscribe((result:any)=>{
        console.log(result);
        
        this.load();
      })
    }

   }
   edit(id:number){
    this.id=id;
    if(this.id !=null){
      this.api.get("api/crops" + this.id).subscribe((result:any)=>{
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


