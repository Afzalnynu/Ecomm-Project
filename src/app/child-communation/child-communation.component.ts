import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-communation',
  templateUrl: './child-communation.component.html',
  styleUrls: ['./child-communation.component.css']
})
export class ChildCommunationComponent {
@Input() public child:string= ""
}
