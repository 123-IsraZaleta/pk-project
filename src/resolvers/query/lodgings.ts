import 'reflect-metadata';
import { Resolver, Query, Ctx, Arg  } from 'type-graphql';
import { Lodgings } from '../../db/entities';
import { Context } from '../../config/context';

@Resolver(Lodgings)
export class LodgingsQuery {

    @Query(() => [Lodgings])
    async allLodgings(@Ctx() ctx: Context){
        return ctx.prisma.lodgings.findMany()
    }

    @Query(() => Lodgings)
    async lodgingById(
        @Arg('id') id: string,
        @Ctx() ctx: Context) {
            const lodging = await ctx.prisma.lodgings.findUnique({
                where: {
                    id
                }
            });
            if(!lodging){
                throw new Error(`User not found with id ${id}`)
            }

            return lodging
    }
}