import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AguaPage}  from '../agua/agua';
import { ComidaPage}  from '../comida/comida';
import { ConfiguracionPage}  from '../configuracion/configuracion';
import { DispositivosPage}  from '../dispositivos/dispositivos';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  dispositivo:any = null;
  conectado:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public bluetoothSerial: BluetoothSerial) {

      // Función repetitiva de consulta.
      setInterval(() => { this.consultar(); }, 1000);
  }

  // consultamos la conexión

  consultar()
  {
    if(this.conectado){
        this.bluetoothSerial.write("G");
    }
  }


  conectar(dispositivo:any){

    this.dispositivo = dispositivo;
    this.conectado = false;

    this.bluetoothSerial.connect(this.dispositivo.id).subscribe(
        success => {

              alert("Dispositivo conectado");

              this.conectado = true;

              // al suscribir
              this.bluetoothSerial.subscribe('\n').subscribe(
                                                      data => {
                                                        this.leer_datos(JSON.parse(data))
                                                      });
          },
          error => {
              alert(JSON.stringify(error) + dispositivo.name);
              this.conectado = false;
          });

  }

  // Funcion de callback en el nav.pop, al retornar.
  public ionViewWillEnter() {
     var parametros = this.navParams.get('parametros') || null;
     if(parametros != null && parametros.tipo == "dispositivo" && parametros.dispositivo != this.dispositivo){
       this.conectar(parametros.dispositivo);
     }

     if(parametros != null && parametros.tipo == "alimento"){
       this.programar_alimento(parametros.horas);
     }

     if(parametros != null && parametros.tipo == "agua"){
       this.programar_alimento(parametros.horas);
     }
   }

  pagina_dispositivos(){
    this.navCtrl.push(DispositivosPage);
  }

  pagina_alimento(){
    this.navCtrl.push(ComidaPage);
  }

  pagina_agua(){
    this.navCtrl.push(AguaPage);
  }

  pagina_configuracion(){
    this.navCtrl.push(ConfiguracionPage, {"bluetoothSerial" : this.bluetoothSerial, "dispositivo" : this.dispositivo});
  }



  programar_alimento(horas:any){

  }

  programar_agua(horas:any){

  }

  surtir_alimento(){
    this.bluetoothSerial.write("JA\n");
  }


  surtir_agua(){
    this.bluetoothSerial.write("JA\n");
  }

  leer_datos(datos:any)
  {
    var fecha = String(datos[0]+2000); // año, llegan solo 2 digitos.
    fecha += "-" +  String(datos[1]); // mes
    fecha += "-" +  String(datos[2]); // dia
    fecha += " " +  String(datos[3]); // hora
    fecha += ":" +  String(datos[4]); // minuto
    fecha += ":00"; // segundo, siempre 0;

    this.dispositivo = {fecha : fecha};
  }

}
