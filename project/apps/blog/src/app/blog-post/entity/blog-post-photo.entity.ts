import { PostPhoto } from '@project/shared/app-types';
import { BlogPostEntity } from './blog-post.entity';

export class BlogPostPhotoEntity extends BlogPostEntity implements PostPhoto {
  public photo: string;

  constructor(blogPost: PostPhoto) {
    super(blogPost);
    this.fillEntity(blogPost);
  }

  public fillEntity(blogPost: PostPhoto) {
    this.photo = blogPost.photo;
  }
}
