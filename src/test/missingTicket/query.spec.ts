import { MissingTicket } from "@prisma/client";
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from "../../config/context";
import { MissingTicketQuery } from "../../resolvers/query";

const missingTicketClass = new MissingTicketQuery();
const missingTicketId = "";
const spyMissingTicketClass = jest.spyOn(missingTicketClass, 'allMissingTicket');

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
})

test('should find a missing ticket by id ', async() => {
    const expectMissingTicket: MissingTicket = {
        id: faker.database.mongodbObjectId(),
        vehicleId: '1',
        isPayed: false,
        timeToCreate: new Date()
    };
    mockCtx.prisma.missingTicket.findUnique.mockResolvedValue(expectMissingTicket);
    const response = missingTicketClass.missingTicketById(mockCtx, expectMissingTicket.id);
    await expect(response).resolves.toEqual(expectMissingTicket);
});

/*
model MissingTicket {
  id                    String          @id @default(auto()) @map("_id") @db.ObjectId
  vehicle               Vehicle         @relation(fields: [vehicleId], references: [id])
  vehicleId             String          @unique @db.ObjectId
  isPayed               Boolean         @default(false)
  timeToCreate          DateTime
}
*/
