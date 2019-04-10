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
    const options = {
      headers: new HttpHeaders({
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2aXZAY3ljdXJpdHkuY29tIiwibmFtZSI6ImF2aXYiLCJpYXQiOjE1NTQ4ODIyOTl9._cLVE40a47NXHENdLCd8L4AGaORzJs8vkIMFIt4WyWU'
      })
    };
    return this.http.get('/api/songs',options).toPromise();
  }

  addToFav(_name: string){
    const options = {
      headers: new HttpHeaders({
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2aXZAY3ljdXJpdHkuY29tIiwibmFtZSI6ImF2aXYiLCJpYXQiOjE1NTQ4ODIyOTl9._cLVE40a47NXHENdLCd8L4AGaORzJs8vkIMFIt4WyWU'
      })
    };
    return this.http.post('/api/addToFavorites',{songName: _name},options).toPromise();
  }

  getAllFav(){
    const options = {
      headers: new HttpHeaders({
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2aXZAY3ljdXJpdHkuY29tIiwibmFtZSI6ImF2aXYiLCJpYXQiOjE1NTQ4ODIyOTl9._cLVE40a47NXHENdLCd8L4AGaORzJs8vkIMFIt4WyWU'
      })
    };
    return this.http.get('/api/getAllFavorites',options).toPromise();
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
