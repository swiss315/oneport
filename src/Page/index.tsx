import React from 'react';
import Calender from "../component/Calender";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Store/reducers/rootReducer";
import {saveNextMonthRequest, savePrevMonthRequest} from "../Store/action";
const LandingPage = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.data);
    const currentMonth = data.currentMonth;
    const nextMonth = () => {
        if (currentMonth < 12){
            dispatch(saveNextMonthRequest(1));
        } else {
            return
        }
        console.log(currentMonth)
    };
    const prevMonth = () => {
        if (currentMonth === 1){
            return
        } else {
            dispatch(savePrevMonthRequest(1));
        }
        console.log(currentMonth)
    };

    console.log(currentMonth)
    function getMonthName(monthNumber: number) {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        // Adjust monthNumber to be within valid range (1 to 12)
        const adjustedMonthNumber = Math.max(1, Math.min(12, monthNumber));

        return months[adjustedMonthNumber - 1]; // Adjusted to zero-based index
    }
    return (
        <>
            <div className={`py-10 px-20`}>
                <div className="flex justify-between items-center mb-5">
                    <div className="">
                        <h4 className={`text-xl`}>
                            All Existing Quotes
                        </h4>
                        <p className={`text-xs font-light text-start text-custom-grey`}>
                            view all created quotes
                        </p>
                    </div>
                    <div className="flex gap-2 text-xl items-center">
                        <span>{getMonthName(currentMonth)}</span><span className="text-custom-green">2024</span>
                        <span className="flex justify-between">
                        <ChevronLeftIcon className={`size-6 ${currentMonth === 1 ? 'text-custom-grey' : ''}`} onClick={prevMonth}/>
                        <ChevronRightIcon className={`size-6 ${currentMonth === 12 ? 'text-custom-grey' : ''}`} onClick={nextMonth} />
                    </span>
                    </div>
                </div>
                <Calender/>
            </div>
        </>
    );
};

export default LandingPage