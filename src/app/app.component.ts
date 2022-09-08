import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceOnComponentCommunication';

   data="Kiran";
   click: string="";
   dblclick: string="";
   mouseHover: string="";
   mouseLeave: string="";
   textBlurEvent: string="";
   text: string="";
   textSpace: string="";
   textEnter: string="";
  // data:string[] =[
  //   'Kiran',
  //   'Tarique',
  //   'Ram'
  // ]

  clickEvent(){
    this.click="This is a click Event";
  }

  dblclickEvent(){
    this.dblclick="This is a double click Event";
  }

  mouseEnterEvent(){
    this.mouseHover="This is a double click Event";
  }

  mouseLeaveEvent(){
    this.mouseLeave="This is a double click Event";
  }

  blurEvent(){
    this.textBlurEvent="Blur event Triggered"
  }

  onKeyUp(x:any){
    this.text += x.target.value + '|';
  }

  onTextSpace(y:any){
    this.textSpace += y.target.value + '|';
  }

  onEnter(y:any){
    this.textEnter += y.target.value + '|';
  }
}
