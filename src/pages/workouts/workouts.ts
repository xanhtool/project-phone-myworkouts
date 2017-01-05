import { Component } from '@angular/core';
import { WorkoutService } from '../../app/services/workout.service';
import { NavController } from 'ionic-angular';
import { WorkoutDetailsPage } from '../workout-details/workout-details';


@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage {
  workouts: any;
  constructor(
    public navCtrl: NavController,
    private workoutService: WorkoutService
) {

  }

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe( workouts => {
      this.workouts = workouts;
    })
  }

  workoutSelected(event, workout){
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    });
  }

  ionViewWillEnter(){
    this.workoutService.getWorkouts().subscribe( workouts => {
      this.workouts = workouts;
    })
  }

}
