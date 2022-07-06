import 'reflect-metadata';
import { Resolver, Query, Ctx, Arg } from 'type-graphql';
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
        @Arg('id') id: string) {
            const parking = await ctx.prisma.parkings.findUnique({
                where: {
                    id
                }
            });
            if(!parking){
                throw new Error(`Parking not found with id ${id}`)
            }

            return parking
    }

}