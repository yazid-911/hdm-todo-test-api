import { BadRequestException, Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from '../SaveTask/SaveTaskDto';
import TaskRepository from '../../Repositories/TaskRepository';

@Injectable()
export default class SaveTaskUseCase implements UseCase<Promise<Task>, [dto: SaveTaskDto]> {
    constructor(private readonly taskRepository: TaskRepository) {}

   async handle(dto: SaveTaskDto) {
    try {
      const task = await this.taskRepository.save(dto);
      return task;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
   }

  }

