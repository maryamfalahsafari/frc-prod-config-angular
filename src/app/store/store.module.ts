import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';


import { StoreComponent } from './store.component';
import { CheckoutComponent } from './checkout.component';
import { CartDetailComponent } from './cartDetail.component';
import { DataProviderModule } from '../dataProvider/dataProvider.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        StoreComponent,
        CheckoutComponent,
        CartDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DataProviderModule,
        SharedModule,
        RouterModule.forChild([
            { path: "store", component: StoreComponent },
            { path: "cart", component: CartDetailComponent },
            { path: "checkout", component: CheckoutComponent },
            { path: "**", redirectTo: "store" }])
    ],
    exports: [
        StoreComponent,
        CheckoutComponent,
        CartDetailComponent
    ]
})
export class StoreModule {

}