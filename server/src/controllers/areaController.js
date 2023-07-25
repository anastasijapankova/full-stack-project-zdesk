import Area from "../model/Area.js";

export const handleAreaAdd = async (req, res) => {
    console.log("handleAreaAddd:", req.body);

    try {
        const newArea = await Area.create(req.body);
        console.log("handleAreaAdd:", newArea);

        res.status(200).send({ success: true });
    } catch (error) {
        console.log("Error creating new area:", error.message);
        res.status(500).send({ success: false, message: error.message });
    }
};