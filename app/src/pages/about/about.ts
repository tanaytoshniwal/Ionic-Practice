import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  users = [{name: 'User 1', text: 'this is sample text'},
           {name: 'User 2', text: 'this is sample text'},
           {name: 'User 3', text: 'this is sample text'},
           {name: 'User 4', text: 'this is sample text'},
           {name: 'User 5', text: 'this is sample text'},
           {name: 'User 6', text: 'this is sample text'},
           {name: 'User 7', text: 'this is sample text'},
           {name: 'User 8', text: 'this is sample text'},
           {name: 'User 9', text: 'this is sample text'},
           {name: 'User 10', text: 'this is sample text'},
           {name: 'User 12', text: 'this is sample text'},
           {name: 'User 13', text: 'this is sample text'},
           {name: 'User 14', text: 'this is sample text'},
           {name: 'User 15', text: 'this is sample text'},
           {name: 'User 16', text: 'this is sample text'},
           {name: 'User 17', text: 'this is sample text'},
           {name: 'User 18', text: 'this is sample text'},
           {name: 'User 19', text: 'this is sample text'},
           {name: 'User 20', text: 'this is sample text'}];

  constructor(public navCtrl: NavController) {

  }

}
