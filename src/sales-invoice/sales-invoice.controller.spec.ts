import { Test, TestingModule } from '@nestjs/testing';
import { SalesInvoiceController } from './sales-invoice.controller';

describe('SalesInvoiceController', () => {
  let controller: SalesInvoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesInvoiceController],
    }).compile();

    controller = module.get<SalesInvoiceController>(SalesInvoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
