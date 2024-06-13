import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-communation',
  templateUrl: './communation.component.html',
  styleUrls: ['./communation.component.css']
})
export class CommunationComponent {
 parent:string ="";
 parentArray:any=[]

submit(){
 let data={"name":this.parent};
 this.parentArray.push(data);
 console.log(this.parentArray)
}

}
