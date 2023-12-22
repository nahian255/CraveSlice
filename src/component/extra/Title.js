import React from 'react';

const Title = ({ title, subTitle }) => {
    return (
        <div className='text-center py-6'>
            <h5 className='text-2xl text-slate-700'>{subTitle}</h5>
            <h1 className='text-5xl font-semibold text-[#f13a01]'>{title}</h1>
        </div>
    );
};

export default Title;