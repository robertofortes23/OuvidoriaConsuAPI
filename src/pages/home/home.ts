import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer} from '@ionic-native/email-composer'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  subject='Ouvidoria Cas_Aos';
  body='';
  to='armstrongteresina@gmail.com';
  constructor(private emailComposer: EmailComposer, public navCtrl: NavController,) {
  }

  enviaEmail(){
    let email ={
      to: this.to,
      cc:[],
      bcc:[],
      attachment:[],
      subject: this.subject,
      body: this.body,
      isHtml: false,
      app:"Gmail"
    }
    this.emailComposer.open(email);
  }

   
}
