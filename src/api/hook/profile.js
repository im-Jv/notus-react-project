import { useAuth } from "./useAuth";
import { useContext } from "react";
import profileContext from "../context/profile/profileContext";

export default function useSet(){

  const {user} = useAuth()

  const {userInfo} = useContext(profileContext)

  return {userInfo, user};
}
