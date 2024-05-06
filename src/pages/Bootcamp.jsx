import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoadingButton } from "../components/common/LoadingButton";
import { useApiData } from "../components/common/useApiData";

export const Bootcamp = () => {
  const { data, loading, error } = useApiData();

  return (
    <div className="flex justify-center items-center bg-slate-100 min-h-screen">
      <div className="text-center">
        {error ? (
          <p className="text-red-600 font-bold">{error}</p>
        ) : loading ? (
          <LoadingButton to="/empleo">Cargando...</LoadingButton>
        ) : (
          <>
            <h4>{data}</h4>

            <Link to="/empleo">Ir a https://HomePages.com/</Link>
          </>
        )}
      </div>
    </div>
  );
};
