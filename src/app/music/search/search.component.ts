import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForSong(event: any) {
    this.musicService.songSearch = event.target.value;
  }

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {}
}
