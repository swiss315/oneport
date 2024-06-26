import React from 'react';
import Calender from "../component/Calender";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
const LandingPage = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="">
                    <h4>
                        All Existing Quotes
                    </h4>
                    <p className={`text-xs font-light`}>
                        view all created quotes
                    </p>
                </div>
                <div className="">
                    <span>May</span><span className="">2024</span>
                    <span className="">
                        <ChevronLeftIcon className={`size-6`} />
                        <ChevronRightIcon className={`size-6`} />

                    </span>
                </div>
            </div>
            <Calender/>
        </>
    );
};

export default LandingPage