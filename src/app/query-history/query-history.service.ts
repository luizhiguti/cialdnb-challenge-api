import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileSystemStrategy } from 'src/core/strategies/fs/file-system.strategy';
import { VercelBlobStrategy } from 'src/core/strategies/fs/vercel-blob.strategy';
import { FileStoragesEnum } from 'src/domain/enums/file-storages.enum';
import { FileStorageStrategy } from 'src/domain/fs/file-storage.strategy';
import { QueryHistory } from 'src/domain/query-history/query-history';

@Injectable()
export class QueryHistoryService implements OnModuleInit {
  private history: QueryHistory[] = [];
  private fsStrategies = new Map<FileStoragesEnum, FileStorageStrategy>();
  constructor(
    private readonly configService: ConfigService,
    vercelStrategy: VercelBlobStrategy,
    fsStrategy: FileSystemStrategy,
  ) {
    this.fsStrategies.set(FileStoragesEnum.VERCEL, vercelStrategy);
    this.fsStrategies.set(FileStoragesEnum.FILE_SYSTEM, fsStrategy);
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
    const storage: FileStoragesEnum = this.configService.get(
      'FILE_STORAGE_STRATEGY',
      FileStoragesEnum.FILE_SYSTEM,
    );
    const strategy = this.fsStrategies.get(storage);

    if (!strategy) return;

    this.history = await strategy.load();
  }

  async saveToFile() {
    const storage: FileStoragesEnum = this.configService.get(
      'FILE_STORAGE_STRATEGY',
      FileStoragesEnum.FILE_SYSTEM,
    );
    const strategy = this.fsStrategies.get(storage);

    if (!strategy) return;

    await strategy.save(JSON.stringify(this.history));
  }
}
