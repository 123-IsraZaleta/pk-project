import { Vehicle } from "@prisma/client";
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from "../../config/context";
import { VehicleQuery } from "../../resolvers/query";

const vehicleClass = new VehicleQuery();
const vehicleId = "";
const spyVehicleClass = jest.spyOn(vehicleClass, 'allVehicles');

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
})

test('should find a vehicle by id ', async() => {
    const expectedVehicle: Vehicle = {
        id: faker.database.mongodbObjectId(),
        plates: "LXN-564-0",
        color: "white",
        model: "City"
    };
    mockCtx.prisma.vehicle.findUnique.mockResolvedValue(expectedVehicle);
    const response = vehicleClass.vehicleById(mockCtx, expectedVehicle.id );
    await expect(response).resolves.toEqual(expectedVehicle);
});
