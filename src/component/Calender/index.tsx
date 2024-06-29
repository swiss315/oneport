import React, {useEffect, useState} from 'react';
import {PlusIcon, SunIcon} from "@heroicons/react/20/solid";
import AddQuote from "../Modal/addQuote";
import PreviewQuote from "../Modal/previewQuote";
import {useSelector} from "react-redux";
import { RootState } from '../../Store/reducers/rootReducer';
const Calender = () => {
    const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [daysInMonth, setDaysInMonth] = useState<Date[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const [currentYear] = useState<number>(new Date().getFullYear());
    const data = useSelector((state: RootState) => state.data);
    console.log(data.savedData)
    const currentMonth = data.currentMonth;

    const [details, setDetails] =useState<boolean>(false)
    const dateInformation = [
        {
            price: '$2,450.00',
            time: '9:30 AM',
            details: 'Ocean Freight/Haulage/CBT'
        },
        {
            price: '$2,450.00',
            time: '9:30 AM',
            details: 'Ocean Freight/Haulage/CBT'
        },
        {
            price: '$2,450.00',
            time: '9:30 AM',
            details: 'Ocean Freight/Haulage/CBT'
        }
    ]
    useEffect(() => {
        setDaysInMonth(getDaysInMonth(currentYear, currentMonth));
    }, [currentYear, currentMonth]);

    const getDaysInMonth = (year: number, month: number) => {
        return new Array(31)
            .fill('')
            .map((_, i) => new Date(year, month - 1, i + 1))
            .filter(date => date.getMonth() === month - 1);
    };

    const [getDate, setGetDate] = useState('')
    console.log(getDate)



    const renderDayCells = () => {
        if (daysInMonth.length === 0) {
            return null;
        }

        const firstDayIndex = daysInMonth[0].getDay();
        const emptyCells = new Array(firstDayIndex).fill(null);

        const allCells = [...emptyCells, ...daysInMonth];
        const rows = [];

        for (let i = 0; i < allCells.length; i += 7) {
            const week = allCells.slice(i, i + 7);
            rows.push(week);
        }

        return rows.map((week, rowIndex) => (
            <tr key={rowIndex}>
                {week.map((day, dayIndex) => (
                    <td key={dayIndex} className="font-light text-lg text-start text-custom-grey td" onClick={() => {
                        if (day) {
                            setGetDate(`${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`);
                            setDetails(true);
                        }
                    }}>
                        {day ? (
                            <div className="p-3 flex flex-col gap-y-5">
                                <p className="font-light text-sm p-1">
                                    {day.getDate()}
                                </p>
                                <div className="text-black">
                                    <p className="font-normal text-sm p-1">
                                        5 Quotes
                                    </p>
                                    <span className="font-medium text-xs bg-custom-green border border-transparent rounded-md p-1">
                                    Total: <span>$23,045.00</span>
                                </span>
                                </div>
                            </div>
                        ) : (
                            <div className="p-3"></div>
                        )}
                    </td>
                ))}
            </tr>
        ));
    };

    return (
        <>
            <div className={`relative`}>
                <table className={`w-full  text-center table`}>
                    <thead className={`font-light `}>
                        <tr className={`header`}>
                            { daysOfWeek.map((day: string, index: number) => {
                                return <th key={index} className={`font-light text-lg text-start text-custom-grey border px-4 py-2 th`}>{day}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {renderDayCells()}
                    </tbody>
                </table>
                <div
                    className={`py-3 px-4 absolute h-full right-0 bg-custom-blue top-0 overflow-hidden z-10 transform ease-in-out transition-all duration-500 ${details ? 'opacity-100 translate-x-0 w-1/4' : 'opacity-0 translate-x-full w-0'}`}>
                    <div className={`flex justify-between items-center mb-3`}>
                        <h4 className={`text-blue-500`}>
                            Today <span>2/5/2024</span>
                        </h4>
                        <div className={`flex text-white gap-3`}>
                            <p>
                                <span className={`font-bold`}>55</span>°/<span className={`font-light`}>40</span>°
                            </p>
                            <SunIcon className={`size-6 text-yellow-400`}/>
                        </div>
                    </div>
                    <div className={`py-5`}>
                        {
                            dateInformation.map((info, index) => {
                                return (
                                    <div onClick={() => setIsPreviewOpen(true)} key={index} className={`flex gap-3 w-full cursor-pointer group hover:bg-custom-light-blue p-2 hover:rounded-lg mb-2`}>
                                        <span className={`content rounded-full bg-custom-deepblue w-1.5 `}></span>
                                        <div className={`w-full`}>
                                            <h4 className={`flex justify-between pb-3 text-custom-light-blue text-sm font-light`}>
                                                <p className={`group-hover:text-blue-500`}>{info.price}</p>
                                                <p className={`bg-custom-deepblue rounded-md py-1 px-2`}>{info.time}</p>
                                            </h4>
                                            <p className={`text-blue-500 text-sm`}>
                                                {info.details}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <button type="button" onClick={() => setIsOpen(true)} className={`rounded-lg bg-white w-full text-black flex items-center justify-center text-sm py-2.5`}>
                            <PlusIcon className={`size-6`}/>
                            Add new quote
                        </button>
                    </div>
                </div>
            </div>
            <AddQuote open={isOpen} setOpen={setIsOpen} date={getDate} />
            <PreviewQuote open={isPreviewOpen} setOpen={setIsPreviewOpen}  date={getDate}/>
        </>
    );
};

export default Calender