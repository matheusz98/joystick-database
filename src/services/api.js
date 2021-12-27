const BASE_URL = "https://api.rawg.io/api/";
const API_KEY = process.env.REACT_APP_API_KEY;

// Calculating current month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Calculating current day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Getting current DD/MM/YYYY
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// List of games
export const gamesHome = () => `${BASE_URL}games?key=${API_KEY}&page_size=21&`;

// Popular games
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
export const popularGamesUrl = () => `${BASE_URL}${popular_games}`;

// Upcoming games
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;
export const upcomingGamesUrl = () => `${BASE_URL}${upcoming_games}`;

// New games
const new_games = `games?key=${API_KEY}=${lastYear},${currentDate}&ordering=-released&page_size=20`;
export const newGamesUrl = () => `${BASE_URL}${new_games}`;

// Game details
export const gameDetailsUrl = (id) => `${BASE_URL}games/${id}?key=${API_KEY}`;

// Game screenshots
export const gameScreenshots = (id) =>
  `${BASE_URL}games/${id}/screenshots?key=${API_KEY}`;

// Search games
export const searchGames = (query) =>
  `${BASE_URL}games/key=${API_KEY}&search=${query}&page_size=20`;

// Game genres
export const gameGenres = () => `${BASE_URL}genres?key=${API_KEY}`;

// Game platforms
export const gamePlatforms = () => `${BASE_URL}platforms?key=${API_KEY}`;

// Game publishers
export const gamePublishers = () =>
  `${BASE_URL}publishers?key=${API_KEY}&page_size=30`;

// Specific game genre
export const specificGameGenre = (id) =>
  `${BASE_URL}genres/${id}?key=${API_KEY}`;

// List of game genres
export const gameGenresList = (id) =>
  `${BASE_URL}games?key=${API_KEY}&genres=${id}&page_size=21`;

// Specific game platform
export const specificGamePlatform = (id) =>
  `${BASE_URL}platforms/${id}?key=${API_KEY}`;

// List of game platforms
export const gamePlatformsList = (id) =>
  `${BASE_URL}games?key=${API_KEY}&platforms=${id}&page_size=21`;

// Specific game publisher
export const specificGamePublisher = (id) =>
  `${BASE_URL}publishers/${id}?key=${API_KEY}`;

// List of game publishers
export const gamePublishersList = (id) =>
  `${BASE_URL}games?key=${API_KEY}&publishers=${id}&page_size=21`;
