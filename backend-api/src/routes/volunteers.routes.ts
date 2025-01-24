import { Router } from 'express';
import VolunteersController from '../controllers/volunteers.controller';
import { validateVolunteer } from '../middleware/validation.middleware';

const router = Router();
const volunteersController = new VolunteersController();

// Create a new volunteer
router.post('/', validateVolunteer, volunteersController.createVolunteer);

// Get all volunteers
router.get('/', volunteersController.getAllVolunteers);

// Get a volunteer by ID
router.get('/:id', volunteersController.getVolunteerById);

// Update a volunteer by ID
router.put('/:id', validateVolunteer, volunteersController.updateVolunteer);

// Delete a volunteer by ID
router.delete('/:id', volunteersController.deleteVolunteer);

export default router;