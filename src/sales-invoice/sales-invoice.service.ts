import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { salesInvoice } from './entities/sales-invoice.entity';
import { invoiceList } from './dto/invoice.dto';
import { customerList } from './entities/customer-list.entity';
import { customerLists } from './dto/customer.dto';


@Injectable()
export class SalesInvoiceService {

    constructor(
        private readonly cn: Connection,
        @InjectRepository(salesInvoice) private salesInvoiceRepository:Repository<salesInvoice>,  
        @InjectRepository(customerList) private customerListRepository:Repository<customerList>,   
    ){}


    async getCode(prefix, table) {
       
        table = "'" + table + "'";
        const querys = await this.cn.query('Call getCode(' + table + ')', []);
    
        let query: any = 1;
        if (querys[0][0]) {
          query = querys[0][0].code.split('24-00')[1];
        }
    
        query = parseFloat(query);
    
        const year = new Date().getFullYear().toString().substr(-2);
        if (!query) {
          query = 1;
        } else {
          query = query + 1;
        }
    
        query = '00' + query;
        return prefix + '-' + year + '-' + query;
      } Service


 




    async getsalesInvoicecode(id:any){
        const salescode =""+id+"";
        const result = await this.cn.query(
            'Call getSalesInvoiceData(' + id + ')',
      [],
        )
        const details: any = result[0][0];
        return details

    }

    async invoiceSave(body){
        console.log('bodybuilding',body);
       const insert = await this.salesInvoiceRepository.save(body);
      return insert;
    }


    // getInvoice 

    getSalesInvoiceItem() {
      return this.salesInvoiceRepository.find();
    }


    // get id 

    getId(id: any) {
      return this.salesInvoiceRepository.findOne({ where: { id: id } });
    }


    // update 

    async invoiceUpdate(body){
      console.log('bodyupdate',body.id)
      const updateCode = body.id;
      const user = await this.salesInvoiceRepository.findOne({
        where: { id: updateCode },
      });
       if(!user){
        return false
       }

       user.invoice_type=body.invoice_type,
       user.invoice_no= body.invoice_no,
       user.date= body.date,
       user.sold_by= body.sold_by,
       user.bill_to= body.bill_to,
       user.mobile_no= body.mobile_no,
       user.client_name= body.client_name,
       user.address= body.address,
       user.place_of_supply= body.place_of_supply,
       user.client_gst= body.client_gst,
       user.type= body.type,
       user.delivery_terms= body.delivery_terms,
       user.remarks= body.remarks,
       user.item_name= body.item_name,
       user.uom= body.uom,
       user.quantity= body.quantity,
       user.sale_price= body.sale_price,
       user.discount= body.discount,
       user.amount= body.amount

       return this.salesInvoiceRepository.save(user);
    }





    // customer Save 


    async customerSave(body){
      
     const insert = await this.customerListRepository.save(body);
    return insert;
  }
    
}
