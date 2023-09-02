import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { ReactiveFormsModule } from '@angular/forms';

// Icons Related
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CartsModule } from './carts/carts.module';
import { AntDComponentModule } from './ant-dcomponent/ant-dcomponent.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartService } from './carts/service/cart.service';
import { AdditionModule } from './addition/addition.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot(icons),
    NzBadgeModule,
    AntDComponentModule,
    HttpClientModule,

    ProductsModule,
    UsersModule,
    CartsModule,
    AdditionModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
