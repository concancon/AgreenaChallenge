import { UnprocessableEntityError } from "errors/errors";
import { FindOptionsWhere, Repository } from "typeorm";

import { Farm } from "./entities/farm.entity";
import dataSource from "orm/orm.config";
import { CreateFarmDto } from "./dto/create-farm.dto";
import { User } from "modules/users/entities/user.entity";

export class FarmsService {
  private readonly usersRepository: Repository<User>;
  private readonly farmRepository: Repository<Farm>;

  constructor() {
    this.usersRepository = dataSource.getRepository(User);
    this.farmRepository = dataSource.getRepository(Farm);
  }

  public async createFarm(data: CreateFarmDto): Promise<Farm> {
    const { user } = data;

    // eslint-disable-next-line max-len
    const existingUser = await this.usersRepository.findOneBy({ id: user.id }); //should we handle this constraint ourselves or let the database foreign key do it?
    if (!existingUser) throw new UnprocessableEntityError("This user doesnt exist");


    const newFarm = this.farmRepository.create(data);
    return this.farmRepository.save(newFarm);
  }

  public async findOneBy(param: FindOptionsWhere<Farm>): Promise<Farm | null> {
    return this.farmRepository.findOneBy({ ...param });
  }

  //TODO: add get all method

}
