import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animationCtrl: AnimationController) {

    const animation: Animation = this.animationCtrl.create()
    .addElement(document.getElementById("socialLinkContainer"))
    .duration(10000)
    .fromTo('opacity', '0', '1');
  }

}
