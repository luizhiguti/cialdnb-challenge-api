import { Injectable, OnModuleInit } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import * as path from 'path';
import { QueryHistory } from 'src/domain/query-history/query-history';

@Injectable()
export class QueryHistoryService implements OnModuleInit {
  private file: string;
  private history: QueryHistory[] = [];
  constructor() {
    this.file = path.join('data/query-history.txt');
  }

  async onModuleInit() {
    await this.loadFromFile();
  }

  list() {
    return this.history;
  }

  async saveQuery(query: string) {
    this.history.push({ query });
    await this.saveToFile();
  }

  async loadFromFile() {
    const data = await readFile(this.file, 'utf8');

    if (!data) return;

    const parsedData = JSON.parse(data) as QueryHistory[];
    this.history = parsedData;
  }

  async saveToFile() {
    await writeFile(this.file, JSON.stringify(this.history));
  }
}
