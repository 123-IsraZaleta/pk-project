import { NonEmptyArray } from 'type-graphql';
import { VehicleMutation, ParkingMutation, LodgingsMutation } from './mutation';
import { VehicleQuery, ParkingQuery, LodgingsQuery } from './query';

export const queries: NonEmptyArray<Function> = [
    VehicleQuery,
    ParkingQuery,
    LodgingsQuery
]

export const mutations: NonEmptyArray<Function> = [
    VehicleMutation,
    ParkingMutation,
    LodgingsMutation
]