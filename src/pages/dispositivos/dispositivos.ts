import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

/**
 * Generated class for the DispositivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@Component({
  selector: 'page-dispositivos',
  templateUrl: 'dispositivos.html',
})
export class DispositivosPage {

  public dispositivo:any;
  public items:any;
  public callback;



  constructor(public navCtrl: NavController, public navParams: NavParams, public bluetoothSerial: BluetoothSerial) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad DispositivosPage');

    this.navCtrl.getPrevious().data.parametros = null;
    this.bluetoothSerial.list().then(
      success => {
              this.items = success;
          }
        );
  }


  conectar(item:any){
      // Le enviamos el parametro a la pagina anterior.
       this.navCtrl.getPrevious().data.parametros = {"tipo" : "dispositivo", "dispositivo" : item};
       this.navCtrl.pop();
  }

}
