import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoadingButton } from "../components/common/LoadingButton";
import { useApiData } from "../components/common/useApiData";
export const HomePages = () => {
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
            <h2 className="mb-4 text-4xl font-bold">Trabajo hecho por los estudiantes del Bootcamp de PeakU</h2>
            <p className="font-semibold">
              <span className="text-blue-500 text-2xl ">Jackson Gutiérrez</span>
              <br />
              <span className="text-2xl text-blue-400">Ángel Peraza</span>
              <br />
              <span className="text-2xl text-blue-300">Torcoroma Arias</span>
            </p>

            <Link to="/empleo">Ir a https://workshop.com/</Link>
          </>
        )}
      </div>
    </div>
  );
};
