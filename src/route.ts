import {EventsComponent} from "./app/events/events.component";
import {EventDetailsComponent} from "./app/event-details/event-details.component";
import {Routes} from "@angular/router";

export const appRoutes:Routes = [
  { path:'events' ,component : EventsComponent},
  { path:'events/:id',component : EventDetailsComponent},
  { path:'',redirectTo:'/events',pathMatch:'full'}
]
