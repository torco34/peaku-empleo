import React, { useState, useEffect } from "react";

const fetchDataFromApi = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return "Esta página se encuentra en proceso. Para más información, ir a";

    
  } catch (error) {
    console.error("Error al obtener los datos de esta pagina:", error);
    throw error;
  }
};

export const useApiData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorPages, setErrorPages] = useState("Lo sentimos, parece que algo salió mal. Por favor, intenta nuevamente más tarde o regresa a la página de inicio.");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchDataFromApi();
       
        setData(result);
        setError(error);
      } catch (error) {
      } finally {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error, errorPages };
};
