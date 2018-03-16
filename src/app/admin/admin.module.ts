import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { DataProviderModule } from '../dataProvider/dataProvider.module';
import { TabViewModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/primeng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { GridComponent } from './grid.component';
import { FXTRFALLDAYComponent } from './FXTRFALLDAY.component';
import { DOTPALLDAYComponent } from './DOTPALLDAY.component';
import { DOTALLDAYComponent } from './DOTALLDAY.component';
import { FXTRF2TIERComponent } from './FXTRF2TIER.component';
import { DOTP2TIERComponent } from './DOTP2TIER.component';
import { DOT2TIERComponent } from './DOT2TIER.component';
import { TOUComponent } from './tou.component';




@NgModule({
    declarations: [
        AdminComponent,
        AuthComponent,
        GridComponent,
        FXTRFALLDAYComponent,
        DOTPALLDAYComponent,
        DOTALLDAYComponent,
        FXTRF2TIERComponent,
        DOTP2TIERComponent,
        DOT2TIERComponent,
        TOUComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DataProviderModule,
        RouterModule.forChild([
            { path: 'auth', component: AuthComponent },
            { path: 'main', component: AdminComponent },
            { path: 'grid', component: GridComponent },
            { path: 'tou', component: TOUComponent },
            { path: "**", redirectTo: "grid" }
        ]),
        TabViewModule,
        AutoCompleteModule,
        NgbModule,
        SharedModule
    ],
    // exports:[AdminComponent]
})
export class AdminModule {

}