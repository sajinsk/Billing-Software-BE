import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class customerList{

    @PrimaryGeneratedColumn('uuid')
    
    id!:string;

    @Column({type:'varchar'})
    customer_id:string

    @Column({type:'varchar'})
    customer_name: string;

    @Column({type:'varchar'})
    mobile_no:string;

    @Column({type:'varchar'})
    address:string;

    @Column({ type: 'varchar' })
    city_area: string;

    @Column({ type: 'varchar' })
    state: string;
    
    @Column({ type: 'varchar' })
    remarks: string;
   
    
   

}