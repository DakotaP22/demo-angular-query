import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { lastValueFrom } from "rxjs";

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}


@Injectable()
export class PostService {
    private readonly http = inject(HttpClient);

    getPosts(): Promise<Post[]> {
        return lastValueFrom(this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`))
    }

    getCommentForPost(postId: number): Promise<Comment[]> {
        return lastValueFrom(
            this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        )
    }

}