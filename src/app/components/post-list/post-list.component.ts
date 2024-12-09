import { Component } from '@angular/core';
import { PostService } from '../../models/post.service';

@Component({
  selector: 'app-post-list',
  standalone: false,
  
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts:any[]=[]
  constructor(private postservice:PostService){}
   
    ngOnInit(): void{this.postservice.getPosts().subscribe((data)=>{
    
      this.posts=data
    })}
    

}







