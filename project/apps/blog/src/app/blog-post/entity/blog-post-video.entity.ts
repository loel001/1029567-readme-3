import { PostVideo } from '@project/shared/app-types';
import { BlogPostEntity } from './blog-post.entity';

export class BlogPostVideoEntity extends BlogPostEntity implements PostVideo {
  public title: string;
  public videoLink: string;

  constructor(blogPost: PostVideo) {
    super(blogPost);
    this.fillEntity(blogPost);
  }

  public fillEntity(blogPost: PostVideo) {
    this.title = blogPost.title;
    this.videoLink = blogPost.videoLink;
  }
}
