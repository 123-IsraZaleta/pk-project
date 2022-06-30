import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { Vehicle } from "../db/entities";

import prisma from '../client';

export interface Context{
    prisma: PrismaClient;
    jwt?: string;
    vehicle?: Vehicle;
}

export type MockContext = {
    prisma: DeepMockProxy<PrismaClient>;
}

export const createMockContext = (): MockContext => {
    return {
        prisma: mockDeep<PrismaClient>(),
    }
}

export const context:Context = {
    prisma
}