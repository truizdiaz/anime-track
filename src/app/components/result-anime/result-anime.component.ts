import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/interfaces/api-movies';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrls: ['./result-anime.component.css']
})
export class ResultAnimeComponent implements OnInit {
  anime_results: Anime[] = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getResultAnime().subscribe(result => {
      this.anime_results = result
      console.log(this.anime_results)
    })
  }

}
