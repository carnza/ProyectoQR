import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },{
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: 'clase1',
    loadChildren: () => import('./clase1/clase1.module').then( m => m.Clase1PageModule)
  },
  {
    path: 'opciones',
    loadChildren: () => import('./opciones/opciones.module').then( m => m.OpcionesPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QRPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'newpassword',
    loadChildren: () => import('./newpassword/newpassword.module').then( m => m.NewpasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
