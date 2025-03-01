import {
  DDGResponse,
  SearchResult,
} from 'src/domain/duck-duck-go/search-response';

export abstract class DDGSearchMapper {
  static mapDDGResponseSearchResult(entry: DDGResponse): SearchResult[] {
    return entry.RelatedTopics.reduce<SearchResult[]>((results, topic) => {
      if (topic.Text && topic.FirstURL) {
        results.push({ title: topic.Text, url: topic.FirstURL });
      }

      return results;
    }, []);
  }
}
