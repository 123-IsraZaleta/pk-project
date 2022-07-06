import 'reflect-metadata';
import { Resolver, Query, Ctx, InputType, Field, Mutation, Arg, FieldResolver, Root } from 'type-graphql';
import { Context } from '../../config/context';
import { MissingTicket } from '../../db/entities/MissingTicket';
import { MissingTicketCreateInput, MissingTicketPayInput } from './input';

@Resolver(MissingTicket)
export class MissingTicketMutation {

    @Mutation((returns) => MissingTicket)
    async newMissingTicket(
        @Ctx() ctx: Context,
        @Arg('data') data: MissingTicketCreateInput 
    ): Promise<MissingTicket> {
        return ctx.prisma.missingTicket.create({
            data: {
                vehicleId: data.vehicleId,
                timeToCreate: data.timeToCreate,
                isPayed: data.isPayed
            }
        })
    }

    @Mutation((returns) => MissingTicket)
    async payMissingTicket(
        @Ctx() ctx: Context,
        @Arg('data') data: MissingTicketPayInput
    ): Promise<MissingTicket> {
        return ctx.prisma.missingTicket.update({
            where: {
                vehicleId: data.vehicleId
            },
            data: {
                isPayed: data.isPayed
            }
        })
    }


}
