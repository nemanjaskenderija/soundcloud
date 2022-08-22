import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayerComponent implements OnInit {
  constructor(private musicService: MusicService) {}

  playSong: any;

  getSong() {
    this.playSong = this.musicService.song;
  }

  ngOnInit(): void {}
}
