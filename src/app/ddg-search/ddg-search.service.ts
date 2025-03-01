import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { QueryHistoryService } from 'src/app/query-history/query-history.service';
import { DDGSearchMapper } from 'src/core/mappers/duck-duck-go-search.mapper';
import { DDGResponse } from 'src/domain/duck-duck-go/search-response';

@Injectable()
export class DDGSearchService {
  private duckDuckGoUrl: string;
  constructor(
    private readonly http: HttpService,
    private readonly queryHistoryService: QueryHistoryService,
  ) {
    this.duckDuckGoUrl = 'https://api.duckduckgo.com';
  }

  async search(query: string) {
    const params = new URLSearchParams({
      q: query,
      format: 'json',
    });

    const response = await this.http.axiosRef.get<DDGResponse>(
      this.duckDuckGoUrl,
      {
        params,
      },
    );

    await this.queryHistoryService.saveQuery(query);

    return DDGSearchMapper.mapDDGResponseSearchResult(response.data);
  }
}
