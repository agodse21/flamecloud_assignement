import { SmallAddIcon } from "@chakra-ui/icons";
import { FaTelegramPlane } from "react-icons/fa";
import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Board } from "../components/Board";
import { Navbar } from "../components/Navbar";

import {
  AddNewTask,
  GetAllTask,
  GetDoingTask,
  GetDoneTask,
  GetPendingTask,
  GetTask,
  LoginUser,
} from "../Redux/action";
export const HomePage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const toast = useToast();
  const initial_Status = {
    pending: "pending",
    doing: "doing",
    done: "done",
  };
  const { id } = useParams();
  const user_id = id;
  const loading = useSelector((state) => state.isLoading);
  const pending_task = useSelector((state) => state.pending_task);
  const doing_task = useSelector((state) => state.doing_task);
  const done_task = useSelector((state) => state.done_task);
  const task = useSelector((state) => state.task);
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.isAuth);

  const Telegram_url = "https://telegram.me/AmolTetrisBot";
  useEffect(() => {
    dispatch(GetPendingTask(user_id));
    dispatch(GetDoingTask(user_id));
    dispatch(GetDoneTask(user_id));
    dispatch(GetAllTask(user_id));
  }, []);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const HandleTeleBtn = () => {
    window.open(Telegram_url);
  };

  const HandleSubmit = (status) => {
    let payload = { ...data, task_status: status, user_id: user_id };
    dispatch(AddNewTask(payload)).then((res) => {
      toast({
        title: res,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      dispatch(GetPendingTask(user_id));
      dispatch(GetDoingTask(user_id));
      dispatch(GetDoneTask(user_id));
    });
  };
  useEffect(() => {
    dispatch(LoginUser({ id: user_id }));
  }, []);

  return (
    <Box>
      <Navbar />
      {loading ? (
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Image mt={20} src="https://i.stack.imgur.com/MnyxU.gif" alt="x" />
        </Flex>
      ) : task.length == 0 ? (
        <Center>
          <VStack mt={40} spacing={5}>
            <Text>
              {" "}
              Your task list is Empty! You can use telegram bot for adding task
            </Text>

            <Button
              onClick={HandleTeleBtn}
              borderRadius={25}
              colorScheme={"blue"}
            >
              <FaTelegramPlane size={20} style={{ marginRight: "10px" }} /> Go
              There and Add Something
            </Button>
          </VStack>
        </Center>
      ) : (
        <SimpleGrid w="90%" m="auto" mt={50} columns={3} spacing={10}>
          {pending_task.length > 0 && (
            <VStack
              pt={3}
              pb={3}
              h="-webkit-fit-content"
              spacing={5}
              borderRadius={10}
              boxShadow={"dark-lg"}
            >
              <Flex
                justifyContent={"space-between"}
                pl={5}
                pr={5}
                w="100%"
                alignItems={"center"}
              >
                <Heading size={"md"}>Pending</Heading>

                <Popover>
                  <PopoverTrigger>
                    <Button colorScheme={"blue"}>+ Add new task</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader textAlign={"left"}>
                      Add new task in pending column
                    </PopoverHeader>
                    <PopoverBody>
                      <FormLabel>Enter task title:</FormLabel>
                      <Input
                        onChange={handleOnchange}
                        name="task_title"
                        placeholder="task title"
                      />
                      <FormLabel mt={2}>Enter Task Description:</FormLabel>
                      <Input
                        onChange={handleOnchange}
                        name="task_description"
                        placeholder="task description"
                      />

                      <Button
                        onClick={() => HandleSubmit(initial_Status.pending)}
                        w="100%"
                        colorScheme={"blue"}
                        mt={2}
                      >
                        Add Task
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              {pending_task?.map((ele) => (
                <>
                  <Board data={ele} user_id={user_id} />
                </>
              ))}
            </VStack>
          )}
          {doing_task.length > 0 && (
            <VStack
              p={2}
              pb={3}
              h="-webkit-fit-content"
              spacing={5}
              borderRadius={10}
              boxShadow={"dark-lg"}
            >
              <Flex
                justifyContent={"space-between"}
                pl={5}
                pr={5}
                w="100%"
                alignItems={"center"}
              >
                <Heading size={"md"}>Doing</Heading>

                <Popover>
                  <PopoverTrigger>
                    <Button colorScheme={"blue"}>+ Add new task</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader textAlign={"left"}>
                      Add new task in doing column
                    </PopoverHeader>
                    <PopoverBody>
                      <FormLabel>Enter task title:</FormLabel>
                      <Input
                        onChange={handleOnchange}
                        name="task_title"
                        placeholder="task title"
                      />
                      <FormLabel mt={2}>Enter Task Description:</FormLabel>
                      <Input
                        onChange={handleOnchange}
                        name="task_description"
                        placeholder="task description"
                      />

                      <Button
                        onClick={() => HandleSubmit(initial_Status.doing)}
                        w="100%"
                        colorScheme={"blue"}
                        mt={2}
                      >
                        Add Task
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              {doing_task?.map((ele) => (
                <>
                  <Board data={ele} user_id={user_id} />
                </>
              ))}
            </VStack>
          )}
          {done_task.length > 0 && (
            <VStack
              p={2}
              pb={3}
              h="-webkit-fit-content"
              spacing={5}
              borderRadius={10}
              boxShadow={"dark-lg"}
            >
              <Flex
                justifyContent={"space-between"}
                pl={5}
                pr={5}
                w="100%"
                alignItems={"center"}
              >
                <Heading size={"md"}>Done</Heading>

                <Popover>
                  <PopoverTrigger>
                    <Button colorScheme={"blue"}>+ Add new task</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader textAlign={"left"}>
                      Add new task in done column
                    </PopoverHeader>
                    <PopoverBody>
                      <FormLabel>Enter task title:</FormLabel>
                      <Input
                        onChange={handleOnchange}
                        name="task_title"
                        placeholder="task title"
                      />
                      <FormLabel mt={2}>Enter Task Description:</FormLabel>
                      <Input
                        onChange={handleOnchange}
                        name="task_description"
                        placeholder="task description"
                      />

                      <Button
                        onClick={() => HandleSubmit(initial_Status.done)}
                        w="100%"
                        colorScheme={"blue"}
                        mt={2}
                      >
                        Add Task
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              {done_task?.map((ele) => (
                <>
                  <Board data={ele} user_id={user_id} />
                </>
              ))}
            </VStack>
          )}
        </SimpleGrid>
      )}
    </Box>
  );
};
