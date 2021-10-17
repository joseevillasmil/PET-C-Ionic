import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {

  public cantidad_comida:number;
  public cantidad_agua:number;
  public bluetoothSerial:BluetoothSerial;
  public dispositivo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      // Nos traemos la instancia del bluetooth.

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');
    this.navCtrl.getPrevious().data.parametros = null;
    this.bluetoothSerial = this.navParams.get("bluetoothSerial");
    this.dispositivo = this.navParams.get("dispositivo");
  }

  SincronizarHora()
  {
    // extraemos el dia, mes, año y hora.
    var hoy = new Date();
    var dia = hoy.getDate();
    var dow = hoy.getDay();
    var mes = hoy.getMonth();
    var anio = hoy.getFullYear() - 2000; // años solo en 2 digitos.

    var hora = hoy.getHours();
    var minuto = hoy.getMinutes();

    var codigos =  String.fromCharCode(dia) + String.fromCharCode(mes) + String.fromCharCode(anio) + String.fromCharCode(dow) +String.fromCharCode(hora) + String.fromCharCode(minuto);

    this.bluetoothSerial.write("PD" + codigos  + "\n");

  }

}
