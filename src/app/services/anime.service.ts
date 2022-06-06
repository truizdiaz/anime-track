import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private API_URL = 'https://api.jikan.moe/v4/anime?q=';

  constructor(private http: HttpClient) { }

  getAnimes(searchTerm: string): Observable<any> {
    return this.http.get(`${this.API_URL}${searchTerm}`)
  }
}
