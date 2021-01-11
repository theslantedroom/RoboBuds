import React from 'react';

const Card = ({id, title, email, defense}) => {
    return(
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
            <img alt='roboimg' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{email}</h2>
                <p>{title}{defense}</p>
            </div>
        </div>
    );
}
export default Card;