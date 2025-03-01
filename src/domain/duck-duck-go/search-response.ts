export interface DDGResponse {
  Abstract: string;
  AbstractSource: string;
  AbstractText: string;
  AbstractURL: string;
  RelatedTopics: DDGResult[];
  Results: DDGResult[];
}

export interface DDGResult {
  FirstURL: string;
  Icon: DDGIcon;
  Result: string;
  Text: string;
}

export interface DDGIcon {
  Height: number;
  URL: string;
  Width: number;
}

export interface SearchResult {
  title: string;
  url: string;
}
