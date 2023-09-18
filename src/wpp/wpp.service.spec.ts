import { Test, TestingModule } from '@nestjs/testing';
import { WppService } from './wpp.service';

describe('WppService', () => {
  let service: WppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WppService],
    }).compile();

    service = module.get<WppService>(WppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
