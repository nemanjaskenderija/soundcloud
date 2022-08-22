import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MusicComponent } from './music.component';
import { MusicService } from './music.service';
import { SearchComponent } from './search/search.component';
import { SongComponent } from './song/song.component';

@NgModule({
  declarations: [MusicComponent, SongComponent, SearchComponent],
  providers: [MusicService],
  imports: [CommonModule, MatIconModule],
  exports: [MusicComponent],
})
export class MusicModule {}
