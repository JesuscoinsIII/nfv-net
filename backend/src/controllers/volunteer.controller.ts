import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class VolunteerController {
    async createVolunteer(req: Request, res: Response) {
        try {
            const volunteer = await prisma.volunteer.create({
                data: req.body
            });
            return res.status(201).json(volunteer);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Failed to create volunteer' });
        }
    }

    async getAllVolunteers(req: Request, res: Response) {
        try {
            const volunteers = await prisma.volunteer.findMany();
            return res.status(200).json(volunteers);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch volunteers' });
        }
    }

    async getVolunteerById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const volunteer = await prisma.volunteer.findUnique({
                where: { id: Number(id) }
            });
            if (!volunteer) {
                return res.status(404).json({ error: 'Volunteer not found' });
            }
            return res.status(200).json(volunteer);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch volunteer' });
        }
    }

    async updateVolunteer(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const volunteer = await prisma.volunteer.update({
                where: { id: Number(id) },
                data: req.body
            });
            return res.status(200).json(volunteer);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to update volunteer' });
        }
    }

    async deleteVolunteer(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await prisma.volunteer.delete({
                where: { id: Number(id) }
            });
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: 'Failed to delete volunteer' });
        }
    }
}