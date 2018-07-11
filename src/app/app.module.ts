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
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { CountryPage } from '../pages/country/country';
import { SearchPipe } from '../pipes/search/search';
import { FacultPage } from '../pages/facult/facult';
import { BoardPage } from '../pages/board/board';
import { BreakingProvider } from '../providers/breaking/breaking';
import { LostPage } from '../pages/lost/lost';
import { ExaminationPage } from '../pages/examination/examination';
import { EventPage } from '../pages/event/event';
import { SportPage } from '../pages/sport/sport';
import { ImportantPage } from '../pages/important/important';
import { GeneralPage } from '../pages/general/general';
import { LostProvider } from '../providers/lost/lost';
import { EventProvider } from '../providers/event/event';
import { CardPage } from '../pages/card/card';
import { AtmPage } from '../pages/atm/atm';
import { ComputerPage } from '../pages/computer/computer';
import { MobilePage } from '../pages/mobile/mobile';
import { BooksPage } from '../pages/books/books';
import { OthersPage } from '../pages/others/others';
import { PlacementPage } from '../pages/placement/placement';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CountryPage,
    SearchPipe,
    FacultPage,
    BoardPage,
    LostPage,
    ExaminationPage,
    EventPage,
    SportPage,
    ImportantPage,
    GeneralPage,
    CardPage,
    AtmPage,
    ComputerPage,
    MobilePage,
    BooksPage,
    OthersPage,
    PlacementPage
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
    ListPage,
    CountryPage,
    FacultPage,
    BoardPage,
    LostPage,
    ExaminationPage,
    EventPage,
    SportPage,
    ImportantPage,
    GeneralPage,
    CardPage,
    AtmPage,
    ComputerPage,
    MobilePage,
    BooksPage,
    OthersPage,
    PlacementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticeProvider,
    PostProvider,
    RestApiProvider,
    BreakingProvider,
    LostProvider,
    EventProvider,
  ]
})
export class AppModule {}
