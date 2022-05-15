import { useState, useEffect } from "react";
import Api from "server/Api";

export default function useRol() {
  const [listRol, setListRol] = useState(null);
  const api = new Api();
  const fetchRoles = () => {
    api
      .getRolList()
      .then((response) => setListRol(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(function effectFunction() {
    if (listRol == null) {
      fetchRoles();
    }
  }, []);

  return listRol;
}
