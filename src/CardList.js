import React from 'react';
import ProCard from './ProCard';
import { people } from './people';

const CardList = () => {
    const cardComponent = people.map((user, i) => {
        return <ProCard key = {i} id={people[i].id} name={people[i].name } email={people[i].email}/>
    })
    return (
        <div >
{/* <ProCard id={people[0].id} name={people[0].name } email={people[0].email}/>
<ProCard id={people[1].id} name={people[1].name } email={people[1].email}/>
<ProCard id={people[2].id} name={people[2].name } email={people[2].email}/>
<ProCard id={people[3].id} name={people[3].name } email={people[3].email}/>
<ProCard id={people[4].id} name={people[4].name } email={people[4].email}/>
<ProCard id={people[5].id} name={people[5].name } email={people[5].email}/> */}
{cardComponent}
</div>
    );
}

export default CardList;