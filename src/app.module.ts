import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
GI
@Module({
  imports: [TaskModule],
})
export class AppModule {}
