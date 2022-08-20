import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from "@angular/forms";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})

export class PredictionComponent implements OnInit {

  predictedScore: number | undefined;
  scores: number[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onAddScore(f: NgForm): void {
    this.scores?.push(f.value.score);
  }

  onRemoveScore(score: number): void {
    const index: number = this.scores.indexOf(score, 0);
    if (index > -1) {
      this.scores.splice(index, 1);
    }
  }

  onPredictScore(): void {
    this.httpClient.get('http://edutracker.eastus.cloudapp.azure.com:8000/predict?scores=' + this.scores.toString()).subscribe(data => {
      //this.predictedScore = data;
      //console.log(this.predictedScore);
      console.log(data as JSON);
    })
  }

}