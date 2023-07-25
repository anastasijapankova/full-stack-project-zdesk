import Floor from "../model/Floor.js";

export const handleFloorAdd = async (req, res) => {
    console.log("handleFloorAdd:", req.body);

    try {
        const newFloor = await Floor.create(req.body);
        console.log("handleFloorAdd:", newFloor);

        res.status(200).send({ success: true });
    } catch (error) {
        console.log("Error creating new floor:", error.message);
        res.status(500).send({ success: false, message: error.message });
    }
};