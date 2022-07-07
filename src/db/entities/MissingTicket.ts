import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import { Vehicle } from './Vehicle'

@ObjectType()
export class MissingTicket {
    @Field((type)=> ID)
    id: string

    @Field((type) => Vehicle)
    vehicle?: Vehicle

    @Field()
    vehicleId?: string

    @Field((type) => Date)
    timeToCreate: Date // | null

    @Field((type) => Boolean, { defaultValue: false })
    isPayed: boolean
}