import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import { Lodgings } from './Lodgings';
import { Parkings } from './Parkings'

@ObjectType()
export class Vehicle {
    @Field((type)=> ID)
    id: string

    @Field((type) => String, { nullable: true })
    plates: string | null

    @Field()
    color: string

    @Field()
    model: string 

    @Field((type) => Date, { nullable: true })
    arrivalTime: Date | null

    @Field((type) => Date) //{ nullable: true })
    departureTime?: Date | null

    @Field((type) => Boolean, { defaultValue: true })
    isInside: boolean

    @Field((type) => Parkings)
    parking?: Parkings | null

    @Field((type) => Lodgings)
    lodgings?: Lodgings | null
}