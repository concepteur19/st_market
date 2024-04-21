import React, { useState } from 'react';

// interface Option {
//   value: string;
//   label: string;
// }

interface Props {
  options: string[], //Option[],
  sltDivClass?: string,
  sltIcon?: React.ReactNode,
  sltPd?: string,
  sltBg?: string,
  sltBr?: string,
  defaultOption: string,
  iconPosition: string,
  onSelectChange: (option: string) => void
}

const Select: React.FC<Props> = ({ options, sltDivClass, sltIcon, sltPd, defaultOption, sltBg, sltBr, iconPosition, onSelectChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(option => option === event.target.value);
    setSelectedValue(event.target.value);
    onSelectChange(selectedOption!); // Appeler la fonction onSelectChange avec l'option sélectionnée
  };

  const handleSelectClick = () => {

  } 

  return (
    <div className={`relative font-publicR text-sm ${sltDivClass}`}>
      {sltIcon && (
        <span className={`absolute top-1/3 flex items-center cursor-pointer ${iconPosition}`} onClick={handleSelectClick}>
          {sltIcon}
        </span>
      )}
      <select
        value={selectedValue}
        onChange={handleChange}
        // w-full
        className={`${sltPd} ${sltBg} ${sltBr} block appearance-none rounded-[2px] leading-tight focus:outline-none`}
      >
        <option value="all">{defaultOption}</option>
        {options.map((option, index) => (
          <option key={option+index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
