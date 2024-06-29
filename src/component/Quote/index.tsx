import React, {useState} from 'react';
import {ChevronLeftIcon, PlusIcon} from "@heroicons/react/20/solid";
import {EyeIcon, TrashIcon} from "@heroicons/react/24/outline";
import {ReactComponent as USA} from "../../Assets/flags/usa.svg"
import {ArrowsRightLeftIcon} from "@heroicons/react/24/solid";
import PreviewQuote from "../Modal/previewQuote";
import EditCurrency from "../Modal/editCurrency";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Store/reducers/rootReducer";
import { saveUpdateDataRequest} from "../../Store/action";

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

const initialSections: Section[] = [{
    sectionLabel: '',
    rows: [{ basis: '', measure: 'Per Kilogram', unit: '', rate: '', amount: '' }],
    currency: 'USD',
    currencyAmount: ''
}];
 function QuoteDetails() {
     const [isOpen, setIsOpen] = useState(false);
     const [currencyOpen, setCurrencyOpen] = useState(false);
     const navigate = useNavigate()
     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const date = searchParams.get('date');
     const dispatch = useDispatch();
     const data = useSelector((state: RootState) => state.data.savedData);
     const dataForDate = date ? data[date] : null;
     const [sections, setSections] = useState<Section[]>(initialSections);

     console.log(sections)
     const addSection = () => {
         const newSection: Section = {
             sectionLabel: '',
             rows: [{ basis: '', measure: 'Per Kilogram', unit: '', rate: '', amount: '' }],
             currency: 'USD',
             currencyAmount: ''
         };
         setSections([...sections, newSection]);
     };

     const removeSection = (sectionIndex: number) => {
         // Make a copy of the current sections array
         const updatedSections = [...sections];

         // Remove the section at the specified index
         updatedSections.splice(sectionIndex, 1);

         // Update the state with the new sections array
         setSections(updatedSections);
     };


     const handleCurrencyChange = (index: number, value: string) => {
         const updatedSections = sections.map((section, i) =>
             i === index ? { ...section, currencyAmount: value } : section
         );
         setSections(updatedSections);
     };

     const handleInputChange = (sectionIndex: number, rowIndex: number, field: keyof Row, value: string) => {
         const updatedSections = sections.map((section, i) =>
             i === sectionIndex ? {
                 ...section,
                 rows: section.rows.map((row, j) => j === rowIndex ? { ...row, [field]: value } : row)
             } : section
         );
         setSections(updatedSections);
     };

     const addRow = (sectionIndex: number) => {
         const updatedSections = sections.map((section, i) =>
             i === sectionIndex ? {
                 ...section,
                 rows: [...section.rows, { basis: '', measure: 'Per Kilogram', unit: '', rate: '', amount: '' }]
             } : section
         );
         setSections(updatedSections);
     };

     const removeRow = (sectionIndex: number, rowIndex: number) => {
         const updatedSections = sections.map((section, i) =>
             i === sectionIndex ? {
                 ...section,
                 rows: section.rows.filter((_, j) => j !== rowIndex)
             } : section
         );
         setSections(updatedSections);
     };

     const handleSectionLabelChange = (sectionIndex: number, value: string) => {
         const newSections = sections.map((section, index) =>
             index === sectionIndex ? { ...section, sectionLabel: value } : section
         );
         setSections(newSections);
     };

     const saveData = () => {
        let saveSectionData = {
            date: dataForDate?.date,
            section: sections
        }
         dispatch(saveUpdateDataRequest(saveSectionData))
         setIsOpen(true)
     }

     if (!dataForDate) {
         return <div>No data found for this date.</div>;
     }


     return (
         <>
             <div
                 className={`flex justify-between bg-custom-white items-center border-b border-custom-grey lg:px-10 xl:px-20 py-10`}>
                 <div>
                     <div onClick={() => navigate(-1)}
                          className={`flex cursor-pointer items-center text-sm text-custom-grey pb-1`}>
                         <ChevronLeftIcon className={`size-6`}/>
                         <span>Back to quotes</span>
                     </div>
                     <h2 className={`font-medium text-2xl pl-2 capitalize`}>
                         {dataForDate?.quoteTitle} <span className={`text-custom-grey`}>{`[${dataForDate?.date}]`}</span>
                     </h2>
                 </div>
                 <div className={`flex gap-5`}>
                     <button
                         className={`text-custom-grey cursor-pointer text-sm border border-custom-grey rounded-md px-4 py-2`}>
                         Save as Draft
                     </button>
                     <button onClick={() => setIsOpen(true)}
                             className={`text-sm cursor-pointer text-custom-green flex items-center justify-center gap-3.5 bg-custom-green border border-custom-grey rounded-md px-4 py-2`}>
                         <EyeIcon className={`w-4 h-4 text-custom-green`}/>
                         Preview
                     </button>
                 </div>
             </div>
             <div className={`flex lg:px-10 xl:px-20 gap-10 pt-10 justify-between`}>
                 <div className={`bg-custom-white rounded-md  py-2 px-4 w-9/12`}>
                     <label>Change Quote Time</label>
                     <input type='datetime-local'
                            className={`ml-3 px-4 py-1 border rounded-full text-sm font-light`}/>
                 </div>
                 <div className={`w-3/12`}></div>
             </div>
             {sections.map((section, sectionIndex) => (
                 <div key={sectionIndex} className={`flex justify-between lg:px-10 xl:px-20 lg:gap-5  xl:gap-10`}>
                     <div className={`w-9/12`}>
                         <div className={`flex-col flex gap-y-7`}>
                             <div>
                                 <div className={`border border-custom-grey flex justify-between items-center`}>
                                     <input
                                         type='text'
                                         placeholder='Enter Section Label'
                                         className={`py-3 px-2 border border-custom-green`}
                                         value={section.sectionLabel}
                                         onChange={(e) => handleSectionLabelChange(sectionIndex, e.target.value)}
                                     />
                                     <p onClick={() => removeSection(sectionIndex)} className={`text-sm cursor-pointer text-red-600 font-light px-4 ${sectionIndex === 0 ? 'hidden' : ''}`}>Remove Section</p>
                                 </div>
                                 <div>
                                     <table className={`w-full table-fixed`}>
                                         <thead
                                             className={`font-light py-5 text-sm border border-t-0 border-custom-grey bg-custom-white`}>
                                         <tr className={`font-light py-5 text-custom-grey`}>
                                             <th colSpan={4}
                                                 className={`font-light text-custom-grey border-b border-custom-grey`}>
                                            <span
                                                className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey`}>
                                                Basis
                                            </span>
                                             </th>
                                             <th colSpan={3}
                                                 className={`font-light text-custom-grey border-b border-custom-grey`}>
                                            <span
                                                className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey`}>
                                                Unit of Measure
                                            </span>
                                             </th>
                                             <th colSpan={2}
                                                 className={`font-light text-custom-grey border-b border-custom-grey`}>
                                            <span
                                                className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey`}>
                                                Unit
                                            </span>
                                             </th>
                                             <th colSpan={3}
                                                 className={`font-light text-custom-grey border-b border-custom-grey`}>
                                                 <div
                                                     className={`flex justify-between items-center my-3 text-sm px-3 w-full border-r border-custom-grey`}>
                                                     <span>Rate</span>
                                                     <span
                                                         className={`bg-custom-grey rounded-md p-1 text-xs`}>USD</span>
                                                 </div>
                                             </th>
                                             <th colSpan={3}
                                                 className={`font-light text-custom-grey border-b border-custom-grey`}>
                                                 <div
                                                     className={`flex justify-between items-center my-3 px-3 text-sm w-full border-r border-custom-grey`}>
                                                     <span>Amount</span>
                                                     <span className={`bg-custom-grey rounded-md p-1 text-xs`}>USD</span>
                                                 </div>
                                             </th>
                                             <th colSpan={2}
                                                 className={`font-light text-custom-grey border-b border-custom-grey`}></th>
                                         </tr>
                                         </thead>
                                         <tbody>
                                         {section.rows.map((row, rowIndex) => (
                                             <tr key={rowIndex} className={`quoteDescription`}>
                                                 <td colSpan={4} className={`tdquote`}>
                                                <span
                                                    className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey px-2`}>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Basis"
                                                        className="border-0 w-full focus-visible:outline-0 text-sm"
                                                        value={row.basis}
                                                        onChange={(e) => handleInputChange(sectionIndex, rowIndex, 'basis', e.target.value)}
                                                    />
                                                </span>
                                                 </td>
                                                 <td colSpan={3} className={`tdquote`}>
                                                <span
                                                    className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey px-2`}>
                                                    <select
                                                        className="border-0 focus-visible:outline-0 text-sm w-full"
                                                        value={row.measure}
                                                        onChange={(e) => handleInputChange(sectionIndex, rowIndex, 'measure', e.target.value)}
                                                    >
                                                        <option>Per Kilogram</option>
                                                        <option>Per Piece</option>
                                                        <option>Per Dozen</option>
                                                    </select>
                                                </span>
                                                 </td>
                                                 <td colSpan={2} className={`tdquote`}>
                                                <span
                                                    className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey px-2`}>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Unit"
                                                        className="border-0 w-full focus-visible:outline-0 text-sm"
                                                        value={row.unit}
                                                        onChange={(e) => handleInputChange(sectionIndex, rowIndex, 'unit', e.target.value)}
                                                    />
                                                </span>
                                                 </td>
                                                 <td colSpan={3} className={`tdquote`}>
                                                <span
                                                    className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey px-2`}>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Rate"
                                                        className="border-0 w-full focus-visible:outline-0 text-sm"
                                                        value={row.rate}
                                                        onChange={(e) => handleInputChange(sectionIndex, rowIndex, 'rate', e.target.value)}
                                                    />
                                                </span>
                                                 </td>
                                                 <td colSpan={3} className={`tdquote`}>
                                                <span
                                                    className={`font-light text-custom-grey my-3 w-full block border-r border-custom-grey px-2`}>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Amount"
                                                        className="border-0 w-full focus-visible:outline-0 text-sm"
                                                        value={row.amount}
                                                        onChange={(e) => handleInputChange(sectionIndex, rowIndex, 'amount', e.target.value)}
                                                    />
                                                </span>
                                                 </td>
                                                 <td colSpan={2} className={`tdquote`}>
                                                <span
                                                    className={`font-light text-custom-grey my-3 w-full flex justify-end px-2`}>
                                                    <TrashIcon className={`size-6 text-red-600 text-left`}
                                                               onClick={() => removeRow(sectionIndex, rowIndex)}/>
                                                </span>
                                                 </td>
                                             </tr>
                                         ))}
                                         </tbody>
                                     </table>
                                     <div
                                         className={`border border-custom-grey border-t-0 py-5 rounded-bl-md rounded-br-md`}>
                                         <button type='button' onClick={() => addRow(sectionIndex)}
                                                 className={`flex gap-3.5 items-center px-4`}>
                                    <span className={`rounded-md bg-custom-button-green p-0.5 block`}>
                                        <PlusIcon className={`w-4 text-white`}/>
                                    </span>
                                             <span
                                                 className={`text-custom-green font-light text-sm`}>Add new basis</span>
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className={`py-8`}>
                             <hr/>
                         </div>
                     </div>
                     <div className={`flex flex-col gap-y-7 w-3/12`}>
                         <div className={`border border-custom-grey rounded-lg  p-3 px-4 h-fit`}>
                             <div className={`flex justify-between items-center border-b lg:text-sm xl:text-base  border-custom-grey pb-3`}>
                                 <h4>Section Currency</h4>
                                 <span className={`flex gap-3 items-center `}>
                                    <p>{section.currency}</p>
                                    <USA/>
                                </span>
                             </div>
                             <div className={`py-5`}>
                                 <p className={`text-custom-grey pb-3 lg:text-sm xl:text-normal`}>Currency & Rate </p>
                                 <div className={`flex gap-1.5 xl:gap-3.5 items-center`}>
                                    <span className={`border border-custom-grey py-1 px-4 block rounded-md`}>
                                        <USA/>
                                    </span>
                                     <ArrowsRightLeftIcon className={`size-6 text-custom-grey`}/>
                                     <div className="relative rounded-md shadow-sm ">
                                         <div
                                             className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <span className="text-gray-500 sm:text-sm">
                                                <USA/>
                                            </span>
                                         </div>
                                         <input
                                             type="text"
                                             name="price"
                                             id="price"
                                             value={section.currencyAmount}
                                             onChange={(e) => handleCurrencyChange(sectionIndex, e.target.value)}
                                             className="block w-full rounded-md border-0 py-2 pl-14 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:outline-0  sm:text-sm sm:leading-6"
                                             placeholder="0.00"
                                         />
                                     </div>
                                 </div>
                             </div>
                             <button type={`button`} onClick={() => setCurrencyOpen(true)}
                                     className={`w-full bg-custom-white py-2.5 text-center text-sm font-light rounded-md my-3`}>
                                 Edit Section Currency
                             </button>
                         </div>
                     </div>
                 </div>
             ))}
             <div className={`flex lg:px-10 xl:px-20 gap-10 pt-10 justify-between`}>
                 <div className={`w-9/12`}>
                     <div>
                         <button type='button' onClick={addSection}
                                 className={`flex gap-3.5 items-center px-4 bg-custom-green w-full justify-center py-2.5 rounded-md`}>
                                        <span className={`rounded-md bg-custom-button-green p-0.5 block`}>
                                            <PlusIcon className={`w-4 text-white`}/>
                                        </span>
                             <span className={`text-custom-green font-light text-sm`}>
                                            Add new section
                                        </span>
                         </button>
                     </div>
                     <div className={`py-4`}>
                         <hr/>
                     </div>
                     <div className={`flex justify-between`}>
                         <button className={` border rounded text-red-600 bg-custom-white font-light py-2.5 px-5`}>
                             Cancel
                         </button>
                         <button onClick={saveData} className={`bg-custom-button-green text-white font-light py-2.5 px-5 rounded`}>
                             Save Quote
                         </button>
                     </div>
                 </div>
                 <div className={`w-3/12`}></div>
             </div>

             <PreviewQuote open={isOpen} setOpen={setIsOpen} date={dataForDate?.date}/>
             <EditCurrency open={currencyOpen} setOpen={setCurrencyOpen}/>
         </>
     );
 };

export default QuoteDetails