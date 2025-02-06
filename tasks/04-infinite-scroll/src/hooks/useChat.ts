import { useReducer, useCallback, useState } from "react";
import type { ChatState, ChatAction, Message } from "../types";

const usersObj = [
  { id: "userId 1", name: "First User" },
  { id: "userId 2", name: "Second User" },
];

const initialState: ChatState = {
  messages: [],
  users: {},
  hasMore: true,
  loading: false,
  error: null,
};

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "MESSAGES_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "MESSAGES_LOADED":
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
        users: {
          ...state.users,
          ...action.payload.users.reduce(
            (acc, user) => ({
              ...acc,
              [user.id]: user,
            }),
            {}
          ),
        },
        loading: false,
        hasMore: action.payload.messages.length > 0,
      };

    case "MESSAGES_ERROR":
      return {
        ...state,
        loading: false,
        hasMore: false,
        error: action.payload,
      };

    case "MESSAGE_RECEIVED":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case "MESSAGE_STATUS_UPDATED":
      return {
        ...state,
        messages: state.messages.map((message) =>
          message.id === action.payload.id
            ? { ...message, status: action.payload.status }
            : message
        ),
      };

    default:
      return state;
  }
}
export function useChat() {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const loadMessages = useCallback(async () => {
    if (state.loading || !state.hasMore || isFetching) {
      return;
    }

    setIsFetching(true);
    dispatch({ type: "MESSAGES_LOADING" });

    try {
      const response = await fetch(
        `https://67a0cac55bcfff4fabe0a4cb.mockapi.io/api/messages?page=${currentPage}&limit=10`
      );
      const data = await response.json();

      if (data.length === 0) {
        dispatch({ type: "MESSAGES_ERROR", payload: "No more messages" });
      } else {
        dispatch({
          type: "MESSAGES_LOADED",
          payload: { messages: data, users: usersObj },
        });
        setCurrentPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      dispatch({ type: "MESSAGES_ERROR", payload: "Something went wrong" });
    } finally {
      setIsFetching(false);
    }
  }, [currentPage, isFetching, state.hasMore, state.loading]);

  const updateMessageStatus = useCallback(
    (messageId: string, status: Message["status"]) => {
      dispatch({
        type: "MESSAGE_STATUS_UPDATED",
        payload: { id: messageId, status },
      });
    },
    []
  );

  return {
    ...state,
    loadMessages,
    updateMessageStatus,
  };
}
