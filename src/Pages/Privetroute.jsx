import { useContext } from "react";
import { AuthContext } from "../authproviders/AuthProvider";
import { Navigate,  useLocation} from "react-router-dom";

const Privetroute = ({children}) => {
       
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }


    // return <Navigate state={{from: location}} to="/login" replace></Navigate>
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default Privetroute;