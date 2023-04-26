import { PostLink } from './post-link.interface';
import { PostVideo } from './post-video.interface';
import { PostText } from './post-text.interface';
import { PostQuote } from './post-quote.interface';
import { PostPhoto } from './post-photo.interface';

export type BlogPost = PostLink | PostVideo | PostText | PostQuote | PostPhoto;
