import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QueryHistoryService } from 'src/app/query-history/query-history.service';

@ApiTags('Query History')
@Controller('query-history')
export class QueryHistoryController {
  constructor(private readonly service: QueryHistoryService) {}

  @Get('all')
  getAll() {
    const response = this.service.list();

    return response;
  }
}
