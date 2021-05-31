import { get, post } from "@/utils/http/index-v0";

export const getTest2 = () => get(
  "/api/test", { msg: "send" }
);

export const getTest = () => post(
  "/api/one", { msg: "send" }
);