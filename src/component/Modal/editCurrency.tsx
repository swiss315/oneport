import React, {useState} from 'react';
import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/20/solid";
import CountrySelect from "../form/countrySelect";

type AddQuoteProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};
function EditCurrency({ open, setOpen }: AddQuoteProps) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };
    return (
        <>
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
                                            Set Section Currency
                                        </h4>
                                        <p className={`text-sm text-custom-grey font-light`}>Kindly set a currency and rate</p>
                                    </div>
                                    <XMarkIcon className={`size-6 text-custom-grey cursor-pointer`} onClick={() => setOpen(false)} />
                                </div>
                                <div className={`py-6 px-4`}>
                                    <form className={`text-custom-grey flex flex-col gap-y-6`}>
                                        <div>
                                            <label className={`block text-sm font-light pb-2`}>
                                                Select Currency
                                            </label>
                                            <CountrySelect />
                                        </div>
                                        <div className={``}>
                                            <div className={`w-full`}>
                                                <label className={`block text-sm font-light pb-2`}>
                                                    Is this the base currency?
                                                </label>
                                                <div className={`flex gap-3.5`}>
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="custom-radio"
                                                            value="option1"
                                                            checked={selectedOption === 'option1'}
                                                            onChange={handleChange}
                                                            className="hidden"
                                                        />
                                                        <span
                                                            className={`radio-square ${selectedOption === 'option1' ? 'checked' : ''}`}></span>
                                                        <span className="ml-2 font-light text-sm text-black">Yes, it is.</span>
                                                    </label>
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="custom-radio"
                                                            value="option2"
                                                            checked={selectedOption === 'option2'}
                                                            onChange={handleChange}
                                                            className="hidden"
                                                        />
                                                        <span
                                                            className={`radio-square ${selectedOption === 'option2' ? 'checked' : ''}`}></span>
                                                        <span className="ml-2 font-light text-sm text-black">No</span>
                                                    </label>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <hr/>
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-light pb-2`}>
                                            Customer Currency
                                            </label>
                                            <CountrySelect />
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-light pb-2`}>
                                                Enter Rate
                                            </label>
                                            <input type="text" placeholder='Enter rate'
                                                   className={`border border-custom-grey rounded-md px-3 py-2 w-full`}/>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    className={`flex flex-col gap-3 justify-between items-center py-5 px-12 border-t border-custom-grey`}>
                                    <button
                                        className={`bg-custom-button-green text-white text-center w-full rounded-md py-3`}>
                                        Create New Quote
                                    </button>
                                    <button className={`text-red-600`}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default EditCurrency