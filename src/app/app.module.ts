import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/counter/counter.component';
// import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
// import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
// import { counterReducer } from './state/counter.reducer';
// import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
// import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';
import { PostsModule } from './posts/posts.module';
import { CounterModule } from './counter/counter.module';
import { AuthModule } from './auth/auth.module';
// import { RouterModule } from '@angular/router';
// import { AddpostComponent } from './posts/addpost/addpost.component';
// import { EditpostComponent } from './posts/editpost/editpost.component';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // CounterOutputComponent,
    // CounterButtonsComponent,
    // CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    // PostsListComponent,
    // AddpostComponent,
    // EditpostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({ counter: counterReducer }),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode

      // logOnly: environment.production,
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    PostsModule,
    CounterModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
