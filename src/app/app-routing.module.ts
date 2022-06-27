import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  // etant sur url, on est redirect vers url/sing-in
  {path: "", redirectTo: "sign-in", pathMatch: "full"},
  {path: "sign-in", component: PageSignInComponent},
  {path: "sign-up", component: PageSignUpComponent},
  {path: "reset", component: PageResetPasswordComponent},
  {path: "forgot", component: PageForgotPasswordComponent},

  {path: "orders", loadChildren:() => import('./orders/orders.module').then(m => m.OrdersModule)},
  {path: "clients", loadChildren:() => import('./clients/clients.module').then(m => m.ClientsModule)},
  {path: "**", loadChildren:() => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)},
];

// avec children : pas chargé lors de lancement de mon appli (lazy laoding)
// avec la logique metier on les charge pas au debut. Mais sur demande

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules }
    // Des qu'il y a un peu de bande passante cela charge les autres modules qui sont en lazy loading
    )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
 