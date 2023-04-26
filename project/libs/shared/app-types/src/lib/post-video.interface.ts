import { Post } from './post.interface';

export interface PostVideo extends Post {
  title: string;
  videoLink: string;
}
