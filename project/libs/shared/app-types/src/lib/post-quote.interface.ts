import { Post } from './post.interface';

export interface PostQuote extends Post {
  quote: string;
  quoteAuthor: string;
}
