import { Routes } from '@angular/router';
import { LoginComponent } from './features/start/login.component';
import { RoomsComponent } from './features/rooms/rooms.component';
import { RoomNewComponent } from './features/rooms/room-new/room-new.component';
import { RoomDetailsComponent } from './features/rooms/room-details/room-details.component';

export const routes: Routes = [
  {
    path: '',
    component: RoomsComponent
  },
  {
    path: 'room/new',
    component: RoomNewComponent
  },
  {
    path: 'rooms',
    component: LoginComponent
  },
  {
    path: 'room/:id',
    component: RoomDetailsComponent
  }
];
