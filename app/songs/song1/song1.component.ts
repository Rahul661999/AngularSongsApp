import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-song1',
  templateUrl: './song1.component.html',
  styleUrls: ['./song1.component.css']
})
export class Song1Component implements OnInit {

 
  message: string;
  constructor(private activatedRoute: ActivatedRoute,private api:SongService) { }

  public id: any;
  public song: any;
  ngOnInit(): void {
    this.message=this.api.getMessage()
    this.activatedRoute.params.subscribe(params=>{
      console.log(params);
      this.id=params.songName[0] - 1;
      this.song = this.message[this.id];
    })
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(this.message)
    console.log(location.origin)
   // this.id = location.origin[0];
    this.song=this.message[this.id];
    
  }

}
