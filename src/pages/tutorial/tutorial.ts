import {Page, NavController, MenuController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';


interface Slide {
  title: string;
  description: string;
  image: string;
}

@Page({
  template: require('./tutorial.html')
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(private nav: NavController, private menu: MenuController) {
    this.slides = [
      {
        title: "Welcome to <b>ICA</b>",
        description: "The <b>Ionic Conference App</b> is a practical preview of the Ionic Framework in action, and a demonstration of proper code use.",
        image: require('../../img/ica-slidebox-img-1.png'),
      },
      {
        title: "What is Ionic?",
        description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
        image: require('../../img/ica-slidebox-img-2.png'),
      },
      {
        title: " What is Ionic Platform?",
        description: "The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        image: require('../../img/ica-slidebox-img-3.png'),
      }
    ];
  }

  startApp() {
    this.nav.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  onPageDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  onPageWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
