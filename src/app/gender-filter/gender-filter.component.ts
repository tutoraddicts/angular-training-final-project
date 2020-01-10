import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gender-filter',
  templateUrl: './gender-filter.component.html',
  styleUrls: ['./gender-filter.component.css']
})
export class GenderFilterComponent  {

  @Output() public childEvent = new EventEmitter();
  public genderType : string = "";
    check() : void {
      this.childEvent.emit(this.genderType);
      console.log(this.genderType);
    }

 }
