import 'reflect-metadata';
import { InputType, Field, registerEnumType} from 'type-graphql';

enum ParkingType {
    PARKING,
    LODGING
}

registerEnumType(ParkingType, {
  name: "ParkingType", // this one is mandatory
  description: "The parking types", // this one is optional
});

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
    vehicleExitTime: Date;

    @Field()
    isPayed: boolean;

    @Field(type => ParkingType)
    parkingType: ParkingType;

}

@InputType()
export class LodgingCreateInput {
    @Field()
    id: string;

    @Field(type => ParkingType)
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

/*
model Parkings {
  id                    String          @id @default(auto()) @map("_id") @db.ObjectId
  vehicle               Vehicle         @relation(fields: [vehicleId], references: [id])
  vehicleId             String          @unique @db.ObjectId
  vehicleExitTime       DateTime?     
  isPayed               Boolean         @default(false)
  // totalAmount           Float
  parkingType           ParkingType     @default(PARKING)
}
*/