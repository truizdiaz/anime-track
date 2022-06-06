import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Anime, MyAnime } from 'src/app/interfaces/api-movies';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrls: ['./result-anime.component.css']
})
export class ResultAnimeComponent implements OnInit, OnDestroy {
  anime_results: Anime[] = [];
  animeSuscription!: Subscription;

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
   this.animeSuscription = this.animeService.getResultAnime().subscribe(result => {
      this.anime_results = result
    })
  }

  ngOnDestroy(): void {
    this.animeSuscription.unsubscribe();
  }

  addAnime(anime: Anime) {
    const addAnime: MyAnime = {
      id: anime.mal_id,
      title: anime.title,
      imagen: anime.images['jpg'].image_url,
      total_episodes: anime.episodes,
      watched_episodes: 0
    }

    this.animeService.animeSelected(addAnime);
    this.anime_results = [];
  }

}
