import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { PostServise } from 'src/app/servise/post.servise';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  post:any = [];
  constructor(private postservise:PostServise,private router:Router,
    private route:ActivatedRoute,) { }

  ngOnInit(): void {
this.postservise.onGetPost().subscribe((posts)=>{
  this.post = posts.slice(0,5);
  console.log(this.post);
 })

  }
// hellopost(id:number){
//   this.postservise.onGetSinPost(id);
//   this.router.navigate([':id'], {relativeTo:this.route})
  
// }


}
