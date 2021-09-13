import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems: 'center',
        padding:'20px 0',
        width:'100%',
        height:'45vh',
        borderRadius:10,
        color:'white',
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    infocard_title: {
        textTransform:'uppercase',
        letterSpacing:'2px',
        fontSize:'1.2rem',
        fontWeight:'bold'
    }
});
