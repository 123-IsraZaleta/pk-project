import { Parkings } from "@prisma/client";
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from "../../config/context";
import { ParkingQuery } from "../../resolvers/query";

const parkingClass = new ParkingQuery();
const parkingId = "";
const spyParkingClass = jest.spyOn(parkingClass, 'allParkings');

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
})

test('should find a parking by id ', async() => {
    const expectParking: Parkings = {
        id: faker.database.mongodbObjectId(),
        vehicleId: '1',
        vehicleExitTime: new Date(),
        isPayed: false,
        parkingType: "PARKING"
    };
    mockCtx.prisma.parkings.findUnique.mockResolvedValue(expectParking);
    const response = parkingClass.parkingById(mockCtx, expectParking.id);
    await expect(response).resolves.toEqual(expectParking);
});

test('should find a parking by id ', async() => {
    const expectParking: Parkings = {
        id: faker.database.mongodbObjectId(),
        vehicleId: '1',
        vehicleExitTime: new Date(),
        isPayed: false,
        parkingType: "LODGING"
    };
    mockCtx.prisma.parkings.findUnique.mockResolvedValue(expectParking);
    const response = parkingClass.parkingById(mockCtx, expectParking.id);
    await expect(response).resolves.toEqual(expectParking);
});

