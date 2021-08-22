import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  alertModalSub = new Subject<{ title : string , content : string}>();
  confirmModalSub = new Subject<{ title : string , content : string}>();
  confirmModalSubResponse = new Subject<boolean>();
  constructor() { }

}
