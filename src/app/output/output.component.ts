import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit{


  name: string=''
  parentData=''
  constructor(){}
  ngOnInit(): void {

  }

  transferData():void{

   this.parentData=this.name

  }
}
