import { Component, OnInit } from '@angular/core';
import { MyAnime } from 'src/app/interfaces/api-movies';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-selected-anime',
  templateUrl: './selected-anime.component.html',
  styleUrls: ['./selected-anime.component.css']
})
export class SelectedAnimeComponent implements OnInit {
  animes_selected: MyAnime[] = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAnimeSelected().subscribe(anime => {
      this.animes_selected.push(anime)
    })
  }

}
