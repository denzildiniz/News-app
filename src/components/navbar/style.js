import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    nav__box: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    nav__lists:{
        display:'flex',
        listStyle:'none',

        ['@media (max-width: 950px)']: {
            display:'flex',
            flexDirection: 'column',
            position:'absolute',
            justifyContent:'space-evenly',
            alignItems:'center',
            top:'64px',
            left:'-100%',
            width:'100%',
            backgroundColor:'#3f51b5',
            opacity:'0.9',
            transition:'all 0.5s',

          },
          nav__lists__active:{
              left:'0px'
          }
    },

    // nav__lists__active:{
    //     ['@media (max-width: 950px)']:{
    //         display:'flex',
    //         flexDirection: 'column',
    //         position:'absolute',
    //         justifyContent:'space-evenly',
    //         alignItems:'center',
    //         top:'64px',
    //         left:'0px',
    //         width:'100%',
    //         backgroundColor:'#3f51b5',
    //         opacity:'0.9',
    //         transition:'all 0.5s',
            
    //     }
    // },

    nav__items:{
        whiteSpace:'nowrap',
    },

    nav__links:{
        fontSize:20,
        color:'#fff',
        textDecoration:'none',
        padding:10,
        margin:'0px 5px',
        display:'inline-block',
    },

    nav__menu:{
        fontSize:30,
        cursor:'pointer',
        color:'inherit',
        display:'none',

        ['@media (max-width: 950px)']: {
            display:'block',
          },
    },
    
    
}))