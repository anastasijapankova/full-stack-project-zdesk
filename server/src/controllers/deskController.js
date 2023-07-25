import Desk from "../model/Desk.js";

export const handleDeskAdd = async (req, res) => {
    console.log("handleDeskAdd:", req.body);

    try {
        const newDesk = await Desk.create(req.body);
        console.log("handleDeskAdd:", newDesk);
        res.status(200).send({ success: true });
    } catch (error) {
        console.log("Error creating new desk", error.message);
        res.status(500).send({ success: false, message: error.message });
    }
};

export const handleDeskAll = async (req, res) => {

    try {
        const desks = await Desk.find()
            .populate(
                {
                    path: "city",
                    select: "cityName"
                }
            )
            .populate(
                {
                    path: "floor",
                    select: "floorName"
                }
            )
            .populate(
                {
                    path: "area",
                    select: "areaName"
                }
            )
            .populate(
                {
                    path: "building",
                    select: "buildingName"
                }
            )
            .sort(
                {
                    deskName: "asc"
                }
            )


        console.log("handleDeskAll:", desks);
        res.status(200).send({ success: true, desks });
    } catch (error) {
        console.log("Error all desks", error.message);
        res.status(500).send({ success: false, message: error.message });
    }
};