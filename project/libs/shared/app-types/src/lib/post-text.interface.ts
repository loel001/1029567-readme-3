import { Post } from './post.interface';

export interface PostText extends Post {
  title: string;
  announcement: string;
  text: string;
}
