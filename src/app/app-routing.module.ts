import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusniessnewsComponent } from './busniessnews/busniessnews.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [

{path :' ',component : TopheadingComponent},
{path :'tech' , component: TechnewsComponent},
{path :'business' , component : BusniessnewsComponent},
{path :'sports' , component : SportsComponent},
{path :'ent' , component : EntertainmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
