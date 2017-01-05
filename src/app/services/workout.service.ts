import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WorkoutService {
    http: any;
    apiKey: string;
    workoutsUrl: string;

    constructor(http: Http) {
      this.http = http;
      this.apiKey = 'BSCwO4ElyZHcwAXNJYYHzFvYfyqRlkWq';
      this.workoutsUrl = 'https://api.mlab.com/api/1/databases/project-test-2017/collections/workouts';
    }

    getWorkouts() {
      return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
      .map(res => res.json())
    }

    addWorkout(workout) {
      var headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey,JSON.stringify(workout), {headers}).map(res => res.json());
    }

    deleteWorkout(workoutId) {
      return this.http.delete(this.workoutsUrl+'/'+ workoutId + '?apiKey=' + this.apiKey).map(res => res.json());
    }

}
