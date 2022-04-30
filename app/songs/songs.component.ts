import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/song.service';
import { SongModel } from './song.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  [x: string]: any;

  formValue !: FormGroup;
  songModelObj : SongModel = new SongModel();
  songData !: any;

  Name= '';
  constructor(private formbuider: FormBuilder,
    private api : SongService, private route:ActivatedRoute, private router: Router) {

      this.songData = '';
      console.log(this.songData.songName);
     }

  ngOnInit(): void {

    this.formValue = this.formbuider.group({

      songName : [''],
      albumName : ['']
    })

    this.getAllSong();


    this.Name = this.route.snapshot.params.songName;

    //this.api.setMessage(this.res);
    //console.log(this.res);
    // this.api.setMessage(this.songName);
    // this.api.setMessage(this.albumName);
  }

  postSongDetails()
  {
    this.songModelObj.songName = this.formValue.value.songName;
    this.songModelObj.albumName = this.formValue.value.albumName;

    this.api.postSong(this.songModelObj)
    .subscribe((res:any)=>{

      alert("Song added successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllSong();
    },
    (err: any)=>{
      alert("something wrong")
    })
  }

  getAllSong()
  {
    this.api.getSong()
    .subscribe((res:any)=>{
      this.songData = res;
     
      this.api.setMessage(this.songData);
      console.log(this.songData);
    })
    
  }

  press(id:any)
  {
    if(confirm("Are you sure you want to view the Song Details.?"))
    {
      //console.log(id);
      //const path1="Songs/:songName";
      const path1="Songs/"+id+"songName";
      this.router.navigate([path1]);

    }

    else
      console.log("No");
  }


}
