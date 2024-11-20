import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: string = '';
  pass: string = '';

  constructor(private alertController: AlertController) {}

  async validarCampos(): Promise<boolean> {
    if (this.usuario.trim() === '' || this.pass.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Campos incompletos',
        message: 'Por favor, completa ambos campos.',
        buttons: ['OK']
      });

      await alert.present();
      return false;
    }
    return true;
  }

  async ingresar() {
    if (await this.validarCampos()) {
      console.log('Usuario:', this.usuario);
      console.log('Contraseña:', this.pass);
    }
  }
}