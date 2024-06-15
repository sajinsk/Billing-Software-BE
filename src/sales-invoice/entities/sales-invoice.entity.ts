import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class salesInvoice{

    @PrimaryGeneratedColumn('uuid')
    
    id!:string;

    @Column({type:'varchar'})
    invoice_type:string

    @Column({type:'varchar'})
    invoice_no: string;

    @Column({type:'varchar'})
    date:string;

    @Column({type:'varchar'})
    sold_by:string;

    @Column({ type: 'varchar' })
    bill_to: string;
    @Column({ type: 'varchar' })
    mobile_no: string;
    @Column({ type: 'varchar' })
    client_name: string;
    @Column({ type: 'varchar' })
    address: string;
    @Column({ type: 'varchar' })
    place_of_supply: string;
    @Column({ type: 'varchar' })
    client_gst: string;
    @Column({ type: 'varchar' })
    type: string;

    @Column({ type: 'varchar' })
    delivery_terms: string;

    @Column({ type: 'varchar' })
    remarks: string;

    @Column({ type: 'varchar' })
    item_name: string;
    @Column({ type: 'varchar' })
    uom: string;
    @Column({ type: 'varchar' })
    quantity: string;
    @Column({ type: 'varchar' })
    sale_price: string;
    @Column({ type: 'varchar' })
    discount: string;
    @Column({ type: 'varchar' })
    amount: string;
  propertyToUpdate: any;
   

}