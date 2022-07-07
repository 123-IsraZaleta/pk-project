import 'reflect-metadata';
import { Resolver, Query, Ctx, InputType, Field, Mutation, Arg, FieldResolver, Root } from 'type-graphql';
import { Context } from '../../config/context';
import { Vehicle } from '../../db/entities';
import { VehicleCreateInput } from './input';
import { Parkings } from '../../db/entities/Parkings';

@Resolver(Vehicle)
export class VehicleMutation {

    @Mutation((returns) => Vehicle)
    async signupVehicle(
        @Ctx() ctx: Context,
        @Arg('data') data: VehicleCreateInput 
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
