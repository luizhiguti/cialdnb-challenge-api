import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DDGSearchModule } from 'src/app/ddg-search/ddg-search.module';
import { QueryHistoryModule } from 'src/app/query-history/query-history.module';

@Module({
  imports: [ConfigModule.forRoot(), DDGSearchModule, QueryHistoryModule],
})
export class AppModule {}
