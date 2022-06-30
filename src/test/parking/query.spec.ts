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
        // checkInTime: new Date()
    };
    mockCtx.prisma.parkings.findUnique.mockResolvedValue(expectParking);
    const response = parkingClass.parkingById(mockCtx, { id: ""});
    await expect(response).resolves.toEqual(expectParking);
});
