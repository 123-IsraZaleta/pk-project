import 'reflect-metadata'
import { ObjectType, Field, ID, registerEnumType } from 'type-graphql'
import { Vehicle } from './Vehicle'

export enum ParkingType {
  lodging = "LODGING",
  parking = "PARKING",
}

registerEnumType(ParkingType, {
  name: "ParkingType", // this one is mandatory
  description: "The basic directions", // this one is optional
});
@ObjectType()
export class Parkings {
    @Field((type)=> ID)
    id: string

    @Field((type) => Vehicle, { nullable: true })
    vehicle?: Vehicle | null

    @Field()
    vehicleId?: string

    @Field((type) => Date)
    vehicleExitTime?: Date | null

    @Field((type) => Boolean, { defaultValue: true })
    isPayed: boolean

    @Field((type) => ParkingType)
    parkingType: ParkingType
}