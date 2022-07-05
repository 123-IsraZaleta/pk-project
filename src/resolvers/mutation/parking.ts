import 'reflect-metadata';
import { Resolver, Query, Ctx, InputType, Field, Mutation, Arg } from 'type-graphql';
import { Context } from '../../config/context';
import { Parkings } from '../../db/entities';
import { ParkingCreateInput, ParkingsExitInput, LodgingCreateInput } from './input';

@Resolver(Parkings)
export class ParkingMutation {

    @Mutation((returns) => Parkings)
    async signupParking( 
        @Ctx() ctx: Context,
        @Arg('data') data: ParkingCreateInput
    ): Promise<Parkings> {
        return ctx.prisma.parkings.create({
            data: {
                vehicleId: data.vehicleId,
                vehicleExitTime: data.vehicleExitTime,
                isPayed: data.isPayed
            }
        })
    }

    @Mutation((returns) => Parkings)
    async signupLodging(
        @Ctx() ctx: Context,
        @Arg('data') data: LodgingCreateInput
    ): Promise<Parkings> {
        return ctx.prisma.parkings.update({
            where: {
                id: data.id
            },
            data: {
                parkingType: data.parkingType
            }
        })
    }

    @Mutation((returns) => Parkings)
    async exitParkings(
        @Ctx() ctx: Context,
        @Arg('data') data: ParkingsExitInput
    ): Promise<Parkings> {
        return ctx.prisma.parkings.update({
            where: { 
                id: data.id 
            },
            data: { 
                vehicleExitTime: data.vehicleExitTime,
                isPayed: data.isPayed,
            }
          })
    }
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