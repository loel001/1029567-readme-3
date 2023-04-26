import { CreateVideoDto } from './create-video.dto';
import { CreatePhotoDto } from './create-photo.dto';
import { CreateTextDto } from './create-text.dto';
import { CreateQuoteDto } from './create-quote.dto';
import { CreateLinkDto } from './create-link.dto';

export type PostDto = CreateVideoDto | CreatePhotoDto | CreateTextDto | CreateQuoteDto | CreateLinkDto;
