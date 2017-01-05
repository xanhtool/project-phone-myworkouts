import { Component } from '@angular/core';
import { WorkoutService } from '../../app/services/workout.service';
import { NavController } from 'ionic-angular';
import { WorkoutsPage } from '../workouts/workouts';
@Component({
  selector: 'add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {

  title: string;
  note: string;
  type: string;
  result: any;

  constructor(
    public navCtrl: NavController,
    private workoutService: WorkoutService
  ) {
  }

  onSubmit() {
    var workout = {
      title : this.title,
      note: this.note,
      type: this.type
    }

    // add workout:
    this.workoutService.addWorkout(workout).subscribe( data => {
      this.result = data;
    })
    this.navCtrl.push(WorkoutsPage);
  }

}
