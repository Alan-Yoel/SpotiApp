import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[] = [];

  url:any;
  loadingArtist: boolean | undefined;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.route.params.subscribe((params) => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);

      this.url = `https://open.spotify.com/intl-es/artist/${params['id']}`;
      
    });

    this.loadingArtist = true;
  }

  getArtista(id: string) {
    this.loadingArtist = true;

    this.spotify.getArtista(id).subscribe((artista) => {
      console.log(artista);

      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((data) => {
      console.log(data);

      this.topTracks = data;
    });
  }
}
