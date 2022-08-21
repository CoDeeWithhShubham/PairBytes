import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostServise } from 'src/app/servise/post.servise';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  id: number;
  post: any = [];
  
  constructor(private postsservise: PostServise, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.postsservise.onGetSinPost(this.id).subscribe((post) => {
          this.post = post;
         
        })
      })
  }

}
