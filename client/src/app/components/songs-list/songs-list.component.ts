import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms' 
//components
import { SongsService } from '../../services/songs.service';
//interfaces
import { Song } from '../../interfaces/song';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
  public songsList: Song [] = [];
  public favList: any;
  public searchForm;
  public searchText:string = "";
  public listLoader: boolean = true;
  constructor(
    private songsService: SongsService
  ) { 
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
  }

  isFav(name){
    const res = this.favList.filter((x)=> x == name);
    if(res.length > 0) return true;
    return false;
  }

  async ngOnInit() {
    // this.favList = await this.songsService.getAllFav();
    // const response: any = await this.songsService.getSongList();
    // this.songsList = this.songsService.createListObject(response);
    // this.listLoader = false;
  }

  valueChanged(){
    this.searchText = this.searchForm.value.search;
  }

  async addToFav(name){
    const res = await this.songsService.addToFav(name);
    console.log(res);
    this.favList = await this.songsService.getAllFav();
    console.log(this.favList);
  }

}
