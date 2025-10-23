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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdatePostDto } from './dto/update-post.dto';

@ApiTags('Posts')
@Controller('api/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os posts' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso' })
  findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um post por ID' })
  @ApiResponse({ status: 200, description: 'Post encontrado' })
  @ApiResponse({ status: 404, description: 'Post não encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<PostEntity> {
    return this.postsService.findOne(id);
  }

  @PostMethod()
  @ApiOperation({ summary: 'Cria um novo post' })
  @ApiResponse({ status: 201, description: 'Post criado com sucesso' })
  create(@Body() dto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um post existente' })
  @ApiResponse({ status: 200, description: 'Post atualizado com sucesso' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePostDto,
  ): Promise<PostEntity> {
    return this.postsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um post' })
  @ApiResponse({ status: 200, description: 'Post removido com sucesso' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.postsService.remove(id);
  }
}
