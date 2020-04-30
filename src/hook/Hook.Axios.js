import React, { Fragment, useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  if (!options.url) return;

  const [trigger, setTrigger] = useState(0);

  const handlerTrigger = () => {
    setState({
      loading: true
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(options)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({
          ...state,
          loading: false,
          error
        });
      });
  }, [trigger]);

  return { ...state, handlerTrigger };
};

const HookAxios = () => {
  const { loading, handlerTrigger } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  return (
    <Fragment>
      <h3> {loading ? "Loading..." : "End..."} </h3>
      <button onClick={handlerTrigger}> refetch </button>
    </Fragment>
  );
};

export default HookAxios;
