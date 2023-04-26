import { UpdatePostLinkDto } from './update-post-link.dto';
import { UpdatePostVideoDto } from './update-post-video.dto';
import { UpdatePostTextDto } from './update-post-text.dto';
import { UpdatePostQuoteDto } from './update-post-quote.dto';
import { UpdatePostPhotoDto } from './update-post-photo.dto';

export type PostDto = UpdatePostLinkDto | UpdatePostVideoDto | UpdatePostTextDto | UpdatePostQuoteDto | UpdatePostPhotoDto;
