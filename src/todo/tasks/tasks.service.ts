import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new Task();
    task.title = createTaskDto.title;
    return this.taskRepository.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: string) {
    return this.taskRepository.findOne(id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    console.log(id);
    console.log(updateTaskDto);
    return this.taskRepository.update(id, updateTaskDto);
  }

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
