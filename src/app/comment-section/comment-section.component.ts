import { Component, input } from '@angular/core';

@Component({
  selector: 'comment-section',
  standalone: true,
  imports: [],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss'
})
export class CommentSectionComponent {
  postId = input.required<number>();
}
