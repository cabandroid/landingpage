import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { NuestrosServiciosComponent } from './pages/nuestros-servicios/nuestros-servicios.component';
import { MainBannerComponent } from './pages/main-banner/main-banner.component';
import { WhoAreWeComponent } from './pages/who-are-we/who-are-we.component';
import { OurProjectsComponent } from './pages/our-projects/our-projects.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    NuestrosServiciosComponent,
    MainBannerComponent,
    WhoAreWeComponent,
    OurProjectsComponent,
    OurTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
