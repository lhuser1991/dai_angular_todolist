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
    {title:"Balayer le salon.",status:false},
    {title:"Faire la vaisselle.",status:false},
    {title:"Repasser ses habits.",status:false},
    {title:"Dépoussiérer les meubles.",status:false},
    {title:"Nettoyer la salle de bain.",status:false},
    {title:"Nettoyer les vitres et miroirs",status:false},
    {title:"Faire les course de la semaine.",status:false},
    {title:"Récupérer les enfants à l'école.",status:false}
  ]

  msg: string = "Tâche effectué.";

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
