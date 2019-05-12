import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {Todo} from 'src/app/interfaces/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() checkedItem =new EventEmitter();
  @Output() dblclickItem	=new EventEmitter();
  //@Output() blurItem		=new EventEmitter();
 // @Output() enterItem		=new EventEmitter();
  @Output() cancelItem	=new EventEmitter();
  @Output() deleteItem	=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doneEdit(todo:Todo): void{
    this.checkedItem.emit(todo);
  }

  editTodo(todo: Todo): void {
    this.dblclickItem.emit(todo);
  }

  cancelEdit(todo: Todo): void {
    this.cancelItem.emit(todo);
  }

  deleteTodo(todo: Todo): void {
    this.deleteItem.emit(todo);
  }

}
