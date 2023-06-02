import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../list/interface';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent {
  @Input() allItems: Item[] = [{title:"",status:false}];
  @Output() updateItems: EventEmitter<Item[]> = new EventEmitter<Item[]>();

  deleteSelected = (): void => {

    let cdt: number = 0;
    while(cdt != 1) {
      let cdtA: number = 0;
      for(let i:number = 0 ; i<this.allItems.length ; i++) {
        if(this.allItems[i].status == true) {
          this.allItems.splice(i,1);
          break;
        }
        cdtA++;
      }
      if(cdtA == this.allItems.length) {
        cdt = 1;
      }

    }
    this.updateItems.emit(this.allItems);
  }
}
