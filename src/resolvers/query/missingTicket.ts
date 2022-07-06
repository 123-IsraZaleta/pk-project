import 'reflect-metadata';
import { Resolver, Query, Ctx, Arg } from 'type-graphql';
import { MissingTicket } from '../../db/entities';
import { Context } from '../../config/context';

@Resolver(MissingTicket)
export class MissingTicketQuery {

    @Query(() => [MissingTicket])
    async allMissingTicket(@Ctx() ctx: Context){
        return ctx.prisma.missingTicket.findMany()
    }

    @Query(() => MissingTicket)
    async missingTicketById(
        @Ctx() ctx: Context,
        @Arg('id') id: string)
         {
            const missingTicket = await ctx.prisma.missingTicket.findUnique({
                where: {
                    id
                }
            });
            if(!missingTicket){
                throw new Error(`Missing Ticket not found with id ${id}`)
            }

            return missingTicket
    }

}