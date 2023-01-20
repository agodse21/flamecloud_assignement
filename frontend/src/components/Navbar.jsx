import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as types from "../Redux/ActionTypes";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.current_user);
  const Telegram_url = "https://telegram.me/AmolTetrisBot";
  const HandleTeleBtn = () => {
    window.open(Telegram_url);
  };

  const HandleLogout = () => {
    dispatch({ type: types.GET_LOGIN_USER_LOGOUT });
    navigate("/");
  };

  return (
    <Box w="100%" bg={"#3182CE"} color="white" h="80px">
      <Flex
        w={"90%"}
        m="auto"
        alignItems={"center"}
        h="100%"
        justifyContent={"space-between"}
      >
        <Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"red"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            F
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"orange"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            L
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"green"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            A
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"blue"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            M
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"black"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            E
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"teal"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            C
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"darkviolet"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            L
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"darkorange"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            O
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"red"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            U
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"violet"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            D
          </Flex>
        </Flex>

        <Flex gap={5} alignItems="center">
          <Button onClick={HandleTeleBtn} colorScheme={"blue"}>
            <FaTelegramPlane size={20} style={{ marginRight: "10px" }} />
            Handle Board by using Telegram bot
          </Button>
          <Text fontSize={"20"} textTransform="capitalize">
            {user.name}
          </Text>
          <Button bg={"red"} onClick={HandleLogout} colorScheme={"red"}>
            Logout
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
