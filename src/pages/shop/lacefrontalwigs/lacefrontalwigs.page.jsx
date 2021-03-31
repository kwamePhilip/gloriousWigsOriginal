import React from 'react';
import '../frontalwigs/frontalwigs.page.styles.scss';
import LACE_DATA from './lacefrontalwigs.data';
import Card from '../../../compoonents/card/card.component';

class LaceFrontalWigs extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collections: LACE_DATA
        };

    }

    render(){
        const {collections}=this.state;

        return(
            <div className='collection-preview'>
             {
             collections.map(({items}) => (items.map((item)=>(
                    <Card key={item.id} item={item}  />

                ))

                ))}

            </div>
        )
    }
}

export default LaceFrontalWigs;