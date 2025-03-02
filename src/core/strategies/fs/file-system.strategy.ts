import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import * as path from 'path';
import { FileStorageStrategy } from 'src/domain/fs/file-storage.strategy';
import { QueryHistory } from 'src/domain/query-history/query-history';

@Injectable()
export class FileSystemStrategy implements FileStorageStrategy {
  private filePath: string;

  constructor() {
    this.filePath = path.join(process.cwd(), 'data/query-history.txt');
  }

  async save(history: string): Promise<void> {
    await writeFile(this.filePath, history, 'utf8');
  }

  async load(): Promise<QueryHistory[]> {
    const data = await readFile(this.filePath, 'utf8');

    if (!data) return [];

    const parsedData = JSON.parse(data) as QueryHistory[];
    return parsedData;
  }
}
