import express from 'express';
import  VolunteerController  from '../controllers/volunteer.controller';
import { validateCreateVolunteer, validateUpdateVolunteer } from '../schemas/volunteer.schema';

const router = express.Router();
const volunteerController = new VolunteerController();

router.post('/', validateCreateVolunteer, volunteerController.createVolunteer);
router.get('/:id', volunteerController.getVolunteerById);
router.put('/:id', validateUpdateVolunteer, volunteerController.updateVolunteer);
router.delete('/:id', volunteerController.deleteVolunteer);

export default router;