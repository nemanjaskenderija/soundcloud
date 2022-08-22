import { Injectable } from '@angular/core';
import { Song } from 'src/app/types/Song';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  songSearch: string = '';
  isPlayerOn: boolean = false;
  song: Song = {} as Song;

  musicList() {
    return [
      {
        image: 'https://i1.sndcdn.com/artworks-FAZjGtt71qL3-0-t200x200.jpg',
        title: 'Future feat. Drake & Tems - IM ON ONE',
        author: 'Future',
        src: '../../../assets/audio/Future_-_IM_ON_ONE_Official_Audio_(getmp3.pro).mp3',
      },
      {
        image:
          'https://i1.sndcdn.com/artworks-AuhIysGsVVnipQ1V-oON4NQ-t200x200.jpg',
        title: 'من أول دقيقة ... اليسا وسعد المجرد ♥️',
        author: 'Dr. Enas omar',
        src: '../../../assets/audio/Dr.Enas.Omar.mp3',
      },
      {
        image:
          'https://i1.sndcdn.com/artworks-WUYUBp0zd42ICcWu-E7Otyw-t200x200.jpg',
        title:
          'رضا البحراوي 2022 - الاغنية اللى مكسره التيك توك ( ناس مني ومن دمي ) توزيع حسام ماركو',
        author: 'Dr. Enas omar',
        src: '../../../assets/audio/Dr.Enas.Omar.2.mp3',
      },
      {
        image:
          'https://i1.sndcdn.com/artworks-V9NBXSpLzRsjkuAO-4y4u7w-t200x200.jpg',
        title: 'Akram Hosny - Seto Ana ',
        author: 'kmedia',
        src: '../../../assets/audio/Akram Hosny.mp3',
      },
      {
        image: 'https://i1.sndcdn.com/artworks-zGcUlHkFu3VQ-0-t200x200.jpg',
        title: 'Drake - Jimmy Cooks (feat. 21 Savage)',
        author: 'octobersveryown',
        src: '../../../assets/audio/Jimmy_Cooks_(getmp3.pro).mp3',
      },
      {
        image:
          'https://i1.sndcdn.com/artworks-L0VnZ9sVcqSz4Ows-5hT6pA-t200x200.jpg',
        title: 'مهرجان " انت ولا جامد ولا نيله " احمد موزه - كزبره',
        author: 'DAMA',
        src: '../../../assets/audio/ويجز.mp3',
      },
      {
        image:
          'https://i1.sndcdn.com/artworks-wZHTG6XJwgji9TEI-w4aUvQ-t200x200.jpg',
        title: 'مسلم  اتنسيت من فيلم عروستي',
        author: 'Zahra Sh',
        src: '../../../assets/audio/zahra-sh.mp3',
      },
      {
        image: 'https://i1.sndcdn.com/artworks-8ey2S5z8Dt36-0-t200x200.jpg',
        title: 'Die Young (feat. 347aidan)',
        author: 'Sleepy Hallow',
        src: '../../../assets/audio/Sleepy_Hallow_-_Die_Young_Official.mp3',
      },
      {
        image:
          'https://i1.sndcdn.com/artworks-jclLwmNBzfLqvOg9-CjSzaA-t200x200.jpg',
        title:
          'مهرجان معرفش اخاف من حد ( ادمرت صحتي مبقتش زي زمان ) عصام صاصا الكروان - توزيع يوسف اوشا',
        author: 'ويجز',
        src: '../../../assets/audio/Dr.Enas.Omar.mp3',
      },
      {
        image:
          'https://i1.sndcdn.com/artworks-Qxha89zOZMxYwtMs-JvVDJw-t200x200.jpg',
        title: 'BILLIE EILISH.',
        author: 'Armani White',
        src: '../../../assets/audio/Armani White - BILLIE EILISH. (Official Video).mp3',
      },
    ];
  }

  constructor() {}
}
