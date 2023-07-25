import '../styles/Filter.css'
import { useState } from 'react';

export function Filter({ date, filters, onDateChange, onFilterChange }) {



    const handleDateChange = (event) => {
        const newDate = event.target.value;
        onDateChange(newDate);
    };


    const handleFilterChangeLocal = (event) => {
        const { name, value, type, checked } = event.target;
        console.log(name, value, type, checked)
        const filterValue = type === 'checkbox' ? checked : value;
        // onFilterChange(event.target.name, event.target.checked); // 
        onFilterChange(event.target.name, filterValue);
    };



    const todayDate = new Date().toISOString().split('T')[0]; // Get today's date in "YYYY-MM-DD" format



    return (
        <div>
            <form>

                <div className='filter-when'>
                    <h3>When?</h3>
                    <input className='date' type='date' defaultValue={todayDate} onChange={handleDateChange} min={todayDate} />
                </div>
                <div className='filter-where'>
                    <h3>Where?</h3>
                    <select className='city' name="city" id="city" value={filters.city}
                        onChange={handleFilterChangeLocal}>
                        <option value="All">Select City</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Dortmund">Dortmund</option>
                        <option value="Dublin">Dublin</option>
                    </select>
                    <select className='building' name="building" id="building" value={filters.building}
                        onChange={handleFilterChangeLocal} >
                        <option value="All">Select Building</option>
                        <option value="BHQ X">BHQ X</option>
                        <option value="BHQ O">BHQ O</option>
                        <option value="BHS">BHS</option>
                        <option value="BHW">BHW</option>
                        <option value="BHW">BTD H</option>
                        <option value="BHW">DHH</option>
                        <option value="BHW">2WML</option>
                    </select>
                    <select className='floor' name="floor" id="floor" value={filters.floor}
                        onChange={handleFilterChangeLocal}>
                        <option value="All">Select Floor</option>
                        <option value="1.OG">1.OG</option>
                        <option value="2.OG">2.OG</option>
                        <option value="3.OG">3.OG</option>
                        <option value="4.OG">4.OG</option>
                        <option value="5.OG">5.OG</option>
                        <option value="6.OG">6.OG</option>
                    </select>
                    <select className='area' name="area" id="area" value={filters.area}
                        onChange={handleFilterChangeLocal} >
                        <option value="All">Select Area</option>
                        <option value="Area A">Area A</option>
                        <option value="Area B">Area B</option>
                        <option value="Area C">Area C</option>
                        <option value="Area D">Area D</option>
                    </select>
                </div>
                <div className='filter-additional'>
                    <label htmlFor="accessibility">
                        <input type="checkbox" id="accessibility" name="accessibility" checked={filters.accessibility}
                            onChange={handleFilterChangeLocal} />
                        Accessibility
                    </label>
                    <label htmlFor="heightAdjustable">
                        <input type="checkbox" id="heightAdjustable" name="heightAdjustable" checked={filters.heightAdjustable}
                            onChange={handleFilterChangeLocal} />
                        Height Adjustable
                    </label>
                    <label htmlFor="twoscreens">
                        <input type="checkbox" id="twoscreens" name="twoScreens" checked={filters.twoScreens}
                            onChange={handleFilterChangeLocal} />
                        2 Screens
                    </label>
                    <label htmlFor="individualDesk">
                        <input type="checkbox" id="individualDesk" name="individualDesk" checked={filters.individualDesk}
                            onChange={handleFilterChangeLocal}
                        />
                        Individual Desk
                    </label>
                </div>
                {/* <button className='filter-button'>Search</button> */}
            </form >
        </div >
    )
}