import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { SalesInvoiceService } from './sales-invoice.service';

@Controller('sales-invoice')
export class SalesInvoiceController {

    constructor(private si : SalesInvoiceService) {
        
    }
    @Get('invoice-code/:code')
async getCode(@Param('id') id: string, @Res() res, @Req() req) {
  console.log('salesinvoiceId', id);
  try {
    const check = await this.si.getsalesInvoicecode(id);
    console.log('Check:', check);

    if (check) {
      return res.send({
        status: true,
        data: check,
      });
    } else {
      return res.status(400).send({ status: false, msg: 'invalid request' });
    }
  } catch (error) {
    console.error('Error:', error);
  }
}




@Post('invoice-save')
async invoiceSave(@Body() body, @Res() res, @Req() req) {
const reqdata: any = body

const check = await this.si.invoiceSave(reqdata)
 if (check) {
      return res.send({
        status: true,
        data: check,
      });
    } else {
      return res.status(400).send({ status: false, msg: 'invalid request' });
    }
}


// getInvoice 

@Get('getInvoice')
getSalesInvoiceItem() {
  return this.si.getSalesInvoiceItem();
}



// get id 

@Get('getInvoiceId/:id')
  async getId(@Param('id') id: string, @Res() res, @Req() req) {
    console.log('sajin', id);
    try {
      const check = await this.si.getId(id);
      console.log('Check:', check);

      if (check) {
        return res.send({
          status: true,
          data: check,
        });
      } else {
        return res.status(400).send({ status: false, msg: 'invalid request' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  // update 

  @Post('invoice-update')
  async invoiceUpdate(@Body() body, @Res() res, @Req() req) {
    const check = await this.si.invoiceUpdate(body);
    if (check) {
      return res.send({
        status: true,
        msg: 'Sales Invoice Updated successfully ',
      });
    } else {
      return res.send({ status: false, msg: 'invalid request' }).status(400);
    }
  }



  @Get('get-code')
  async getUniqueCode(@Res() res, @Req() req) {
    const reqdata: any = req.query;
    console.log(reqdata);
    const check = await this.si.getCode(reqdata.prefix, reqdata.tableName);
    if (check) {
      return res.send({
        status: true,
        code: check,
      });
    } else {
      return res.status(400).send({ status: false, msg: 'invalid request' });
    }
  }

}
