import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma } from '@prisma/client';
import SaveTaskDto from '../UseCase/SaveTask/SaveTaskDto';

@Injectable()
export default class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async create(data: SaveTaskDto): Promise<SaveTaskDto> {
    return this.prisma.task.create({ data });
  }

  async save(
    data:
      | Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>
      | Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>,
  ) {
                console.log("=== BEFORE UPDATE ===");
                console.log(`Data : ${data}`);
    if (!data.id) {
        return this.prisma.task.create({
          data: {
            name: String(data.name),
          },
        });
      } else {
          console.log("=== BEFORE UPDATE ===");
          console.log(`Data : ${data}`);
        return this.prisma.task.update({
          where: { id: Number(data.id) },
          data: {
            name: { set: String(data.name) },
          },
        });
      }
  }


  async delete(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }

}

