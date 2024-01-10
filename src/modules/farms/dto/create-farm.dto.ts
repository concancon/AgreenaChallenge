import { IsEmail, IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";
import { User } from "modules/users/entities/user.entity";
//name, address, coordinates, size (e.g 21.5) & yield 
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateFarmDto:
 *      type: object
 *      required:
 *        - user
 *        - name
 *        - address
 *        - coordinates
 *        - size
 *        - yield   
 *      properties:
 *        user:
 *          type: User
 *        name:
 *          type: string
 *          default: name
 *        address:
 *          type: string
 *          default: address
 *        coordinates:
 *          type: coordinate
 *        size:
 *          type: number
 *        yield:
 *          type: number    
 */
export class CreateFarmDto {
  @IsEmail()
  @IsNotEmpty()
  public user: User;

  @IsString()
  @IsNotEmpty()
  public name: string;
  
  @IsString()
  @IsNotEmpty()
  public address: string;
    
  @IsObject()
  @IsNotEmpty()
  public coordinates: { lat: number, lng: number };
  
  @IsNumber()
  @IsNotEmpty()
  public size: number;    
  
  @IsNumber()
  @IsNotEmpty()
  public yield: number;  

    
}
