import 'reflect-metadata';
import * as tq from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { GraphQLScalarType } from 'graphql';
import { DateTimeResolver } from 'graphql-scalars';

import { context } from './config/context';
import { mutations, queries } from './resolvers';

const app = async () => {
    const schema = await tq.buildSchema({
        resolvers: [ ...mutations, ...queries ],
        scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }]
    })

    new ApolloServer({schema, context}).listen({ port: 4040 }, () => {
        console.log('server ready 🚀');
    })
}

app();