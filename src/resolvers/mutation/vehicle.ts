import 'reflect-metadata';
import { Resolver, Query, Ctx, InputType, Field, Mutation, Arg, FieldResolver, Root } from 'type-graphql';
import { Context } from '../../config/context';
import { Vehicle } from '../../db/entities';
import { VehicleCreateInput } from './input';
import { Parkings } from '../../db/entities/Parkings';

@Resolver(Vehicle)
export class VehicleMutation {

    /*@FieldResolver()
    async parkings(
        @Root() vehicle:Vehicle,
        @Ctx() ctx:Context
    ): Promise<Parkings>{
        return ctx.prisma.vehicle
            .findUnique({ where: { id: vehicle.id, }, })
            .parkings()
    }

    @FieldResolver()
    async lodgings(
        @Root() vehicle:Vehicle,
        @Ctx() ctx:Context
    ): Promise<Lodgings[]>{
        return ctx.prisma.lodgings
            .findUnique({ where: { id: vehicle.id, }, })
            .lodgings()
    }*/

    @Mutation((returns) => Vehicle)
    async signupVehicle(
        @Arg('data') data: VehicleCreateInput, 
        @Ctx() ctx: Context
    ): Promise<Vehicle> {
        return ctx.prisma.vehicle.create({
            data: {
                plates: data.plates,
                color: data.color,
                model: data.model
            }
        })
    }
}
