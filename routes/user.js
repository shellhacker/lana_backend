import express from 'express';
const router = express.Router();
import { getBookingList, addBooking } from '../controller/BookingController.js'

router.get('/getBookingList', getBookingList)
router.post('/addNewBooking', addBooking)


export default router;
