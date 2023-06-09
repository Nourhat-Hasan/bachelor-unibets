import React from 'react';
import st from '../../../styles/DangerButton.module.css';
// classes gives us to receive styles as object properties

interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
    value?: string,
    abbr?: string
}

const MyButton: React.FC<Props> = ({ children, ...props}) => {
    return (
        <>
            <button className={st.myDangerBtn} {...props}>
                {children}
            </button>
        </>

    );
}

export default MyButton;


// In typeScript we get an error TS7031: Binding element 'children' implicitly has an 'any' type. To reduce amount of type "any" usage
// We decided do not use code below and in that case interface will be implemented
// const MyButton = ({children, ...props}) => {
//     return (
//         <buttons
//             className={classes.myBtn}
//         >
//             {children}
//         </buttons>
//     );
// }

// How to build custom buttons component
// https://www.twilio.com/blog/intro-custom-button-component-typescript-react