import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: "store", loadChildren: "app/store/store.module#StoreModule" },
      { path: "admin", loadChildren: "app/admin/admin.module#AdminModule" },
      { path: "**", redirectTo: "admin" }
    ], {
      useHash: true
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
