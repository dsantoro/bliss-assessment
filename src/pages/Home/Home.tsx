import React from "react";
import { Redirect } from "react-router-dom";
import { useGetHealth } from "./hooks";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { isLoading, error } = useGetHealth();

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return <Redirect to="/questions" />;
};

export default Home;
