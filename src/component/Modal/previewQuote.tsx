import React from 'react';
import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/20/solid";
import {
    ArrowDownTrayIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import {ReactComponent as Logo} from "../../Assets/logo/logo.svg"
import {useSelector} from "react-redux";
import {RootState} from "../../Store/reducers/rootReducer";

interface Row {
    basis: string;
    measure: string;
    unit: string;
    rate: string;
    amount: string;
}

interface Section {
    sectionLabel: string;
    rows: Row[];
    currency: string;
    currencyAmount: string;
}

interface QuoteData {
    quoteTitle: string;
    date: string;
    section: Section[]
}

type AddQuoteProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    date: string ;
};

function PreviewQuote({ open, setOpen, date }: AddQuoteProps) {
    const data = useSelector((state: RootState) => state.data.savedData);
    console.log(data)
    let array: QuoteData = data[date]
    console.log(array)
    const termsAndConditions = [
        {
            terms: 'Above rates are for cargo details as provided by you.'
        },
        {
            terms: 'Above quote is/are subject to VAT.'
        },
        {
            terms: 'Above quoted rates are on Door-to-Door basis excludes of Duties at the time of exports.'
        },
        {
            terms: 'Standard Trading Terms and Conditions of Oneport365 applies.'
        },
        {
            terms: 'Above rates excludes services like packing, re-packing, Customs Inspection etc which may be charged additional(if required) with prior customer approval.'
        },
        {
            terms: 'Above rates do not cover Insurance charges.'
        },
        {
            terms: 'Above rates does not include any additional services required e.g.- special handling, week-end pick-up/delivery which has not been agreed and same will be charged as mutually agreed before services are rendered.'
        },
        {
            terms: 'Above rates apply for weight/volume (whichever is higher). Rates are based on ratio 1: 6.'
        },
        {
            terms: 'Quoted rates are valid for a period of one month and will need prior approval from Oneport365 incase further extension is required.'
        },
        {
            terms: 'Charges are based on shipment details provided by you: if quantity/weight will vary our quotation will change accordingly.'
        },
        {
            terms: 'Pricing team has the right to re-price if the actual cargo details differ from the information indicated in enquiry.'
        },
        {
            terms: 'Unless otherwise specified, any haulage included within the quote is based upon standard roadside only and between business hours\n' +
                'Monday to Friday.'
        },




    ]
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
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-7xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white ">
                                <div className={`flex justify-between items-center py-5 px-10 border-b border-custom-grey`}>
                                    <div>
                                        <h2 className="font-medium">
                                            Quote Details <span className={`text-custom-grey font-light`}>
                                                 #34920_fe2
                                            </span>
                                        </h2>
                                    </div>
                                    <div className={`text-sm flex gap-5 items-center`}>
                                        <button className={`rounded-full bg-blue-600 text-white py-1.5 px-5`}>
                                            Save Quote
                                        </button>
                                        <button className={`border rounded border-blue-600 p-1`}>
                                            <ArrowDownTrayIcon className={`w-5 text-blue-600 cursor-pointer`} />
                                        </button>
                                        <button type={`button`}  onClick={() => setOpen(false)}  className={`border rounded border-custom-grey p-1`}>
                                            <XMarkIcon className={`size-6 text-red-600 cursor-pointer`}/>
                                        </button>
                                    </div>
                                </div>
                                <div className={`py-6 px-10 overflow-scroll h-[85vh]`}>
                                    <div
                                        className={`border flex flex-col gap-y-10 border-custom-grey rounded-lg p-4 px-8`}>
                                        <div className={`flex justify-between items-center`}>
                                            <div>
                                                <Logo/>
                                            </div>
                                            <div className={`text-right`}>
                                                <span className={`block font-light text-custom-grey `}>
                                                    UAC Building Marina
                                                </span>
                                                <span className={`block font-light text-custom-grey`}>
                                                    Lagos, Nigeria
                                                </span>
                                                <span className={`block font-light text-custom-grey `}>
                                                    100223
                                                </span>
                                            </div>
                                        </div>
                                        <div className={` bg-custom-white rounded-xl py-5 px-6`}>
                                            <div
                                                className={`flex gap-y-6 flex-wrap rounded-xl py-5 px-6`}>
                                                <div className={`w-3/12`}>
                                                    <label className={`text-sm font-light text-custom-grey`}>
                                                        Attention (Customer Name)
                                                    </label>
                                                    <p className={`font-light`}>
                                                        Daniel Alobade
                                                    </p>
                                                </div>
                                                <div className={`w-3/12`}>
                                                    <label className={`text-sm font-light text-custom-grey`}>
                                                        Email Address
                                                    </label>
                                                    <p className={`text-custom-green font-light`}>
                                                        ample@gmail.com
                                                    </p>
                                                </div>
                                                <div className={`w-3/12`}>
                                                    <label className={`text-sm font-light text-custom-grey`}>
                                                        Commodity
                                                    </label>
                                                    <p className={` font-light`}>
                                                        Electric goods
                                                    </p>
                                                </div>
                                                <div className={`w-3/12`}>
                                                    <label className={`text-sm font-light text-custom-grey`}>
                                                        Service Type
                                                    </label>
                                                    <p className={`font-light`}>
                                                        Export Air Freight
                                                    </p>
                                                </div>
                                                <div className={`w-3/12`}>
                                                    <label className={`text-sm font-light text-custom-grey`}>
                                                        Chargeable Weight (Kg)
                                                    </label>
                                                    <p className={`font-light`}>
                                                        55.43KG
                                                    </p>
                                                </div>
                                                <div className={`w-3/12`}>
                                                    <label className={`text-sm font-light text-custom-grey`}>
                                                        POL (Port of Loading)
                                                    </label>
                                                    <p className={`text-custom-green font-light`}>
                                                        Lagos City
                                                    </p>
                                                </div>
                                                <div className={`w-3/12`}>
                                                    <label className={`text-sm font-light text-custom-grey`}>
                                                        POD (Port of Destination)
                                                    </label>
                                                    <p className={`font-light`}>
                                                        Johannesburg
                                                    </p>
                                                </div>
                                                <div className={`w-3/12`}>
                                                    <label className={`text-sm font-light text-red-600`}>
                                                        Due Date
                                                    </label>
                                                    <p className={` font-light`}>
                                                        23rd, March 2024
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <hr/>
                                            </div>
                                            <div className={`flex justify-between py-5`}>
                                                <div className={`w-5/12 font-light`}>
                                                    <label className={`text-sm text-custom-grey font-light`}>
                                                        Collection Address
                                                    </label>
                                                    <p>
                                                        INNIO Waukesha Gas Engines 8123 116th Street, Suite 300, SW
                                                        Side of Building, Dock 46-50, Pleasant Prairie, WI 53158
                                                    </p>
                                                </div>
                                                <div className={`text-right font-light`}>
                                                    <label className={`text-sm text-custom-grey font-light`}>
                                                        Delivery Destination
                                                    </label>
                                                    <p>
                                                        TPG PH
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            array.section.map((sections, sectionIndex) => (
                                                <div>
                                                    <div className={`pb-5`}>
                                                        <p className={`font-light text-custom-grey text-sm ${sectionIndex === 0 ? '' : 'hidden'}`}>
                                                            Quote Breakdown
                                                        </p>
                                                        <h2 className={`uppercase`}>
                                                            {sections.sectionLabel}
                                                        </h2>
                                                    </div>
                                                    <table className={`w-full table-fixed`}>
                                                        <thead
                                                            className={`font-light py-5 text-sm border border-l-0 border-r-0 border-custom-grey`}>
                                                        <tr className={`font-light py-5 text-custom-grey `}>
                                                            <th colSpan={4}
                                                                className={`font-light text-custom-grey border-b border-custom-grey`}>
                                                            <span
                                                                className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey py-2 px-5`}>
                                                                Basis
                                                            </span>
                                                            </th>
                                                            <th colSpan={3}
                                                                className={`font-light text-custom-grey border-b border-custom-grey`}>
                                                            <span
                                                                className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey py-2 px-5`}>
                                                                Unit of Measure
                                                            </span>
                                                            </th>
                                                            <th colSpan={2}
                                                                className={`font-light text-custom-grey border-b border-custom-grey`}>
                                                            <span
                                                                className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey py-2 px-5`}>
                                                                Unit
                                                            </span>
                                                            </th>
                                                            <th colSpan={3}
                                                                className={`font-light text-custom-grey border-b border-custom-grey`}>
                                                                <div
                                                                    className={`flex items-center my-3 text-sm py-2 px-5 w-full border-r border-custom-grey`}>
                                                                    <span>Rate(USD)</span>
                                                                </div>
                                                            </th>
                                                            <th colSpan={3}
                                                                className={`font-light text-custom-grey border-b border-custom-grey`}>
                                                                <div
                                                                    className={`flex items-center my-3 py-2 px-5 w-full border-r border-custom-grey`}>
                                                                    <span>Amount(USD)</span>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            sections.rows.map((row, index) => (
                                                                <tr className={``}>
                                                                    <td colSpan={4} className={``}>
                                                                    <span
                                                                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>
                                                                        {row.basis}
                                                                    </span>
                                                                    </td>
                                                                    <td colSpan={3} className={``}>
                                                                    <span
                                                                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>
                                                                        {row.measure}
                                                                    </span>
                                                                    </td>
                                                                    <td colSpan={2} className={``}>
                                                                    <span
                                                                        className={`font-light my-3 text-right w-full block border-r border-custom-grey py-2 px-5`}>
                                                                        {row.unit}
                                                                    </span>
                                                                    </td>
                                                                    <td colSpan={3} className={``}>
                                                                    <span
                                                                        className={`font-light text-right my-3 w-full block border-r border-custom-grey py-2 px-5`}>
                                                                        {row.rate}
                                                                    </span>
                                                                    </td>
                                                                    <td colSpan={3} className={``}>
                                                                    <span
                                                                        className={`font-light my-3 w-full text-right block border-r border-custom-grey py-2 px-5`}>
                                                                        {row.amount}
                                                                    </span>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            ))
                                        }
                                        {/*<div>*/}
                                        {/*    <div className={`pb-5`}>*/}
                                        {/*        <h2 className={`uppercase`}>*/}
                                        {/*            DESTINATION HANDLING CHARGES*/}
                                        {/*        </h2>*/}
                                        {/*    </div>*/}
                                        {/*    <table className={`w-full table-fixed`}>*/}
                                        {/*        <thead*/}
                                        {/*            className={`font-light py-5 text-sm border border-l-0 border-r-0 border-custom-grey`}>*/}
                                        {/*        <tr className={`font-light py-5 text-custom-grey `}>*/}
                                        {/*            <th colSpan={4}*/}
                                        {/*                className={`font-light text-custom-grey border-b border-custom-grey`}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Basis*/}
                                        {/*                    </span>*/}
                                        {/*            </th>*/}
                                        {/*            <th colSpan={3}*/}
                                        {/*                className={`font-light text-custom-grey border-b border-custom-grey`}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Unit of Measure*/}
                                        {/*                    </span>*/}
                                        {/*            </th>*/}
                                        {/*            <th colSpan={2}*/}
                                        {/*                className={`font-light text-custom-grey border-b border-custom-grey`}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Unit*/}
                                        {/*                    </span>*/}
                                        {/*            </th>*/}
                                        {/*            <th colSpan={3}*/}
                                        {/*                className={`font-light text-custom-grey border-b border-custom-grey`}>*/}
                                        {/*                <div*/}
                                        {/*                    className={`flex items-center my-3 text-sm py-2 px-5 w-full border-r border-custom-grey`}>*/}
                                        {/*                    <span>Rate(USD)</span>*/}
                                        {/*                </div>*/}
                                        {/*            </th>*/}
                                        {/*            <th colSpan={3}*/}
                                        {/*                className={`font-light text-custom-grey border-b border-custom-grey`}>*/}
                                        {/*                <div*/}
                                        {/*                    className={`flex items-center my-3 py-2 px-5 w-full border-r border-custom-grey`}>*/}
                                        {/*                    <span>Amount(USD)</span>*/}
                                        {/*                </div>*/}
                                        {/*            </th>*/}
                                        {/*        </tr>*/}
                                        {/*        </thead>*/}
                                        {/*        <tbody>*/}
                                        {/*        <tr className={``}>*/}
                                        {/*            <td colSpan={4} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Freight Charge*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Per Kilogram*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={2} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 text-right w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        610.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light text-right my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $3.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full text-right block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $1,830.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*        </tr>*/}
                                        {/*        <tr className={``}>*/}
                                        {/*            <td colSpan={4} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Freight Charge*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Per Kilogram*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={2} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 text-right w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        610.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light text-right my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $3.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full text-right block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $1,830.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*        </tr>*/}
                                        {/*        <tr className={``}>*/}
                                        {/*            <td colSpan={4} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Freight Charge*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Per Kilogram*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={2} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 text-right w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        610.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light text-right my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $3.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full text-right block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $1,830.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*        </tr>*/}
                                        {/*        <tr className={``}>*/}
                                        {/*            <td colSpan={4} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Freight Charge*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Per Kilogram*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={2} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 text-right w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        610.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light text-right my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $3.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full text-right block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $1,830.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*        </tr>*/}
                                        {/*        <tr className={``}>*/}
                                        {/*            <td colSpan={4} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Freight Charge*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Per Kilogram*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={2} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 text-right w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        610.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light text-right my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $3.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full text-right block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $1,830.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*        </tr>*/}
                                        {/*        <tr className={``}>*/}
                                        {/*            <td colSpan={4} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Freight Charge*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Per Kilogram*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={2} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 text-right w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        610.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light text-right my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $3.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-light my-3 w-full text-right block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        $1,830.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*        </tr>*/}
                                        {/*        <tr className={``}>*/}
                                        {/*            <td colSpan={4} className={``}>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={5} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-medium text-custom-grey text-right my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        Total LOS airport to Client Door:*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-medium my-3 w-full text-right block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        ₦877,830.00*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*        </tr>*/}
                                        {/*        <tr className={``}>*/}
                                        {/*            <td colSpan={4} className={``}>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={3} className={``}>*/}
                                        {/*            </td>*/}
                                        {/*            <td colSpan={5} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-medium text-custom-grey text-right my-3 w-full block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        ALL-IN Door to Door (NGN):*/}
                                        {/*                    </span>*/}
                                        {/*            </td>*/}
                                        {/*                <td colSpan={3} className={``}>*/}
                                        {/*                    <span*/}
                                        {/*                        className={`font-medium my-3 w-full text-right block border-r border-custom-grey py-2 px-5`}>*/}
                                        {/*                        ₦4,900,830.00*/}
                                        {/*                    </span>*/}
                                        {/*                </td>*/}
                                        {/*            </tr>*/}
                                        {/*        </tbody>*/}
                                        {/*    </table>*/}
                                        {/*</div>*/}
                                        <div className={`flex gap-4 px-8 py-7 rounded-lg bg-custom-dark-green`}>
                                            <span>
                                                <ExclamationTriangleIcon className={`w-7 text-white`} />
                                            </span>
                                            <div className={`text-white flex flex-col gap-y-5`}>
                                                <p>
                                                    Please note this offer is firm for acceptance within 48hours, otherwise above offer will be considered as invalid. Rates advised is subject to prevailing parallel market rate at time of invoice. Freight advised is subject to chargeable weight as declared by airline. Above tariff is not applicable to non-compliant shipments without Form Ms, PAARs.
                                                </p>
                                                <p>
                                                    NOTE: duty and tax not inclusive in the rates advised. They will be advised when you provide the CIF value and H.S code We do trust that this offer meets your requirements. Please, contact us if any further explanation is required.
                                                </p>
                                            </div>

                                        </div>
                                        <div>
                                            <h1 className={`text-custom-grey`}>
                                                ONEPORT365 TERMS AND CONDITIONS
                                            </h1>

                                            <div className={`border-custom-grey rounded-lg border p-4 flex flex-col gap-y-5`}>
                                                {
                                                    termsAndConditions.map((term, index) => {
                                                        return (
                                                            <div key={index} className={`flex`}>
                                                                <span className={`w-14 py-2 text-sm border-r border-custom-grey`}>
                                                                    {index + 1}.
                                                                </span>
                                                                <p className={`pl-3 w-full text-sm flex flex-col justify-center`}>
                                                                    {term.terms}
                                                                </p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default PreviewQuote
