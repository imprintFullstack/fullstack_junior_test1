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

  async ngOnInit() {
    const response: any = await this.songsService.getSongList();
    this.songsList = this.songsService.createListObject(response);
    this.listLoader = false;
  }

  valueChanged(){
    this.searchText = this.searchForm.value.search;
  }

}
