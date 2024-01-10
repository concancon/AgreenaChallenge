import config from "config/config";
import { Express } from "express";
import { setupServer } from "server/server";
import { clearDatabase, disconnectAndClearDatabase } from "helpers/utils";
import http, { Server } from "http";
import ds from "orm/orm.config";
import { CreateUserDto } from "../../users/dto/create-user.dto";
import { UsersService } from "../../users/users.service";
import { FarmsService } from "../farm.service";
import { CreateFarmDto } from "../dto/create-farm.dto";
import { Farm } from "../entities/farm.entity";

describe("FarmsService", () => {
  let app: Express;
  let server: Server;

  let usersService: UsersService;
  let farmsService: FarmsService;
  
  beforeAll(async () => {
    app = setupServer();
    await ds.initialize();

    server = http.createServer(app).listen(config.APP_PORT);
  });

  afterAll(async () => {
    await disconnectAndClearDatabase(ds);
    server.close();
  });

  beforeEach(async () => {
    await clearDatabase(ds);
    usersService = new UsersService();
    farmsService = new FarmsService();
  });

  describe(".createFarm", () => {
    const createUserDto: CreateUserDto = { email: "user@test.com", password: "password" };

    it("should create new user", async () => {
      const createdUser = await usersService.createUser(createUserDto);
        
        
        const createFarmDto: CreateFarmDto = {user: createdUser, name: "el caney", address: "Vereda La Cabaña. 6 kms más abajo de la iglesia de La Cabaña o 4 kms más arriba de, Manizales-La Cabaña-Tres Puertas, Manizales, Caldas", coordinates: {lat: 2.7, lng: 88.9 }, size: 77.2, yield: 88}

        const createdFarm = await farmsService.createFarm(createFarmDto);
        expect(createdFarm).toBeInstanceOf(Farm);
    });
  });
});
