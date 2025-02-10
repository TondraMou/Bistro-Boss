import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "../shared/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    }, [])
    return (
        <div className="mb-12">
            <SectionTitle heading="From Our Menu" subHeading="Check it out"></SectionTitle>
            <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;