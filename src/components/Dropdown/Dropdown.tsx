/**
 * 
 * @component DROPDOWN
 * ### Dropdown Component
 * 
 * @description It is resuable dropdown component with fuctionailty of multiselect and sigle select option ,also search option is also there
 * 
 * ### Features:
 * - **Multi-select Functionailty:**  Supports multi-selection of the option 
 * - **Serach option for Option:** can search for the option
 * 
 * ###Props
 *  @param {Option[]} options - Optons for the dropdown component
 *  @param {string} [placeholder] -placeholder value for the dropdown component
 *  @param {Boolean} [multiSelect] -Enable the multiselect functioanailty on basis of that
 *  @param {Boolean} [searchable] -Enable the search functioanailty on basis of that
 *  @param {Option | Option[]} [defaultValue] - default value for the component
 *  @param {function} [onChange] 
 * 
 * @example
 * -USAGE
 *    <Dropdown option={optionsContent} multiselect={true} placeholder='select the iteam'/>
 * 
 * @returns {JSX.Element} 
*/

import * as React from "react";
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon, XMarkIcon, CheckIcon } from '@heroicons/react/16/solid';

interface Option {
    value: string;
    label: string;
}

interface DropdownProps {
    options: Option[];
    placeholder?: string;
    multiSelect?: boolean;
    onChange?: (selected: Option | Option[]) => void;
    defaultValue?: Option | Option[];
    searchable?: boolean
}



const Dropdown: React.FC<DropdownProps> = ({
    options = [{ value: 'val', label: 'lab' }],
    placeholder = 'Select option...',
    multiSelect = false,
    onChange,
    defaultValue,
    searchable = false
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selected, setSelected] = useState<Option[]>(() => {
        if (!defaultValue || (Array.isArray(defaultValue) && defaultValue.length === 0)) return [];
        return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    });
    const dropdownRef = useRef<HTMLDivElement>(null);


    const safeOptions = Array.isArray(options) ? options : [];
    const filteredOptions = safeOptions?.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    const handleSelect = (option: Option) => {
        let newSelection: Option[];

        if (multiSelect) {
            newSelection = selected.some(item => item.value === option.value)
                ? selected.filter(item => item.value !== option.value)
                : [...selected, option];
        } else {
            newSelection = [option];
            setIsOpen(false);
        }

        setSelected(newSelection);

        if (onChange) {
            onChange(multiSelect ? newSelection : newSelection[0]);
        }
    };

    const removeOption = (optionToRemove: Option, e: React.MouseEvent) => {
        e.stopPropagation();
        const newSelection = selected.filter(option => option.value !== optionToRemove.value);
        setSelected(newSelection);
        if (onChange && multiSelect) {
            onChange(newSelection);
        }
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>

            <div
                className="min-h-10 flex items-center border border-dropdown-border rounded-lg p-2 cursor-pointer bg-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-wrap gap-1 flex-1">
                    {selected.length === 0 ? (
                        <span className="text-gray-400">{placeholder}</span>
                    ) : (
                        selected.map(option => (
                            <span
                                key={option.value}
                                className={`${multiSelect && 'bg-dropdown-filler-colour text-blue-800'} rounded-md px-2 py-1 text-md flex items-center gap-1`}
                            >
                                {option.label}
                                {multiSelect && (
                                    <XMarkIcon

                                        className=" h-5 w-5  cursor-pointer text-dropdown-cross-icon"
                                        onClick={(e) => removeOption(option, e)}
                                    />
                                )}
                            </span>
                        ))
                    )}
                </div>
                <ChevronDownIcon

                    className={`transition-transform h-8 w-8 text-dropdown-border ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>


            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
                    {/* Search input */}
                    {searchable &&
                        <div className="p-2 border-b">
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    }


                    <div className="max-h-60 overflow-y-auto">
                        {filteredOptions.length === 0 ? (
                            <div className="p-2 text-gray-500 text-center">No options found</div>
                        ) : (
                            filteredOptions.map(option => {
                                const isSelected = selected.some(item => item.value === option.value);
                                return (
                                    <div
                                        key={option.value}
                                        className={`p-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100
                      ${isSelected ? 'bg-blue-50' : ''}`}
                                        onClick={() => handleSelect(option)}
                                    >
                                        {
                                            multiSelect &&
                                            <div className={`w-4 h-4 border rounded flex items-center justify-center
                      ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
                                                {isSelected && <CheckIcon className="text-white size-10" />}
                                            </div>
                                        }
                                        {option.label}
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;