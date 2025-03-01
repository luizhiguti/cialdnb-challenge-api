import { Module } from '@nestjs/common';
import { QueryHistoryController } from 'src/app/query-history/query-history.controller';
import { QueryHistoryService } from 'src/app/query-history/query-history.service';

@Module({
  imports: [],
  providers: [QueryHistoryService],
  exports: [QueryHistoryService],
  controllers: [QueryHistoryController],
})
export class QueryHistoryModule {}
