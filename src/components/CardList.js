import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return(
    <div>
        {
            robots.map((user, i) => {
                return(
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        title={robots[i].title} 
                        email={robots[i].email}
                        />
                );
            })
        }
    </div>
    );
}

export default CardList;