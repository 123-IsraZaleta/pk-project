import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
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

    @Field((type) => Parkings)
    parking?: Parkings | null
}