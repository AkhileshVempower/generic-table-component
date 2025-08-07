import axios from "axios";
import type { User } from "../types/User";

export const fetchUsers = async (): Promise<User[]> => {
  try{

    const response = await axios(
      "https://excelerate-profile-dev.s3.ap-south-1.amazonaws.com/1681980949109_users.json"
    );
    return response.data;
  }
  catch(err){
throw new Error("Failed to fetch users");

  }
};
