import { QueryHistory } from 'src/domain/query-history/query-history';

export interface FileStorageStrategy {
  save(data: string): Promise<void>;
  load(): Promise<QueryHistory[]>;
}
