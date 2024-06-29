import React from 'react';
import { ReactComponent as USA } from "../../Assets/flags/usa.svg";
import {ChevronDownIcon} from "@heroicons/react/24/solid";

const CountrySelect = () => {
    return (
        <div className="relative w-full">
            <select className="appearance-none border border-custom-grey rounded-md px-3 py-2 w-full pl-10 pr-10">
                <option value="usd">USD</option>
                <option value="ngn">NGN</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                <USA className="w-5 h-5"/>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon className="w-5 h-5"/>
            </div>
        </div>
    );
};

export default CountrySelect;