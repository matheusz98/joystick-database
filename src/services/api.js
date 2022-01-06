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
const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=20`;
export const newGamesUrl = () => `${BASE_URL}${new_games}`;

// Search games
export const searchGamesURL = (game_name) =>
  `${BASE_URL}games?key=${API_KEY}&search=${game_name}&page_size=21`;

// Game details
export const gameDetailsUrl = (id) => `${BASE_URL}games/${id}?key=${API_KEY}`;

// Game screenshots
export const gameScreenshots = (id) =>
  `${BASE_URL}games/${id}/screenshots?key=${API_KEY}`;

// Game genres
export const gameGenres = () => `${BASE_URL}genres?key=${API_KEY}`;

// Details of a specific game genre
export const genreDetails = (id) => `${BASE_URL}genres/${id}?key=${API_KEY}`;

// List of games of a specific game genre
export const genreGameList = (id) =>
  `${BASE_URL}games?key=${API_KEY}&genres=${id}&page_size=21`;

// Platforms
export const platformsList = () =>
  `${BASE_URL}platforms?key=${API_KEY}&page_size=21`;

// Details of a specific platform
export const platformDetails = (id) =>
  `${BASE_URL}platforms/${id}?key=${API_KEY}`;

// List of games of a specific platform
export const platformsGameList = (id) =>
  `${BASE_URL}games?key=${API_KEY}&platforms=${id}&page_size=21`;

export const gameAchievements = (id) =>
  `${BASE_URL}games/${id}/achievements?key=${API_KEY}`;

// Publishers
export const publishersList = () =>
  `${BASE_URL}publishers?key=${API_KEY}&page_size=21`;

// Details of a specific publisher
export const publisherDetails = (id) =>
  `${BASE_URL}publishers/${id}?key=${API_KEY}`;

// List of games of a specific publisher
export const publisherGameList = (id) =>
  `${BASE_URL}games?key=${API_KEY}&publishers=${id}&page_size=21`;
