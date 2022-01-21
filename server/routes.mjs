import express from "express";
import fetch from "node-fetch";

import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  // REQUEST_TOKEN_URL,
  // LOGIN_URL,
  // SESSION_ID_URL,
} from "./const.mjs";

const router = express.Router();

router.get("/movies", async (req, res, next) => {
  try {
    const { searchTerm, page } = req.query;

    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:movieId/credits", async (req, res, next) => {
  try {
    const { movieId } = req.params;

    const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:movieId", async (req, res, next) => {
  try {
    const { movieId } = req.params;

    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

export { router };
