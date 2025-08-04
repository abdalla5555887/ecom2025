import { CheckoutComponent } from './pages/checkout/checkout.component';
import { Product } from './shared/interface/iwish';
import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailsComponent } from './pages/details/details.component';
import { RegisterComponent } from './pages/register/register.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { log } from 'console';
import { logGuard } from './core/guards/log/log.guard';

export const routes: Routes = [


{path: '', redirectTo: '/home', pathMatch: 'full',},
  {path:'',component:BlankComponent,canActivate:[authGuard],title:'blank',children:[
    {path: 'home', loadComponent:()=> import('./pages/home/home.component').then((c)=>c.HomeComponent), title: 'home'  },
    {path: 'cart',  loadComponent:()=> import('./pages/cart/cart.component').then((c)=>c.CartComponent), title: 'cart'  },
    {path: 'wish',  loadComponent:()=> import('./pages/wish/wish/wish.component').then((c)=>c.WishComponent), title: 'wish'  },
    {path: 'brands',  loadComponent:()=> import('./pages/brands/brands.component').then((c)=>c.BrandsComponent), title: 'brands'  },
    {path: 'products',  loadComponent:()=> import('./pages/products/products.component').then((c)=>c.ProductsComponent), title: 'products'  },
    {path: 'categories', loadComponent:()=> import('./pages/categories/categories.component').then((c)=>c.CategoriesComponent), title: 'categories'  },
    {path: 'details/:id', loadComponent:()=> import('./pages/details/details.component').then((c)=>c.DetailsComponent), title: 'details'  },
    {path: 'checkout/:id', loadComponent:()=> import('./pages/checkout/checkout.component').then((c)=>c.CheckoutComponent), title: 'checkout'  },


  ]

  },
  {path: '', component: AuthComponent,canActivate:[logGuard], title: 'auth',children: [
    {path: 'login', component: LoginComponent, title: 'Login'  },
    {path: 'register', loadComponent:()=> import('./pages/register/register.component').then((c)=>c.RegisterComponent), title: 'register'  },
    {path: 'forgotpass', loadComponent:()=> import('./shared/components/ui/forgetpass/forgetpass.component').then((c)=>c.ForgetpassComponent), title: 'forgotpass'  },
  ]},
{path: '**',  loadComponent:()=> import('./pages/not-found/not-found.component').then((c)=>c.NotFoundComponent), title: 'not-found'  },
];
