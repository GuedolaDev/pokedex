import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './api/services/pokemon.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor( private pokemonService: PokemonService) { }

  title = 'pokedex';

  ngOnInit() {
    console.log('AppComponent initialized');
    this.pokemonService.getPokemonList().subscribe({
      next: (pokemonList) => {
        console.log('Pokemon list:', pokemonList);
      },
      error: (error) => {
        console.error('Error fetching Pokemon list:', error);
      }
    });
  }
}
