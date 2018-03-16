import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './providers/api';
import { Service } from './providers/service';
import { CustomInterceptor } from './providers/customInterceptor';

import { ProductRepository } from './repositories/product.repository';
import { CategoryRepository } from './repositories/category.repository';
import { OrderRepository } from './repositories/order.repository';
import { Cart } from './models/cart.model';
import { Order } from './models/order.model';
import { UserRepository } from './repositories/user.repository';
import { ProductConfigurationRepository } from './repositories/product.configuration.repository';

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomInterceptor,
            multi: true
        },
        ApiService,
        Service,
        ProductRepository,
        CategoryRepository,
        Cart,
        OrderRepository,
        Order,
        UserRepository,
        ProductConfigurationRepository
    ]
})
export class DataProviderModule {

}