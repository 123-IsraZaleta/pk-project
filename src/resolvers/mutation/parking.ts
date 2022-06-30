import 'reflect-metadata';
import { Resolver, Query, Ctx, InputType, Field, Mutation, Arg } from 'type-graphql';
import { Context } from '../../config/context';
import { Parkings } from '../../db/entities';
import { ParkingsCreateInput } from './input';

@Resolver(Parkings)
export class ParkingMutation {

    @Mutation((returns) => Parkings)
    async signupParking(
        @Arg('data') data: ParkingsCreateInput, 
        @Ctx() ctx: Context
    ): Promise<Parkings> {
        return ctx.prisma.parkings.create({
            data: {
                vehicleId: data.vehicleId,
                vehicleArrivalTime: data.vehicleArrivalTime,
            }
        })
    }
}