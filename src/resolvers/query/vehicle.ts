import 'reflect-metadata';
import { Resolver, Query, Ctx, InputType, Field, Arg  } from 'type-graphql';
import { Vehicle } from '../../db/entities';
import { Context } from '../../config/context';

@Resolver(Vehicle)
export class VehicleQuery {

    @Query(() => [Vehicle])
    async allVehicles(@Ctx() ctx: Context){
        return ctx.prisma.vehicle.findMany()
    }

    @Query(() => Vehicle)
    async vehicleById(
        @Arg('id') id: string,
        @Ctx() ctx: Context) {
            const vehicle = await ctx.prisma.vehicle.findUnique({
                where: {
                    id
                }
            });
            if(!vehicle){
                throw new Error(`User not found with id ${id}`)
            }

            return vehicle
    }
}