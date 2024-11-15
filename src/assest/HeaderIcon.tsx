import React from "react";

export const HeaderIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 50 50" className="hover:-rotate-6 hover:scale-90 duration-300">
            <defs>
                <mask id="mask-r">
                    <rect width="50" height="50" fill="white" />
                    <text
                        x="50%"
                        y="52%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="30"
                        fontWeight="bold"
                        fill="black"
                        fontFamily="Arial, sans-serif"
                    >
                        R
                    </text>
                </mask>
            </defs>
            <rect width="50" height="50" fill="white" mask="url(#mask-r)" />
        </svg>
    );
};
