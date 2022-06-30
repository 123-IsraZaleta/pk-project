import 'reflect-metadata';
import { InputType, Field } from 'type-graphql';
import { Vehicle } from '../../db/entities/Vehicle';

@InputType()
export class VehicleCreateInput { //------------------------------------------ Vehicle  
    @Field()
    plates: string;

    @Field()
    color: string;

    @Field()
    model: string;

    @Field()
    arrivalTime: Date;

    @Field()
    departureTime: Date;

    @Field()
    isInside: boolean;
}

@InputType()
export class VehicleExitInput {
    @Field()
    plates: string;

    @Field()
    isInside: boolean;
}

@InputType()
export class LodgingsCreateInput { //------------------------------------------ Lodging
    
    @Field()
    vehicleId: string;

    @Field()
    vehicleArrivalTime: Date;

}

@InputType()
export class ParkingsCreateInput { //------------------------------------------ Parking 
    @Field()
    vehicleId: string;

    @Field()
    vehicleArrivalTime: Date;

}