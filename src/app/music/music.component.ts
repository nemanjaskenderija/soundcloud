import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/types/Song';
import { MusicService } from './music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})
export class MusicComponent implements OnInit {
  songs: Song[] = [];
  songsCpy: Song[] = [];
  song: Song[] = [];

  test() {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].author.match(this.musicService.songSearch)) {
        this.song.push(this.songs[i]);
      }
    }
    this.songs = [];
    this.songs = this.song;
    this.song = [];
    if (this.musicService.songSearch === '') {
      this.songs = [];
      this.songs = this.songsCpy;
    }
  }

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.songs = this.musicService.musicList();
    this.songsCpy = this.musicService.musicList();
  }
}
