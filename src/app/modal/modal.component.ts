import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input() image: any;
  @Output() closeModel = new EventEmitter<void>();
  
  onClose() {
    this.closeModel.emit();
  };

  ngOnInit(): void {
  }

}
