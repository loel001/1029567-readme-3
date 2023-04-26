import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BlogPostService } from './blog-post.service';
import { BlogPostRdo } from './rdo/blog-post.rdo';
import { rdoPostAdapter } from './utils/rdo-post-adapter';
import { PostDto } from './dto/create/post.dto';
import { BlogPostResponses } from './blog-post.constant';
import { PostDto as UpdatePostDto } from "./dto/update/post.dto";

@ApiTags('posts')
@Controller('post')
export class BlogPostController {
  constructor(
    private readonly postService: BlogPostService
  ) {
  }

  @ApiResponse({
    type: BlogPostRdo,
    status: HttpStatus.CREATED,
    description: BlogPostResponses.POST_CREATED,
  })
  @Post('new')
  public async create(@Body() dto: PostDto) {
    const newPost = await this.postService.create(dto);
    return rdoPostAdapter(newPost);
  }

  @ApiResponse({
    type: BlogPostRdo,
    status: HttpStatus.OK,
    description: BlogPostResponses.POST_PROVIDED
  })
  @Get('/')
  async show() {
    const posts = await this.postService.get();
    return posts.map((post) => rdoPostAdapter(post));
  }

  @ApiResponse({
    type: BlogPostRdo,
    status: HttpStatus.OK,
    description: BlogPostResponses.POST_PROVIDED
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Post not found.'
  })
  @Get(':id')
  public async showById(@Param('id') id: string) {
    const post = await this.postService.getById(Number(id));
    return rdoPostAdapter(post);
  }

  @ApiResponse({
    type: BlogPostRdo,
    status: HttpStatus.CREATED,
    description: BlogPostResponses.POST_UPDATED,
  })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    const updatedPost = await this.postService.update(Number(id), dto);
    return rdoPostAdapter(updatedPost);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: BlogPostResponses.POST_DELETED,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: BlogPostResponses.POST_NOT_DELETED
  })
  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return await this.postService.remove(Number(id));
  }
}
