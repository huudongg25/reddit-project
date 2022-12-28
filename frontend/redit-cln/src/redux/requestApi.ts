import { updateStart,updateError,updateSuccess } from "./userSlice";
import axios from "axios";


export const updateUser = async (user:any,dispatch:any) => {
    dispatch(updateStart());
    try {
        const res = await axios.post("/v1/update",user)
        console.log(res)
        dispatch(updateSuccess(res.data))
    } catch (error) {
        dispatch(updateError())
    }

}