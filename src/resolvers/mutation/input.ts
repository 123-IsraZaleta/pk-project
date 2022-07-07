import 'reflect-metadata';
import { InputType, Field, registerEnumType } from 'type-graphql';
import { ParkingType } from '../../db/entities/Parkings';
@InputType()
export class VehicleCreateInput {   
    @Field()
    plates: string;

    @Field()
    color: string;

    @Field()
    model: string;
}

@InputType()
export class ParkingCreateInput {  
    @Field()
    vehicleId: string;

    @Field()
    isPayed: boolean;

    @Field((type) => ParkingType)
    parkingType: ParkingType;

}

@InputType()
export class LodgingCreateInput {
    @Field()
    id: string;

    @Field((type) => ParkingType)
    parkingType: ParkingType;    
}

@InputType()
export class ParkingsExitInput {
    @Field()
    id: string;

    @Field()
    vehicleExitTime: Date;

    @Field()
    isPayed: boolean;
}

@InputType()
export class MissingTicketCreateInput {
    @Field()
    vehicleId: string;

    @Field()
    timeToCreate: Date;

    @Field()
    isPayed: boolean;
}

@InputType()
export class MissingTicketPayInput {
    @Field()
    vehicleId: string;

    @Field()
    isPayed: boolean;
}

/*
model MissingTicket {
  id                    String          @id @default(auto()) @map("_id") @db.ObjectId
  vehicle               Vehicle         @relation(fields: [vehicleId], references: [id])
  vehicleId             String          @unique @db.ObjectId
  isPayed               Boolean         @default(false)
}
*/