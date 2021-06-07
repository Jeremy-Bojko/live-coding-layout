import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private featuresService: FeaturesService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onClickAddFeature() {
    this.featuresService.addFeature();
  }

  onClickLogout() {
    this.authService.logout();
  }

}
