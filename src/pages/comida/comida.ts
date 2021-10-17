import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

/**
 * Generated class for the ComidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-comida',
  templateUrl: 'comida.html',
})
export class ComidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public hora_1:Date;
  public hora_2:Date;
  public hora_3:Date;
  public hora_4:Date;
  public hora_5:Date;
  public hora_6:Date;
  public bluetoothSerial:BluetoothSerial;
  public dispositivo:any;

  public limpiar(i:any){

    switch(i) {
       case 1: {
          this.hora_1 = null;
          break;
       }
       case 2: {
          this.hora_2 = null;
          break;
       }

       case 3: {
          this.hora_3 = null;
          break;
       }
       case 4: {
          this.hora_4 = null;
          break;
       }

       case 5: {
          this.hora_5 = null;
          break;
       }



       default: {
          //statements;
          break;
       }
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidaPage');
    this.navCtrl.getPrevious().data.parametros = null;

    this.bluetoothSerial = this.navParams.get("bluetoothSerial");
    var dispositivo:any = this.navParams.get("dispositivo");

    this.hora_1 = dispositivo.comida.hora_1;
    this.hora_2 = dispositivo.comida.hora_2;
    this.hora_3 = dispositivo.comida.hora_3;
    this.hora_4 = dispositivo.comida.hora_4;
    this.hora_5 = dispositivo.comida.hora_5;
    this.hora_6 = dispositivo.comida.hora_6;

  }

  guardar(){
    var codigo:string = "";

    if(!this.hora_1){
      codigo += String.fromCharCode(this.hora_1.getHours());
      codigo += String.fromCharCode(this.hora_1.getMinutes());
    }else{
      codigo += String.fromCharCode(30);
      codigo += String.fromCharCode(0);
    }


    if(!this.hora_2){
      codigo += String.fromCharCode(this.hora_2.getHours());
      codigo += String.fromCharCode(this.hora_2.getMinutes());
    }else{
      codigo += String.fromCharCode(30);
      codigo += String.fromCharCode(0);
    }

    if(!this.hora_3){
      codigo += String.fromCharCode(this.hora_3.getHours());
      codigo += String.fromCharCode(this.hora_3.getMinutes());
    }else{
      codigo += String.fromCharCode(30);
      codigo += String.fromCharCode(0);
    }

    if(!this.hora_4){
      codigo += String.fromCharCode(this.hora_4.getHours());
      codigo += String.fromCharCode(this.hora_4.getMinutes());
    }else{
      codigo += String.fromCharCode(30);
      codigo += String.fromCharCode(0);
    }

    if(!this.hora_5){
      codigo += String.fromCharCode(this.hora_5.getHours());
      codigo += String.fromCharCode(this.hora_5.getMinutes());
    }else{
      codigo += String.fromCharCode(30);
      codigo += String.fromCharCode(0);
    }

    this.bluetoothSerial.write("PC" + codigo  + "\n");
  }

}
