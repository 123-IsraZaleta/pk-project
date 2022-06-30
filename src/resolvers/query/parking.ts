import 'reflect-metadata';
import { Resolver, Query, Ctx, InputType, Field  } from 'type-graphql';
import { Parkings } from '../../db/entities';
import { Context } from '../../config/context';

@Resolver(Parkings)
export class ParkingQuery {

    @Query(() => [Parkings])
    async allParkings(@Ctx() ctx: Context){
        return ctx.prisma.parkings.findMany()
    }

    @Query(() => Parkings)
    async parkingById(
        @Ctx() ctx: Context, 
        params: { id: string }) {
            const parking = await ctx.prisma.parkings.findUnique({
                where: {
                    id: params.id
                }
            });
            if(!parking){
                throw new Error(`User not found with id ${params.id}`)
            }

            return parking
    }

}