import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';

function loadScript(url, id) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    if (id) {
      script.id = id;
    }
    script.type = 'text/javascript';
    script.async = false;
    document.head.appendChild(script);
    script.onload = function () {
      typeof resolve === 'function' && resolve();
    };

    script.onerror = function () {
      typeof reject === 'function' && reject();
    };

  });
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'customer',
    loadChildren: async () => {
      const script = await loadScript('/customer/bundles/customer.umd.min.js', 'customer');
      const module = window['customer']['CustomerModule'];
      return module;
    }
  },
  {
    path: '**',
    component: NoPageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
