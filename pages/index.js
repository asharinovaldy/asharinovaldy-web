import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Stack from "../components/Stack/Stack";
import useResponsive from "../hooks/useResponsive";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { isMobile } = useResponsive();
  props = {
    isMobile,
  };
  return (
    <>
      <Head>
        <title>Ashari Novaldi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header {...props} />
      <Hero {...props} />
      <Stack {...props} />
      <Projects {...props} />
      <About {...props} />
    </>
  );
}
