import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../list/interface';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent {
  @Input() allItems: Item[] = [{title:"",status:false}];
  @Output() updateItems: EventEmitter<Item[]> = new EventEmitter<Item[]>();

  selectAll = () : void => {
    for(let i: number = 0 ; i<this.allItems.length ; i++) {
      this.allItems[i].status = true;
    }
    this.updateItems.emit(this.allItems);
  }

  unselectAll = () : void => {
    for(let i: number = 0 ; i<this.allItems.length ; i++) {
      this.allItems[i].status = false;
    }
    this.updateItems.emit(this.allItems);
  }
}
