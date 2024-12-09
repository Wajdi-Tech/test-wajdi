import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  standalone: false,
  
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts:any[]=[]
  constructor(private postservice:PostService){}
   
    ngOnInit(): void{this.posts=this.postservice.getPosts()}
    

}







