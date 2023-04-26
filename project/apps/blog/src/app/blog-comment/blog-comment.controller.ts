import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentRdo } from './rdo/comment.rdo';
import { CreateCommentDto } from './dto/create-comment.dto';
import { fillObject } from '@project/util/util-core';
import { BlogCommentService } from './blog-comment.service';
import { CommentResponses } from './blog-comment.constans';


@ApiTags('comments')
@Controller('comment')
export class BlogCommentController {
  constructor(
    private readonly commentService: BlogCommentService
  ) {
  }

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.CREATED,
    description: CommentResponses.COMMENT_CREATED,
  })
  @Post('/')
  public async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.commentService.create(dto);
    return fillObject(CommentRdo, newComment);
  }

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.OK,
    description: CommentResponses.COMMENT_PROVIDED
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: CommentResponses.COMMENT_ERROR
  })
  @Get('post/:postId')
  public async showByPostId(@Param('postId') postId: string) {
    const comments = await this.commentService.getByPostId(Number(postId));
    return fillObject(CommentRdo, comments);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: CommentResponses.COMMENT_DELETED,
  })
  @Delete(':commentId')
  public async remove(@Param('commentId') commentId: number) {
    return await this.commentService.remove(commentId);
  }
}
