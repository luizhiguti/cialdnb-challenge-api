import { Injectable } from '@nestjs/common';
import { put, list } from '@vercel/blob';
import { FileStorageStrategy } from 'src/domain/fs/file-storage.strategy';
import { QueryHistory } from 'src/domain/query-history/query-history';

@Injectable()
export class VercelBlobStrategy implements FileStorageStrategy {
  private filePath = 'query-history.txt';

  async save(history: string): Promise<void> {
    await put(this.filePath, history, {
      access: 'public',
      contentType: 'text/plain',
    });
  }

  async load(): Promise<QueryHistory[]> {
    const { blobs } = await list({ prefix: this.filePath, limit: 1 });
    if (blobs.length === 0) return [];

    const response = await fetch(blobs[0].url);
    const data = (await response.json()) as QueryHistory[];

    return data;
  }
}
