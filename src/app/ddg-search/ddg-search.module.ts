import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DDGSearchController } from 'src/app/ddg-search/ddg-search.controller';
import { DDGSearchService } from 'src/app/ddg-search/ddg-search.service';
import { QueryHistoryModule } from 'src/app/query-history/query-history.module';

@Module({
  imports: [HttpModule, QueryHistoryModule],
  providers: [DDGSearchService],
  controllers: [DDGSearchController],
})
export class DDGSearchModule {}
