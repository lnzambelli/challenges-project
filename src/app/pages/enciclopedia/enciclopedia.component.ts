import { Component, OnInit } from '@angular/core';
import { SwapiEnciclopediaService } from 'src/app/services/swapi-enciclopedia.service';

@Component({
  selector: 'app-enciclopedia',
  templateUrl: './enciclopedia.component.html',
  styleUrls: ['./enciclopedia.component.scss']
})
export class EnciclopediaComponent implements OnInit {

  arrPersonajes: any;

  constructor(private swapiEnciclopedia: SwapiEnciclopediaService) { }

  ngOnInit(): void {
  }

}
