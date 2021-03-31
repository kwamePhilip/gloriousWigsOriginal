import React from 'react';
import FRONTAL_DATA from './frontalwigs.data';
import './frontalwigs.page.styles.scss';
import Card from "../../../compoonents/card/card.component";


class FrontalWigs extends React.Component{
    constructor(props){
        super(props)

        this.state={
            collections: FRONTAL_DATA
        };

    }

    render(){
        const {collections}=this.state;
        return(
            <div className='collection-preview' >
          
               { collections.map(({ items}) =>( 
                       
                   items.map(( item)=>(
                       
                    <Card key={item.id} item={item}  />

                   ))
                     
                )
                

                )
              }

            </div>

        )

    }
}
    


   
export default FrontalWigs;