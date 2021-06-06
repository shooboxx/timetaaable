import React from 'react'


interface TextFieldProps  {
    name?: string;
    valueType?: string;
    valuePlaceholder?: string;
    valueLabel?: string;
    onChange?: any;
    value?: string;
    className?: string;
    error?: string;
}

const TextField: React.FC<TextFieldProps>  = ({ 

    name,
    valueType,
    valuePlaceholder,
    valueLabel,
    value,
    className,
    onChange,
    error,
    ...props
    

}) => {

    return (
        <div>
            <label className="label label-regular" htmlFor={name}>{valueLabel}</label><br />
            <input 
                type={valueType} 
                className={error ? `textbox-error textbox ${className}` : `${className} textbox`} 
                name={name} 
                placeholder={valuePlaceholder }
                id={name}
                onChange={onChange}
                value={value}
                
            />
            {error && <div className="error-alert">{error}</div>}
        </div>
    )
};
export { TextField };