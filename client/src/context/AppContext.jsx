/* eslint-disable no-unused-vars */
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const AppContext=createContext();



const AppContextProvider=(props)=>{

    const [credit, setCredit] = useState(0);
    const backendUrl=import.meta.env.VITE_BACKEND_URL;
    const [image,setImage]=useState(false)
    const {getToken}=useAuth()
    const {isSignedIn}=useUser()
    const {openSignedIn}=useClerk()
    const [resultImage,setResultImage]=useState(false)

    const navigate=useNavigate()
    const loadCreditsData=async()=>{
        try {
            const token=await getToken()
            const data=await axios.get(backendUrl+'/api/user/credits',{headers:{token}})
            if(data.data.success){
                setCredit(data.data.credits);
                console.log(data.credits)
            }
        } catch (error) {
            console.loge(error)
            toast.error(error.message)
        }
    }


    const removeBg = async (image) => {
        try {
          if (!isSignedIn) {
            return openSignedIn();
          }
      
          setImage(image);
          setResultImage(false);
          navigate("/result");
      
          const token = await getToken();
          const formData = new FormData();
          image && formData.append("image", image);
      
          const response = await axios.post(
            backendUrl + "/api/image/remove-bg",
            formData,
            { headers: { token } }
          );
      
          const resData = response.data;
      
          if (resData.success) {
            setResultImage(resData.resultImage);
            if (resData.creditBalance === 0) {
              setCredit(resData.creditBalance);
              toast.info("You have 0 credits left. Please purchase more.");
              navigate("/buy");
              return;
            } else {
              setCredit(resData.creditBalance);
            }
          } else {
            toast.error(resData.message || "Something went wrong.");
            if (typeof resData.creditBalance !== "undefined") {
              setCredit(resData.creditBalance);
            }
          }
      
          console.log(image);
        } catch (error) {
          console.log(error);
          toast.error(error.message || "Error removing background.");
        }
      };
      

    const value={
     credit,setCredit,loadCreditsData,
     backendUrl,
     image,setImage,
     removeBg,
     resultImage,setResultImage
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}


export  default AppContextProvider;