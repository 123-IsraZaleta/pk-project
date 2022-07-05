import { NonEmptyArray } from 'type-graphql';
import { VehicleMutation, ParkingMutation } from './mutation';
import { VehicleQuery, ParkingQuery } from './query';

export const queries: NonEmptyArray<Function> = [
    VehicleQuery,
    ParkingQuery,
]

export const mutations: NonEmptyArray<Function> = [
    VehicleMutation,
    ParkingMutation,
]