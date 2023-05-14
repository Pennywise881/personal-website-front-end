import {createStore} from 'vuex'
import {v4 as uuidv4} from 'uuid'

export default createStore({
    state:{
        authId: '',
        section: '',
        showNavbar: true,
    },
    mutations:{
        INIT_STORE(state)
        {   
            // console.log("Initiing");
            if(!localStorage.getItem('authId'))
            {
                state.authId = uuidv4();
                localStorage.setItem('authId', state.authId);
            }
            else state.authId = localStorage.getItem('authId');
        },
        SET_BOOKING_DATA(state, bookingData)
        {
            localStorage.setItem("bookingData", JSON.stringify(bookingData));
        },
        SET_SECTION(state, section)
        {
            state.section = section;
        },
        SET_SHOWNAVBAR(state, showNavbar)
        {   
            // console.log("This");
            state.showNavbar = showNavbar;
        }
    },
    actions:{

    },
    modules:{

    },
    getters:{
        authId: state => {
            state.authId = localStorage.getItem('authId');
            return state.authId;
        },
        currentSection: state=> {
            return state.section;
        },
        isNavbar: state=>{
            return state.showNavbar;
        }
    }
})