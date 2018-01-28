import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @Input() title: String;
  @Input() item: any;

  @ViewChild("draggable") draggableElement: ElementRef;


  ngOnInit() {
    this.draggable = this.draggableElement.nativeElement;
  }

  pos1 = 0;
  pos2 = 0;
  draggable;
  isMouseDown = false;

  dragMouseDown(e: MouseEvent) {
    // get the mouse cursor position at startup:
    this.isMouseDown = true;
    this.pos2 = e.clientX;
  }

  elementDrag(e: MouseEvent) {
    // calculate the new cursor position:
    this.pos1 = this.pos2 - e.clientX;
    this.pos2 = e.clientX;
    // set the element's new position:
    if (this.isMouseDown) {
      this.renderer.setStyle(this.draggable, "left", this.draggable.offsetLeft - this.pos1 + "px");
    }
  }

  closeDragElement() {
    /* stop moving when mouse button is released:*/
    this.isMouseDown = false;
    document.onmouseup = null;
    document.onmousemove = null;
  }

}
