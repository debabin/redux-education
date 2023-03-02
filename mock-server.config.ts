import { MockServerConfig } from "mock-config-server";

const mockServerConfig: MockServerConfig = {
  port: 3001,
  baseUrl: "/api",
  configs: [
    {
      path: "/users/:id",
      method: "get",
      routes: [{ data: { id: 1, emoji: "🦁", name: "Nursultan" } }],
    },
    {
      path: "/users",
      method: "get",
      routes: [
        {
          data: [
            {
              id: 0,
              name: "Sophia",
              emoji: "😊",
            },
            {
              id: 1,
              name: "Amalia",
              emoji: "🤖",
            },
            {
              id: 2,
              name: "Myra",
              emoji: "👽",
            },
            {
              id: 3,
              name: "Juliana",
              emoji: "🦕",
            },
            {
              id: 4,
              name: "Madelyn",
              emoji: "👻",
            },
            {
              id: 5,
              name: "Wilma",
              emoji: "🦖",
            },
            {
              id: 6,
              name: "Mccarty",
              emoji: "🤟",
            },
            {
              id: 7,
              name: "Lea",
              emoji: "🐉",
            },
            {
              id: 8,
              name: "Barber",
              emoji: "🤙",
            },
          ],
        },
      ],
    },
    {
      path: "/users",
      method: "post",
      routes: [
        {
          data: { id: 111111, emoji: "☄️", name: "Dima" },
          entities: { body: { name: "dima" } },
        },
      ],
    },
  ],
};

export default mockServerConfig;
