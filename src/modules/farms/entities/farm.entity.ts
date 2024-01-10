import { User } from "modules/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
//name, address, coordinates, size (e.g 21.5) & yield (e.g. 8.5)
@Entity()
export class Farm {
  @PrimaryGeneratedColumn("uuid")
  public readonly id: string;

  @Column({ unique: true })
  public name: string;

  @Column({nullable: true})
  public address: string;

  @Column("simple-json", {nullable: true})
  public coordinates: {lat: number, lng: number};

  @Column()
  public size: number;

  @Column()
  public yield: number;

  @ManyToOne(() => User, (user) => user.farms)
  public user: User
}
