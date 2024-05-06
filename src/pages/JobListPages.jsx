import { useEffect, useState } from "react";
//
import { Container, Col, Row } from "react-bootstrap/";
import { JobListing } from "../components/JobListing";
import { Buttons } from "../components/common/Buttons";
import "../assets/css/JobListPages.css";
import { IconTextList } from "../api/IconTextList";
import { IconsCollection } from "../components/common/IconsCollection";
import { LoadingButton } from "../components/common/LoadingButton";
import { Link } from "react-router-dom";
import { useApiData } from "../components/common/useApiData";

export const JobListPages = () => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { data, loading, error } = useApiData();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setData("Esta pagina se encuentra en proceso, derigirse a ....");
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setError("Ocurrió un error al obtener los datos");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="position-absolute   containerPages border">
      {error ? (
        <p className="text-red-600 font-bold">{error}</p>
      ) : loading ? (
        <div className="flex justify-center items-center bg-slate-100 min-h-screen">
          {" "}
          <LoadingButton to="/empleo">Cargando...</LoadingButton>
        </div>
      ) : (
        <>
          {IconTextList.map((item, i) => (
            <div className="containerCard flex  mt-3 ">
              <img src={item.image} alt="icono" className="" />
              <Container>
                <Row>
                  <Col md={7} className="flex my-2">
                    <p className="font-bold">{item.title}</p>
                    {item.botons &&
                      item.botons.map((name, index) => (
                        <Buttons
                          key={name.id}
                          text={name.boton}
                          color="#ffff"
                          tamanoTexto={12}
                        />
                      ))}
                  </Col>
                  <Col sm={4}></Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="container  d-flex justify-content-arouter  align-items-center">
                      {item.names &&
                        item.names.map((name, j) => (
                          <JobListing name={name.name} icon={name.icon} />
                        ))}
                      {item.icons &&
                        item.icons.map((icon) => (
                          <div className="text-dark-700 ">
                            <IconsCollection IconsButtons={icon.icon} />
                          </div>
                        ))}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ))}

          <Link to="/empleo">Ir a https://workshop.com/</Link>
        </>
      )}
    </div>
  );
};
