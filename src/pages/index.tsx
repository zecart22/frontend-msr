import type { NextPage } from "next";
import Head from "next/head";
import { Flex, Box, keyframes, Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Texas Burguer - Login</title>
      </Head>
      <Heading fontFamily={"Rock Salt, cursive"} color={"theme.red"}>
        Home teste
      </Heading>
    </Box>
  );
};

export default Home;
