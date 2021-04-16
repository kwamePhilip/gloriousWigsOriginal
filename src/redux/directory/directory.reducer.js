const INITIAL_STATE = {

    sections:[
        {
            title: 'Frontal Wigs',
            imageUrl: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/139477954_3501351459986777_8429767497930216320_n.jpg?tp=1\u0026_nc_ht=scontent-lga3-1.cdninstagram.com\u0026_nc_cat=105\u0026_nc_ohc=O849Y0lFKwQAX_EfdCN\u0026oh=1e6bda66bb8234aa6ec85a66ed31f49c\u0026oe=6064600F',
            size: 'small1',
            id:3,
            linkUrl: 'frontalWigs'

        },
   
        {
            title: 'Full-Lace wigs',
            imageUrl: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/95387942_231220851475450_5197153821300470368_n.jpg?tp=1\u0026_nc_ht=scontent-lga3-1.cdninstagram.com\u0026_nc_cat=110\u0026_nc_ohc=cUC996hyUbgAX95LTH2\u0026oh=859631ad9a64127d0c796949b705839d\u0026oe=6062D6A2',
            size: 'small2',
            id:5,
            linkUrl: 'fullLaceWigs '

        },
        {title: 'Lace-Frontal Wigs',
        imageUrl: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/135328705_1110033462773845_9198190366843055220_n.jpg?tp=1\u0026_nc_ht=scontent-lga3-1.cdninstagram.com\u0026_nc_cat=101\u0026_nc_ohc=aOsNMEC4CEAAX_UCDO8\u0026oh=95301f64aead9e74f4d07e8bc56bb536\u0026oe=60656120',
        size: 'large',
        id:2,
        linkUrl: 'laceFrontalWigs'
    }

      ]

};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }

}

export default directoryReducer;