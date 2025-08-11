import axios from "axios";
import type { User } from "../types/User";

export const fetchUsers = async (): Promise<User[]> => {

  try{

    const response = await axios.get(
      import.meta.env.VITE_USERS_API
    );
    return response.data;
  }
  catch(err){
throw new Error("Failed to fetch users");

  }
};
