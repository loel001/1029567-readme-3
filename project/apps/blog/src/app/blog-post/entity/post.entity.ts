import { BlogPostTextEntity } from './blog-post-text.entity';
import { BlogPostVideoEntity } from './blog-post-video.entity';
import { BlogPostPhotoEntity } from './blog-post-photo.entity';
import { BlogPostQuoteEntity } from './blog-post-quote.entity';
import { BlogPostLinkEntity } from './blog-post-link.entity';

export type PostEntity = BlogPostTextEntity | BlogPostVideoEntity | BlogPostPhotoEntity | BlogPostQuoteEntity | BlogPostLinkEntity;
