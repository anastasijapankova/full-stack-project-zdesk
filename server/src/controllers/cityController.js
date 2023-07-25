import City from "../model/City.js";

export const handleCityAdd = async (req, res) => {
    console.log("handleCityAdd:", req.body);

    try {
        const newCity = await City.create(req.body);
        console.log("handleCityAdd:", newCity);

        res.status(200).send({ success: true });
    } catch (error) {
        console.log("Error creating new city:", error.message);
        res.status(500).send({ success: false, message: error.message });
    }
};