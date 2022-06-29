import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
// 데코레이터 *@ : 쉽게 이야기하면 함수다. 왜 쓸까?
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  _id!: string;

  // @PrimaryGeneratedColumn("increment")
  // boardId!: string;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "text" })
  price!: number;

  // @Column({ type: "timestamp", defult: new Date(), nullable: true })
  // createdAt!: String;
}
