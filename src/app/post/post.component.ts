import { Component, input } from '@angular/core';
import { Post } from '../post.service';
import { MatCardModule } from '@angular/material/card';
import { CommentSectionComponent } from '../comment-section/comment-section.component';

@Component({
  selector: 'post',
  standalone: true,
  imports: [MatCardModule, CommentSectionComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  post = input.required<Post>()
}
