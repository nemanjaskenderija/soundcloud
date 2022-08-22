import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { Song } from 'src/app/types/Song';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent implements OnInit {
  @Input() song: Song = {} as Song;
  fullSong: Song = {} as Song;
  showPlayIcon: boolean = false;

  constructor(
    private musicService: MusicService,
    private authService: AuthService
  ) {}

  src: string = '';

  isUserLogged() {
    return this.authService.isUserLogged;
  }

  nameShortener() {
    if (this.song.title.length > 10) {
      this.fullSong.title = this.song.title;
      this.song.title = this.song.title.slice(0, 20) + `...`;
    }
  }

  playSong() {
    this.musicService.song = this.song;
  }

  openPlayer() {
    this.musicService.song = this.song;
    this.musicService.isPlayerOn = true;
  }

  ngOnInit(): void {
    this.nameShortener();
  }
}
