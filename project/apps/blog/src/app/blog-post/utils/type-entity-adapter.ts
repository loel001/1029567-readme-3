import { BlogPostTextEntity } from '../entity/blog-post-text.entity';
import { BlogPostPhotoEntity } from '../entity/blog-post-photo.entity';
import { BlogPostVideoEntity } from '../entity/blog-post-video.entity';
import { BlogPostLinkEntity } from '../entity/blog-post-link.entity';
import { BlogPostQuoteEntity } from '../entity/blog-post-quote.entity';

export const TypeEntityAdapter = {
  'text': BlogPostTextEntity,
  'photo': BlogPostPhotoEntity,
  'video': BlogPostVideoEntity,
  'link': BlogPostLinkEntity,
  'quote': BlogPostQuoteEntity
}
