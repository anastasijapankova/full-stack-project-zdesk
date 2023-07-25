import Building from "../model/Building.js";

export const handleBuildingAdd = async (req, res) => {
    console.log(" handleBuildingAdd:", req.body);

    try {
        const newBuilding = await Building.create(req.body);
        console.log(" handleBuildingAdd:", newBuilding);

        res.status(200).send({ success: true });
    } catch (error) {
        console.log("Error creating new building:", error.message);
        res.status(500).send({ success: false, message: error.message });
    }
};