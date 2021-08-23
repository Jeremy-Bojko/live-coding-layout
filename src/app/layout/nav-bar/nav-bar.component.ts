import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FeaturesService } from 'src/app/services/features.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  modalSub? : Subscription;

  constructor(
    private featuresService: FeaturesService,
    private authService: AuthService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  onClickAddFeature() {
    this.featuresService.addFeature();
  }

  onClickShowModal() {
    this.featuresService.showModalAddfeatureSubject.next(true);
  }
  onClickShowModalTest() {
    this.modalService.confirmModalSub.next({ title : 'Ok Coco', content : 'Cliquez sur Oui ou non svp !'})
    this.modalSub = this.modalService.confirmModalSubResponse.subscribe(
      (response : boolean) => {
        if(response) {
          // Si oui j'envoie mon delete 
        }
        // si non je ne fais rien 
        this.modalService.alertModalSub.next({ title : 'Modal info', content : `La reponse à la précédente Modal était ${response ? 'Oui': 'Non'}`})
        this.modalSub?.unsubscribe();
      }
    )
  }

  onClickLogout() {
    this.authService.logout();
  }

}
