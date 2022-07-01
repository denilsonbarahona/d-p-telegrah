import {setSession} from "@/app/utils/sessionStorage";

const getLogin = (login)=>{
    return {
        [login.pending]: (state)=>{
            state.loading= true;
        },
        [login.fulfilled]: (state, action)=>{
            setSession("user", action.payload);
            state.user = action.payload;
            state.loading = false;
            state.isLoaded = true;
        },
        [login.rejected]: (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        }
    };
};

export default getLogin;