import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlarmsComponent } from './pages/alarms/alarms.component';
import { ChatInputComponent } from './pages/chat/components/chat-input/chat-input.component';
import { AlarmListComponent } from './pages/chat/components/alarm-list/alarm-list.component';
import { AlarmTitlebarComponent } from './pages/chat/components/alarm-titlebar/alarm-titlebar.component';
import { ChatMessagesComponent } from './pages/chat/components/chat-messages/chat-messages.component';
import { ChatSessionWindowComponent } from './pages/chat/components/chat-session-window/chat-session-window.component';
import { MapComponent } from './pages/chat/components/map/map.component';

// Modules
import { AlertModule } from 'ngx-bootstrap';
import { LoadingModule} from 'ngx-loading';

// Services
import { AlertService } from './services/alert.service';
import { LoadingService } from './services/loading.service';
import { AuthService } from './services/auth.service';

// Guards
import { AuthhGuard } from './guards/authh.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    NavbarComponent,
    AlarmsComponent,
    ChatInputComponent,
    AlarmListComponent,
    AlarmTitlebarComponent,
    ChatMessagesComponent,
    ChatSessionWindowComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule.forRoot(),
    LoadingModule,
  ],
  providers: [
    AlertService,
    LoadingService,
    AuthService,
    AuthhGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
