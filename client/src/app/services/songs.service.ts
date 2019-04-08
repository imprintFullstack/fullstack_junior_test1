import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

//interfaces
import { Song } from '../interfaces/song';
@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(
    private http: HttpClient
  ) { }

  getSongList(){
    return this.http.get('/api/songs').toPromise();
  }

  createListObject(response){
    let songsList: Song [] = [];
    response.chart.map((song) => {
      const songData:Song = {
        alias: song.alias, 
        alias2: (song.hasOwnProperty("artists") && song.artists.length > 0)? song.artists[0].alias:"", 
        subtitle: song.heading.subtitle, 
        title: song.heading.title, 
        image: song.images.default, 
        shazamLink: song.share.href, 
        artistImage: song.share.avatar
      }
      songsList.push(songData);
    });
    return songsList;
  }
}
