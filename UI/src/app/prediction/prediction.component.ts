import { Component, OnInit } from '@angular/core';
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

  scores: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddScore(f: NgForm){
    this.scores?.push(f.value.score);
  }



}
