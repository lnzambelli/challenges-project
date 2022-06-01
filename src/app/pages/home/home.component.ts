import { Challenge } from './../../models/challenge';
import { Component, OnInit } from '@angular/core';
import challenge from './../../../assets/mock/challengeMock.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listChallenges: Challenge[] = [];

  constructor() { 
    this.listChallenges = challenge.challenge
  }

  ngOnInit(): void {
  }

}
