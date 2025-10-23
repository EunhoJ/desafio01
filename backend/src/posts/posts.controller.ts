import {
  Body,
  Controller,
  Get,
  Post as PostMethod,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostEntity } from './interfaces/post.interface';

@Controller('api/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<PostEntity> {
    return this.postsService.findOne(id);
  }

  @PostMethod()
  create(@Body() dto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.create(dto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreatePostDto,
  ): Promise<PostEntity> {
    return this.postsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<{ message: string }> {
    return this.postsService.remove(id);
  }
}
