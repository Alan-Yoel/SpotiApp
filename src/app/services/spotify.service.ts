import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Servicio de spoty listo');
  }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDq9OgxXc1bmUiWzfArA_S3KvEnef4nsZodT3SkLwy1LoPtqR3dVFlZc6YB-qFf4eIJObF_yZ1BqIW7o8lcnabm5xhBh0R6HL2wwOqTxxRWvfRm7pQ',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }
  
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
    .pipe(map((data: any) => data['tracks']))
  }
}
