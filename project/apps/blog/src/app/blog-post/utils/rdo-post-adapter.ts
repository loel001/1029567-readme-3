import { Post } from '@project/shared/app-types';
import { PostType } from '@prisma/client';
import { fillObject } from '@project/util/util-core';
import { BlogPostTextRdo } from '../rdo/blog-post-text.rdo';
import { BlogPostPhotoRdo } from '../rdo/blog-post-photo.rdo';
import { BlogPostVideoRdo } from '../rdo/blog-post-video.rdo';
import { BlogPostLinkRdo } from '../rdo/blog-post-link.rdo';
import { BlogPostQuoteRdo } from '../rdo/blog-post-quote.rdo';

export function rdoPostAdapter(post: Post) {
  switch (post.type) {
    case PostType.text:
      return fillObject(BlogPostTextRdo, post);
    case PostType.photo:
      return fillObject(BlogPostPhotoRdo, post);
    case PostType.video:
      return fillObject(BlogPostVideoRdo, post);
    case PostType.link:
      return fillObject(BlogPostLinkRdo, post);
    case PostType.quote:
      return fillObject(BlogPostQuoteRdo, post);
  }
}
