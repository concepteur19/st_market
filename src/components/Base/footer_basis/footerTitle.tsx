import React from 'react';

interface Props{
    title: string
}

const FooterTitle = ({title}: Props) => {
    return <span className=" font-publicB text-lg mb-10"> {title} </span>;
}

export default FooterTitle;
