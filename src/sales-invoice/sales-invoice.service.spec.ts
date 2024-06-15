import { Test, TestingModule } from '@nestjs/testing';
import { SalesInvoiceService } from './sales-invoice.service';

describe('SalesInvoiceService', () => {
  let service: SalesInvoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesInvoiceService],
    }).compile();

    service = module.get<SalesInvoiceService>(SalesInvoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
