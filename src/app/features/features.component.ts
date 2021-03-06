import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Feature } from '../models/feature.model';
import { FeaturesService } from '../services/features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit, OnDestroy {
  dataFeature? : Feature[];
  featureSubscription? : Subscription;

  constructor(
    private featuresService : FeaturesService
  ) { }

  ngOnInit(): void {
    // this.dataFeature = this.featuresService.features.slice();
    // console.log(this.dataFeature);

    // this.featureSubscription = this.featuresService.featureSubject.subscribe(
    //   (features: any[]) => {
    //     this.dataFeature = features;
    //   }
    // )

    this.featureSubscription  = this.featuresService.stuffObject$.subscribe(
      (listFeature: Feature[] ) => { 
        this.dataFeature = [...listFeature];
      }
    )
    this.featuresService.getFeature()
  }

  ngOnDestroy() {
    this.featureSubscription?.unsubscribe();
    console.log('Destroy component feature');
  }

}
