import BookingServices from "../models/service.js";

export const applyService = async (req, res) => {
  try {
    const { userdata, charges, description, title } = req.body;

    const data = new BookingServices({
      userdata,
      charges,
      description,
      title
    });

    await data.save();

    res.status(200).json({
      message: `You have applied for ${title}`
    });

  } catch (err) {
    res.status(500).json({
      message: 'Some error occurred',
      error: err.message
    });
  }
};

export const getService = async (req, res) => {
  try {
    const allService = await BookingServices.find();
    res.status(200).json(allService);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching services",
      error: err.message
    });
  }
};

export const cancelService = async (req, res) => {
  try {
    const id = req.params.id;

    const cancel = await BookingServices.deleteOne({ _id: id });

    if (cancel.deletedCount === 0) {
      return res.status(404).json({
        message: "No service found"
      });
    }

    res.status(200).json({
      message: "Your service is cancelled"
    });

  } catch (err) {
    res.status(500).json({
      message: "Error cancelling service",
      error: err.message
    });
  }
};