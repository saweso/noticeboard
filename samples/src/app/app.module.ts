import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NoticeProvider } from '../providers/notice/notice';
import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post/post';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { CountryPage } from '../pages/country/country';
import { SearchPipe } from '../pipes/search/search';
import { SlidesPage } from '../pages/slides/slides';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    CountryPage,
    SearchPipe,
    SlidesPage
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ListPage,
    CountryPage,
    SlidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticeProvider,
    PostProvider,
    RestApiProvider
  ]
})
export class AppModule {}
