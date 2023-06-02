import { Component } from '@angular/core';
import { Item } from './interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  item : Item = {title:"",status:false};

  listItem: Item[] = [
    {title:"item1",status:false},
    {title:"item2",status:false},
    {title:"item3",status:false},
    {title:"item4",status:false},
    {title:"item5",status:false},
    {title:"item6",status:false},
    {title:"item7",status:false},
    {title:"item8",status:false}
  ]

  addNewItem(newItem: string){
    this.item = {title:newItem,status: false};
    // this.item.title = newItem;
    this.listItem.push(this.item);
  }

  updateItem = (index: number, selected: boolean) : void => {
    this.listItem[index].status = selected;
    // this.listItem[index] = {title:this.listItem[index].title, status:selected};
  }

  methodeA = (itemList: Item[]) : void => {
    // for(let i: number = 0 ; i<this.listItem.length ; i++) {
    //   itemList.push(this.listItem[i]);
    // }

    // itemList =  this.listItem;

    this.listItem = itemList;
  }

}
