import React, { CSSProperties } from "react";
import { ImSpinner9 } from "react-icons/im";

interface IProps {
    className?: string;
    labelclass?: string;
    value?: string;
    children?: any;
    onClick?: any;
    variant?: string;
    disabled?: boolean;
    size?: string;
    isLoading?: boolean;
    type?: string;
    style?: CSSProperties;
}

const Button = ({
    className,
    labelclass,
    value,
    children,
    onClick,
    disabled,
    variant,
    size,
    isLoading,
    type,
    style,
    ...rest
}: IProps) => {

    return (
        <button
            style={{ ...style, borderRadius: '18px', padding: '10px', color: 'white', width: '120px' }}  // Modify style here
            {...rest}
            className={`btn ${!children ? "" : ""} ${isLoading
                ? `${variant} border-0 pointer-events-none select-none cursor-pointer`
                : variant || "btn-primary"
                } ${size || "btn-xs"} ${className} flex items-center justify-center`}
            disabled={disabled}
            onClick={onClick}
        >
            <span className={`${labelclass} flex ${labelclass?.includes('right-icon') && 'flex-row-reverse'} flex-shrink-0 items-center justify-center gap-3`}>
                {isLoading ? (
                    <p className="flex justify-center bg-red-500">
                        <ImSpinner9 className="animate-spin text-2xl" />
                        <span className="ms-4">Loading...</span>
                    </p>
                ) : (
                    <>{
                        labelclass?.includes('no-icon') ? <>{value}</> : <> {children} {value}</>
                    }
                    </>
                )}

            </span>
        </button>
    );
};

Button.defaultProps = {
    variant:
        "btn-primary" || "btn-danger" || "btn-secondary" || "btn-transparent" || 'btn-success',
    size: "btn-xs" || "btn-sm" || "btn-md" || "btn-lg",
    labelclass: "font-medium",
};

export default Button;
