import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  titleHeader = 'Header';
  @Input() subTitle: string = "";
 /* ngOnInit(){

  }*/

}
