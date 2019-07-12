import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  selectedAnimation: any = "interactive";
  animations: any;
  interactive = false;
  anim: any;
  animationSpeed: number = 1;

  interactiveAnimationOption = {
    loop: true,
    prerender: false,
    autoplay: false,
    autoloadSegments: false,
    path: 'assets/animations/other/jake.json'
  }

  lottieAnimations = [
    {
      path: 'assets/animations/lottie/Watermelon.json'
    }, {
      path: 'assets/animations/lottie/MotionCorpse-Jrcanest.json'
    }, {
      path: 'assets/animations/lottie/TwitterHeart.json'
    }, {
      path: 'assets/animations/lottie/LottieLogo1.json'
    }, {
      path: 'assets/animations/lottie/LottieWalkthrough.json'
    }, {
      path: 'assets/animations/lottie/LottieLogo2.json'
    }, {
      path: 'assets/animations/lottie/9squares-AlBoardman.json'
    }
  ];

  bodymovinAnimations = [
    {
      path: 'assets/animations/bodymovin/gatin.json'
    }, {
      path: 'assets/animations/bodymovin/adrock.json'
    }, {
      path: 'assets/animations/bodymovin/happy2016.json'
    }, {
      path: 'assets/animations/bodymovin/navidad.json'
    }, {
      path: 'assets/animations/bodymovin/bodymovin.json'
    },
  ]

  otherAnimations = [
    {
      path: 'assets/data/check.json'
    },
    {
      path: 'assets/data/rocket.json'
    },
    {
      path: 'assets/data/data.json'
    },
    {
      path: 'assets/data/data1.json'
    },
    {
      path: 'assets/data/data2.json'
    },
    {
      path: 'assets/animations/other/tibetan-monk.json'
    },
    {
      path: 'assets/animations/other/bobber.json'
    }
  ]

  constructor(public navCtrl: NavController) {
    this.changeAnimations();
  }

  handleAnimation(anim) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed() {
    this.anim.setSpeed(this.animationSpeed);
  }

  animate() {
    this.anim.playSegments([[27, 142], [14, 26]], true);
  }

  changeAnimations() {
    this.interactive = false;
    switch (this.selectedAnimation) {
      case "lottie":
        this.animations = this.lottieAnimations;
        break;
      case "bodymovin":
        this.animations = this.bodymovinAnimations;
        break;
      case "other":
        this.animations = this.otherAnimations;
        break;
      case "interactive":
        this.interactive = true;
        break;
    }
  }

}
