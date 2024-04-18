import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[],
  sltDivClass?: string,
  sltIcon?: React.ReactNode,
  sltPd?: string,
  sltBg?: string,
  sltBr?: string,
  defaultOption: string,
  onSelectChange: (option: Option | null) => void
}

const Select: React.FC<Props> = ({ options, sltDivClass, sltIcon, sltPd, defaultOption, sltBg, sltBr, onSelectChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(option => option.value === event.target.value);
    setSelectedValue(event.target.value);
    onSelectChange(selectedOption!); // Appeler la fonction onSelectChange avec l'option sélectionnée
  };

  const handleSelectClick = () => {

  } 

  return (
    <div className={`relative font-publicR text-sm ${sltDivClass}`}>
      {sltIcon && (
        <span className="absolute left-28 inset-y-0  flex items-center cursor-pointer" onClick={handleSelectClick}>
          {sltIcon}
        </span>
      )}
      <select
        value={selectedValue}
        onChange={handleChange}
        // w-full
        className={`${sltPd} ${sltBg} ${sltBr} block appearance-none rounded-[2px] leading-tight focus:outline-none`}
      >
        <option value="">{defaultOption}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
