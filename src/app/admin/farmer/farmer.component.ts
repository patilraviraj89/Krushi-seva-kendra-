import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  
  formdata:any;
  admin:any;
  id:any;
  towns:any;
  snapshot:any
  farmer:any

  constructor(private api:ApiService,private router:Router,private route: ActivatedRoute)
  {  
    
   
    // let id: any = router.snapshot.params
  }
  
  ngOnInit(): void {


    this.formdata = new FormGroup({
      id:new FormControl(0),
      name:new FormControl("",Validators.compose([Validators.required])),
      mobileno:new FormControl("",Validators.compose([Validators.required])),
      townid:new FormControl(0,Validators.compose([Validators.required])),
      town:new FormControl(0,Validators.compose([Validators.required])),
      
    })

    this.api.get("api/towns").subscribe((result:any)=>{
      this.towns=result
      console.log(this.towns);
      
    })
  }

  save(data:any){
    if(this.id==null){
      this.api.post("api/farmers",data).subscribe((result:any)=>{
       this.router.navigate(['/admin/farmers']);
      })
    }
  }
}
  
