import { Component, OnInit, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})


export class DialogboxComponent implements OnInit {

  constructor() { }
  @Input() dialogData: any;
  @Input() closable = true;
  @Input() visible: boolean;
  // @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  ngOnInit() {
  }
  close() {
    this.visible = false;
    // this.visibleChange.emit(this.visible);
  }

} 

