import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { EducationComponent } from './education/education.component';
import { LeadershipsComponent } from './leaderships/leaderships.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';
import { AdditionalComponent } from './additional/additional.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'leaderships', component: LeadershipsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'work', component: WorkComponent },
  { path: 'additional', component: AdditionalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
