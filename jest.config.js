module.exports = {
    clearMocks: true,
    preset: 'ts-jest',
    testEnviroment: 'node',
    setupFilesAfterEnv: ['<rootDir>/src/singleton.ts']
}