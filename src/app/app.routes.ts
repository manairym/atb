import { Routes } from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {DashbordComponent} from "./Components/dashbord/dashbord.component";
import {StatisticsComponent} from "./Components/dashbord/statistics/statistics.component";
import {UsersComponent} from "./Components/dashbord/users/users.component";
import {HistoriqueComponent} from "./Components/dashbord/historique/historique.component";
import {PrivilegeComponent} from "./Components/dashbord/privilege/privilege.component";
import {EQUIPEMENTSComponent} from "./Components/dashbord/equipements/equipements.component";
import {ProfileComponent} from "./Components/dashbord/profile/profile.component";
import {AuthGuard} from "./Guard/auth.guard";
import {SecureInnerPagesGuard} from "./Guard/secure-inner-pages.guard";
import {ResetPasswordComponent} from "./Components/reset-password/reset-password.component";
import {ResetEmailComponent} from "./Components/reset-email/reset-email.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'resetEmail',
    component: ResetEmailComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  { path: 'Dashboard',
    component: DashbordComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['Admin','User']
    }
    ,children : [
      {
        path: '', redirectTo: 'Statistics', pathMatch: 'full'
      },
      {
        path: 'Statistics',
        component: StatisticsComponent,
        canActivate : [AuthGuard],
        data: {
          role: ['Admin','User']
        }
      },
      {
        path: 'Users',
        component: UsersComponent,
        canActivate : [AuthGuard],
        data: {
          role: ['Admin']
        }
      },
      {
        path : 'Historique',
        component : HistoriqueComponent,
        canActivate : [AuthGuard],
        data: {
          role: ['Admin','User']
        }
      },
      {
        path : 'Privilege' ,
        component : PrivilegeComponent,
        canActivate : [AuthGuard],
        data: {
          role: ['Admin']
        }
      },
      {
        path : 'Equipements',
        component : EQUIPEMENTSComponent,
        canActivate : [AuthGuard],
        data: {
          role: ['Admin','User']
        }
      },
      {
        path : 'Profile' ,
        component : ProfileComponent,
        canActivate : [AuthGuard],
        data: {
          role: ['Admin','User']
        }
      }
    ]},
  { path: '',
    component: LoginComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: '**',
    component: LoginComponent,
    canActivate: [SecureInnerPagesGuard]
  }
];
