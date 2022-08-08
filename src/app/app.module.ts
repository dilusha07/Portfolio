import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './profile/header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './profile/about/about.component';
import { SplitPipe } from './profile/split.pipe';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SkillsComponent } from './profile/skills/skills.component';
import { EducationComponent } from './profile/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    SplitPipe,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
