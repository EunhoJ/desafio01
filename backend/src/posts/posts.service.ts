import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { firstValueFrom } from 'rxjs';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<Post[]> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<Post[]>(this.apiUrl),
      );
      return response.data;
    } catch {
      throw new HttpException('Erro ao buscar posts', HttpStatus.BAD_GATEWAY);
    }
  }

  async findOne(id: number): Promise<Post> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<Post>(`${this.apiUrl}/${id}`),
      );
      return response.data;
    } catch {
      throw new HttpException('Post não encontrado', HttpStatus.NOT_FOUND);
    }
  }

  async create(dto: CreatePostDto): Promise<Post> {
    try {
      const response = await firstValueFrom(
        this.httpService.post<Post>(this.apiUrl, dto),
      );
      return response.data;
    } catch {
      throw new HttpException('Erro ao criar post', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, dto: UpdatePostDto): Promise<Post> {
    try {
      const response = await firstValueFrom(
        this.httpService.put<Post>(`${this.apiUrl}/${id}`, dto),
      );
      return response.data;
    } catch {
      throw new HttpException('Erro ao atualizar post', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number): Promise<{ message: string }> {
    try {
      await firstValueFrom(this.httpService.delete(`${this.apiUrl}/${id}`));
      return { message: `Post ${id} removido com sucesso` };
    } catch {
      throw new HttpException('Erro ao deletar post', HttpStatus.BAD_REQUEST);
    }
  }
}
