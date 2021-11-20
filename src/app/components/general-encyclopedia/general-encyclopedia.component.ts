import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-general-encyclopedia',
  templateUrl: './general-encyclopedia.component.html',
  styleUrls: ['./general-encyclopedia.component.css']
})
export class GeneralEncyclopediaComponent implements OnInit {

  constructor(private pokeService:PokedexService) { }

  ngOnInit(): void {
  }

}
