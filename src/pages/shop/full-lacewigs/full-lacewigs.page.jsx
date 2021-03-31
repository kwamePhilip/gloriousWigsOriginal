import React from 'react';
import '../frontalwigs/frontalwigs.page.styles.scss';
import FULL_DATA from  './full-lacewigs.data';
import Card from '../../../compoonents/card/card.component';

class FullLaceWigs extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collections: FULL_DATA
        }
    }



    render(){
        const {collections}= this.state;

        return(
          
            <div className='collection-preview'  >
                {collections.map(({items}) => (items.map((item)=>(
                    <Card key={item.id} item={item}  />

                ))

                ))}


            </div>

        )

    }
}
export default FullLaceWigs;