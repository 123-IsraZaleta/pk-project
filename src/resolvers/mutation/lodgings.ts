import 'reflect-metadata';
import { Resolver, Query, Ctx, InputType, Field, Mutation, Arg } from 'type-graphql';
import { Context } from '../../config/context';
import { Lodgings } from '../../db/entities';
import { LodgingsCreateInput } from './input';

@Resolver(Lodgings)
export class LodgingsMutation {

    @Mutation((returns) => Lodgings)
    async signupLodgings(
        @Arg('data') data: LodgingsCreateInput, 
        @Ctx() ctx: Context
    ): Promise<Lodgings> {
        return ctx.prisma.lodgings.create({
            data: {
                vehicleId: data.vehicleId,
                vehicleArrivalTime: data.vehicleArrivalTime
            }
        })
    }
}