import { Lodgings } from "@prisma/client";
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from "../../config/context";
import { LodgingsQuery } from "../../resolvers/query";

const lodgingsClass = new LodgingsQuery();
const lodgingsId = "";
const spyLodgingsClass = jest.spyOn(lodgingsClass, 'allLodgings');

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
})

test('should find a lodgings by id ', async() => {
    const expectLodgings: Lodgings = {
        id: faker.database.mongodbObjectId(),
        vehicleId: '1',
        // checkInTime: new Date()
    };
    mockCtx.prisma.lodgings.findUnique.mockResolvedValue(expectLodgings);
    const response = lodgingsClass.lodgingById(mockCtx, { id: ""});
    await expect(response).resolves.toEqual(expectLodgings);
});
