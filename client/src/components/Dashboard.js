import { useContext, useEffect, useState } from "react";
import { DeskContext } from "../context/deskContext";
import { Card } from "./Card";
import { Filter } from "./Filter";
import '../styles/Dashboard.css';
import axios from "axios";

const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Get day with ordinal suffix (e.g., "17th")
    const dayWithSuffix = date.getDate()
    // Get month (e.g., "June")
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];

    // Get year (e.g., "2023")
    const year = date.getFullYear();

    // Concatenate the components to form the formatted date
    const formattedDate = `${dayWithSuffix} ${month} ${year}`;

    return formattedDate;
};


const today = new Date();
const formattedDate = formatDate(today.toISOString());

export function Dashboard() {
    const { deskData, setDeskData } = useContext(DeskContext);
    const [date, setDate] = useState(formatDate(new Date()));
    const [filters, setFilters] = useState({
        city: "All",
        building: "All",
        floor: "All",
        accessibility: false,
        heightAdjustable: false,
        twoScreens: false,
        individualDesk: false,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/desk/all');
                if (response.data.success) {
                    setDeskData([...response.data.desks]);
                }
            } catch (error) {
                console.error('Error fetching desks data:', error);
            }
        };
        fetchData();
    }, [setDeskData]);

    const handleDateChange = (newDate) => {
        setDate(formatDate(newDate));
    };

    const handleFilterChange = (name, value) => {
        console.log(name, value)
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const filteredDesks = deskData.filter((desk) => {
        const {
            city,
            building,
            floor,
            accessibility,
            heightAdjustable,
            twoScreens,
            individualDesk,
        } = filters;


        return (
            (city === "All" || desk.city.cityName === city) &&
            (building === "All" || desk.building.buildingName === building) &&
            (floor === "All" || desk.floor.floorName === floor) &&
            (!accessibility || desk.accessibility) &&
            (!heightAdjustable || desk.heightAdjustable) &&
            (!twoScreens || desk.twoScreens) &&
            (!individualDesk || desk.individualDesk)
        );
    });

    console.log(deskData)



    return (
        <div className="dashboard">
            <h1>Choose your table for <span>{date}</span></h1>

            <div className="selection">
                <div className="wrap">
                    {filteredDesks.map((item) => (
                        <Card key={item._id} item={item} date={date} />
                    ))}
                </div>
                <div className="filter">
                    <Filter
                        date={date}
                        filters={filters}
                        onDateChange={handleDateChange}
                        onFilterChange={handleFilterChange}
                    />
                </div>
            </div>
        </div>
    );
}
