import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TelegramLoginButton from "react-telegram-login";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../Redux/action";
import "../App.css";
export const WelComePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTelegramResponse = (response) => {
    if (response) {
      dispatch(
        LoginUser({ username: response.username, id: response.id })
      ).then((res) => {
        navigate(`/home/${response.id}`);
      });
    }
  };

  return (
    <Box
      w="50%"
      m="auto"
      p={10}
      borderRadius={25}
      mt={"100"}
      h={"-moz-max-content"}
      boxShadow={"dark-lg"}
    >
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={"3xl"}>Welcome to FlameCloud's Trello Board!</Text>
      </Flex>
      <Flex
        alignItems={"center"}
        p={5}
        m="auto"
        mt={"20"}
        justifyContent={"center"}
        fontSize={20}
        cursor="pointer"
      >
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="AmolTetrisBot"
        />
      </Flex>
    </Box>
  );
};
