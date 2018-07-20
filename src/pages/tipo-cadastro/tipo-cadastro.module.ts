import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoCadastroPage } from './tipo-cadastro';

@NgModule({
  declarations: [
    TipoCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(TipoCadastroPage),
  ],
})
export class TipoCadastroPageModule {}
