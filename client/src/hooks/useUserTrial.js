import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData (initial) {

  const addUserTrial = (userId) => {
    return axios.post(`http://localhost:8001/api/users:${userId}`, {

    })
    .then(() => {
      
    })
  }

  return addUserTrial;
}