import 'reflect-metadata';
import { Resolver, Query, Ctx, InputType, Field  } from 'type-graphql';
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
        @Ctx() ctx: Context, 
        params: { id: string }) {
            const lodging = await ctx.prisma.lodgings.findUnique({
                where: {
                    id: params.id
                }
            });
            if(!lodging){
                throw new Error(`User not found with id ${params.id}`)
            }

            return lodging
    }
}