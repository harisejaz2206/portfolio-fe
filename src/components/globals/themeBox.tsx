import React from 'react';

type IProps = {
    title?: any;
    btnValue?: any;
    className?: any;
    children?: any;
};

const ThemeBox = ({ title, btnValue, className, children }: IProps) => {
    return (
        <div className={`bg-white rounded-2xl min-h-[110px] ${className}`}>
            {title && (
                <h1 className="text-2xl font-bold text-gray-900 mb-6">{title}</h1>
            )}
            {children}
        </div>
    );
};

export default ThemeBox;