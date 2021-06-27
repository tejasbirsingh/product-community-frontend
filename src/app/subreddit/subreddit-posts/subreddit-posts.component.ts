import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from 'src/app/shared/post-model';

@Component({
  selector: 'subreddit-posts',
  templateUrl: './subreddit-posts.component.html',
  styleUrls: ['./subreddit-posts.component.css']
})
export class SubredditPostsComponent implements OnInit {

  id: number;
  posts: PostModel[];
  postLength: number;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,private router: Router
   ) {
    this.id = this.activatedRoute.snapshot.params.id;

    this.postService.getAllPostsBySubreddit(this.id).subscribe(data => {
      this.posts = data;
      this.postLength = data.length;
    });
   
   
  }

  ngOnInit(): void {
  }
  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }
}
