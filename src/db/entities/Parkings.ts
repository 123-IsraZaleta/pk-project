import 'reflect-metadata'
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

    @Field()
    vehicleArrivalTime: Date
}