import BookingModel from '../model/bookingModel.js';


export const getBookingList = async (req, res) => {
    try {
        const { uid } = req.body;
        let bookingList = await BookingModel.find({ uid: uid });
        if (!bookingList) return res.status(200).json({ message: "Booking Not Found", data: [], status: false });
        res.status(200).json({ message: "Booking List", data: bookingList });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }

}


export const addBooking = async (req, res) => {


    try {
        const { name, email, phone, date, time, content, uid } = req.body;
        const booking = new BookingModel({
            name,
            email,
            phone,
            date,
            time,
            content,
            uid
        });
        const result = await booking.save();
        console.log(result);
        res.status(200).json({ message: "Booking Added", status: true, data: result, errorCode: 0 });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

