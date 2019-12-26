import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name=''; 
  message='';
  disabled=false
  constructor(public navCtrl: NavController, public http: HttpClient) {
  }
  
  enviaEmail(){
    this.disabled=true
    this.http.post("http://172.17.0.1:8001/api/sendemail/send",{name:this.name, message:this.message})
    .toPromise()
    .then(res=>console.log(res))
    .catch(erro=>console.log(erro))
    
  }
}
