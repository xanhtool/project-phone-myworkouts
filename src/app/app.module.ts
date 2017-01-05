import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AddWorkoutPage } from '../pages/add-workout/add-workout';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutDetailsPage } from '../pages/workout-details/workout-details';
import { WorkoutService } from './services/workout.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddWorkoutPage,
    WorkoutsPage,
    WorkoutDetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddWorkoutPage,
    WorkoutsPage,
    WorkoutDetailsPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WorkoutService
  ]
})
export class AppModule {}
