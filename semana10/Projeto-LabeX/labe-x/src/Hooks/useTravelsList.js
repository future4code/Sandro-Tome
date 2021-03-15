import axios from "axios";
import { useEffect, useState } from "react";

export const useTravelList = (initialState) => {
    const [travels, setTravels] = useState([])

    useEffect(() =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/sandro-epps/trips').then((response) =>{
        setTravels(response.data.trips)
    })
  }, [])
  return travels
}