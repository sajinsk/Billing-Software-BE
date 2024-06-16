import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesInvoiceController } from './sales-invoice/sales-invoice.controller';
import { SalesInvoiceModule } from './sales-invoice/sales-invoice.module';
import { SalesInvoiceService } from './sales-invoice/sales-invoice.service';
import { salesInvoice } from './sales-invoice/entities/sales-invoice.entity';
import { customerList } from './sales-invoice/entities/customer-list.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "127.0.0.1",
    "port": 5432,
    "username": "postgres",
    "password": "root",
    "database": "postgres",
   "synchronize": true,
   "autoLoadEntities": true
}),TypeOrmModule.forFeature([salesInvoice,customerList]), SalesInvoiceModule,
],
  controllers: [AppController, SalesInvoiceController],
  providers: [AppService,SalesInvoiceService],
})
export class AppModule {}
