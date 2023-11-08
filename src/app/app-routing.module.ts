import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'aboutus',component:AboutComponent    
  },
  {
    path:'courses',component:CoursesComponent    
  },
  {
    path:'contact',component:ContactComponent    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
