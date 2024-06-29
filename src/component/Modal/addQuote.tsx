// import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import {XMarkIcon} from "@heroicons/react/20/solid";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {saveDataRequest} from "../../Store/action";

type AddQuoteProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    date: string;
};
export default function AddQuote({ open, setOpen, date }: AddQuoteProps) {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const dispatch = useDispatch();

    const createQuote =  () => {
        // console.log(data)
        let x = data
        // console.log(x)
        x = { ...data, date: date };
        // console.log(x)

        // setData({...data, 'date': date})
        // console.log(data)
        let setDataWithDate = {
            [date]: x
        }
        // console.log(setDataWithDate)
        dispatch(saveDataRequest(setDataWithDate))
        navigate(`/edit?date=${date}`)
    }

    return (
        <Dialog className="relative z-10" open={open} onClose={() => setOpen(false)}>
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white ">
                            <div className={`flex justify-between items-center py-5 px-4 border-b border-custom-grey`}>
                                <div>
                                    <h4 className="font-semibold">
                                        Create New Quote
                                    </h4>
                                    <p className={`text-sm text-custom-grey font-light`}>Enter quote name and time</p>
                                </div>
                                <XMarkIcon className={`size-6 text-custom-grey cursor-pointer`} onClick={() => setOpen(false)} />
                            </div>
                            <div className={`py-6 px-4`}>
                                <form className={`text-custom-grey flex flex-col gap-y-6`}>
                                    <div>
                                        <label className={`block text-sm font-light pb-2`}>
                                            Enter Quote Title
                                        </label>
                                        <input type="text" placeholder='Enter quote title here' onChange={(e) => setData({...data, quoteTitle: e.target.value})} className={`border border-custom-grey rounded-md px-3 py-2 w-full`} />
                                    </div>
                                    <div className={`flex gap-5 w-full`}>
                                        <div className={`w-full`}>
                                            <label className={`block text-sm font-light pb-2`}>
                                                Start Time
                                            </label>
                                            <input type="time" placeholder='' onChange={(e) => setData({...data, startTime: e.target.value})}
                                                   className={`border border-custom-grey rounded-md px-3 py-2 w-full`}/>
                                        </div>
                                        <div className={`w-full`}>
                                            <label className={`block text-sm font-light pb-2`}>
                                                End Time
                                            </label>
                                            <input type="time" placeholder='' onChange={(e) => setData({...data, endTime: e.target.value})}
                                                   className={`border border-custom-grey rounded-md px-3 py-2 w-full`}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={`flex flex-col gap-3 justify-between items-center py-5 px-12 border-t border-custom-grey`}>
                                <button onClick={createQuote} className={`bg-custom-button-green text-white text-center w-full rounded-md py-3`}>
                                    Create New Quote
                                </button>
                                <button onClick={() => setOpen(false)} className={`text-red-600`}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
