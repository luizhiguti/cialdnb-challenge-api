import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DDGSearchService } from 'src/app/ddg-search/ddg-search.service';
import { SearchInputDto } from 'src/domain/duck-duck-go/search-input';

@ApiTags('DuckDuckGo Search')
@Controller('duckduckgo')
export class DDGSearchController {
  constructor(private readonly service: DDGSearchService) {}

  @Get('search')
  async search(@Query('query') query: string) {
    const response = await this.service.search(query);

    return response;
  }

  @Post('search')
  async searchPost(@Body() body: SearchInputDto) {
    const response = await this.service.search(body.query);

    return response;
  }
}
