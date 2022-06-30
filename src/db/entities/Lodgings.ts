import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import { Vehicle } from './Vehicle'

@ObjectType()
export class Lodgings {
    @Field((type)=> ID)
    id: string

    @Field((type) => Vehicle, { nullable: true })
    vehicle?: Vehicle

    @Field()
    vehicleId?: string

    /*@Field()
    checkInTime: Date*/
}