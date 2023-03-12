import { BaseEntity } from "src/common/Mysql/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity extends BaseEntity{
    


@Column()
firstName: string;


@Column()
lastName: string;

@Column({ default: true })
isActive: boolean;

}