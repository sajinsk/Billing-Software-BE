import { Module } from '@nestjs/common';
import { SalesInvoiceService } from './sales-invoice.service';
import { SalesInvoiceController } from './sales-invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { salesInvoice } from './entities/sales-invoice.entity';
import { customerList } from './entities/customer-list.entity';

@Module({
  controllers: [SalesInvoiceController],
  providers: [SalesInvoiceService],
  imports:[TypeOrmModule.forFeature([salesInvoice,customerList])]
})
export class SalesInvoiceModule {}
