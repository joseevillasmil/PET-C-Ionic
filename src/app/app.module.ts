import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AguaPage}  from '../pages/agua/agua';
import { ComidaPage}  from '../pages/comida/comida';
import { ConfiguracionPage }  from '../pages/configuracion/configuracion';
import { DispositivosPage }  from '../pages/dispositivos/dispositivos';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AguaPage,
    ComidaPage,
    ConfiguracionPage,
    DispositivosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AguaPage,
    ComidaPage,
    ConfiguracionPage,
    DispositivosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
