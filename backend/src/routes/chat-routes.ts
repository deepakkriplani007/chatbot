import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompleteionValidator, validation } from "../utils/validators.js";
import {
  deleteChats,
  generateChatCompleteion,
  sendChatsToUser,
} from "../controllers/chat-controller.js";
// protected api
const chatRoutes = Router();
chatRoutes.post(
  "/new",
  ...chatCompleteionValidator,
  validation,
  verifyToken,
  generateChatCompleteion
);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
chatRoutes.delete("/delete", verifyToken, deleteChats);
export default chatRoutes;
