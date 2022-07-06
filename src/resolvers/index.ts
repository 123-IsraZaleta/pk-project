import { NonEmptyArray } from 'type-graphql';
import { VehicleMutation, ParkingMutation, MissingTicketMutation } from './mutation';
import { VehicleQuery, ParkingQuery, MissingTicketQuery } from './query';

export const queries: NonEmptyArray<Function> = [
    VehicleQuery,
    ParkingQuery,
    MissingTicketQuery
]

export const mutations: NonEmptyArray<Function> = [
    VehicleMutation,
    ParkingMutation,
    MissingTicketMutation
]