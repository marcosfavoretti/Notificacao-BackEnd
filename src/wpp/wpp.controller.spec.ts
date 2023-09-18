import { Test, TestingModule } from '@nestjs/testing';
import { WppController } from './wpp.controller';
import { WppService } from './wpp.service';

describe('WppController', () => {
  let controller: WppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WppController],
      providers: [WppService],
    }).compile();

    controller = module.get<WppController>(WppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
