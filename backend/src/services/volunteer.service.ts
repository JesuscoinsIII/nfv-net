import { PrismaClient } from '@prisma/client';
import { JsonObject } from '@prisma/client/runtime/library';

export class VolunteerService {
    private prisma;

    constructor(prismaClient: PrismaClient) {
        this.prisma = prismaClient;
    }

    async createVolunteer(data: JsonObject) {
        return await this.prisma.volunteer.create({
            data: JSON.parse(JSON.stringify(data)),
        });
    }

    async getVolunteers() {
        return await this.prisma.volunteer.findMany();
    }

    async updateVolunteer(id: number, data: JsonObject) {
        return await this.prisma.volunteer.update({
            where: { id },
            data,
        });
    }

    async deleteVolunteer(id: number) {
        return await this.prisma.volunteer.delete({
            where: { id },
        });
    }
}