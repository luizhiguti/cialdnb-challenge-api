import { Module } from '@nestjs/common';
import { QueryHistoryController } from 'src/app/query-history/query-history.controller';
import { QueryHistoryService } from 'src/app/query-history/query-history.service';
import { FileSystemStrategy } from 'src/core/strategies/fs/file-system.strategy';
import { VercelBlobStrategy } from 'src/core/strategies/fs/vercel-blob.strategy';

@Module({
  imports: [],
  providers: [VercelBlobStrategy, FileSystemStrategy, QueryHistoryService],
  exports: [QueryHistoryService],
  controllers: [QueryHistoryController],
})
export class QueryHistoryModule {}
