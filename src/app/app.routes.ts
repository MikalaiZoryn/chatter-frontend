import { Routes } from "@angular/router";
import { ChatComponent } from "./features/chat/chat.component";
import { LoginComponent } from "./features/login/login.component";
import { AuthGuard } from "./auth.guard";

export const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];