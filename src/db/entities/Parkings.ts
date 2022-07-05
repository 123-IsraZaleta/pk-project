import 'reflect-metadata'
import { ParkingType } from '@prisma/client'
import { ObjectType, Field, ID } from 'type-graphql'
import { Vehicle } from './Vehicle'
@ObjectType()
export class Parkings {
    @Field((type)=> ID)
    id: string

    @Field((type) => Vehicle)
    vehicle?: Vehicle

    @Field()
    vehicleId?: string

    @Field((type) => Date)
    vehicleExitTime?: Date

    @Field((type) => Boolean, { defaultValue: true })
    isPayed: boolean

    @Field((type) => ParkingType)
    parkingType: ParkingType
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

registerEnumType(ParkingType, {
  name: "ParkingType", // this one is mandatory
  description: "The parkings type", // this one is optional
});


*/