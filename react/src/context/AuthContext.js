import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = { 
    user: {
        _id: "63b99ab7b210aa507eb83fe3",
        username: "yyyyy",
         email: "bilal666@gmail.com",
        profilePicture: "/image.jpg",
         coverPicture:'',
          isAdmin: false,
        followers: [],
        followings: [],
    },
isFetching: false,
error: false,
};
export const AuthContext = createContext (INITIAL_STATE) ;
export const AuthContextProvider = ({children}) =>{
const [state, dispatch] = useReducer (AuthReducer, INITIAL_STATE) ;
return (
<AuthContext.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch }}>
{children }
</AuthContext.Provider>
)
}