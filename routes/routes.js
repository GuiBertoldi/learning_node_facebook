import express from "express";
import {
  getItemFeed,
  getItemId,
  createItemFeed,
  updateItemFeed,
  deleteItemFeed
} from "../controllers/feed.js";

import {
  getActions,
  getActionsId,
  createAction,
  updateAction,
  deleteAction
} from "../controllers/actions.js";

const router = express.Router();

router.post("/feed", createItemFeed);
router.put("/feed/:id", updateItemFeed);
router.get("/feed", getItemFeed);
router.get("/feed/:id", getItemId);
router.delete("/feed/:id", deleteItemFeed);

router.post("/actions", createAction);
router.put("/actions/:id", updateAction);
router.get("/actions", getActions);
router.get("/actions/:id", getActionsId);
router.delete("/actions/:id", deleteAction);

export default router;
