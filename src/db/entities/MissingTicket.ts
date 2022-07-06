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

/*
model MissingTicket {
  id                    String          @id @default(auto()) @map("_id") @db.ObjectId
  vehicle               Vehicle         @relation(fields: [vehicleId], references: [id])
  vehicleId             String          @unique @db.ObjectId
  isPayed               Boolean         @default(false)
}
*/