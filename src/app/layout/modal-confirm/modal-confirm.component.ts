import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {
  modalManipulation? : Modal;
  @ViewChild('modalConfirm') modalConfirm? : ElementRef<any>;
  contentModal? : { title : string , content : string};
  confirmModalSub? : Subscription; 
  
  
  constructor(private modalService : ModalService) { 
    this.contentModal = {
      title : 'Default title',
      content : 'Default content...'
    }
  }

  ngOnInit(): void {
    this.confirmModalSub = this.modalService.confirmModalSub.subscribe(
      (objContentModal : { title : string , content : string}) => {
        this.contentModal = objContentModal;
        this.showModal();
      }
    )
  }

  ngAfterViewInit(): void {
    console.log('VIewInit');
    this.modalManipulation = new Modal(this.modalConfirm?.nativeElement, {});
  }

  showModal(): void {
    this.modalManipulation?.show();
    setTimeout(() => {
      this.closeModal();
    }, 3000);
  }
  
  closeModal() {
    this.modalManipulation?.hide();
  }

  onClick(response : boolean) {
    this.modalService.confirmModalSubResponse.next(response);
    this.closeModal();
  }

}
