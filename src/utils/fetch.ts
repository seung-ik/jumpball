import axios from 'axios';
import { format } from 'date-fns';
import { NBAEventType } from '@pages/jumpball';
import { parseTimeToUsTime } from './parser';
import { DetailGameInfoType } from '@pages/jumpball/nba/[pid]';

const NBA_SCOREBOARD_URL = (_date: string) => {
  return `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${_date}`;
};
const MLB_SCOREBOARD_URL = (_date: string) => {
  return `http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard?dates=${_date}`;
};

const MLB_SUMMARY_URL = (_id: string) => {
  return `https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/summary?event=${_id}`;
};
const NBA_SUMMARY_URL = (_id: string) => {
  return `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${_id}`;
};

const normalizeGameInfo = (info: any, sportType: 'NBA' | 'MLB'): NBAEventType => {
  const _info: NBAEventType = {
    type: sportType,
    id: info.id,
    completed: info.status.type.completed,
    name: info.name,
    shortName: info.shortName,
    homeTeam: info.competitions[0].competitors[0],
    awayTeam: info.competitions[0].competitors[1],
    location: info.competitions[0].venue.fullName,
    date: info.date,
  };
  return _info;
};

export async function fetchScoreBoardByDate(
  _date: Date,
  _sport: 'NBA' | 'MLB',
): Promise<NBAEventType[]> {
  const parsedDate = format(parseTimeToUsTime(_date), 'yyyyMMdd');
  if (_sport === 'NBA') {
    const { data } = await axios.get(NBA_SCOREBOARD_URL(parsedDate));
    const _list = data.events.map((event: any) => normalizeGameInfo(event, _sport));
    return _list;
  } else {
    const { data } = await axios.get(MLB_SCOREBOARD_URL(parsedDate));
    const _list = data.events.map((event: any) => normalizeGameInfo(event, _sport));
    return _list;
  }
}

export async function fetchNbaSummaryById(_id: string): Promise<DetailGameInfoType> {
  const { data } = await axios.get(NBA_SUMMARY_URL(_id));

  const gameDate = data.header.competitions[0].date;
  const _data: DetailGameInfoType = {
    type: 'NBA',
    id: data.header.id,
    gameNote: data.header.gameNote,
    home: data.header.competitions[0].competitors[0],
    away: data.header.competitions[0].competitors[1],
    boxscore_home: data.boxscore.teams[1].statistics,
    boxscore_away: data.boxscore.teams[0].statistics,
    lastGames_home: '',
    lastGames_away: '',
    isStarted: new Date(gameDate) < new Date(),
    date: gameDate,
    location: data.gameInfo.venue.fullName,
    series: data.header.competitions[0].series,
    homeSum: 0,
    awaySum: 0,
  };

  if (new Date(gameDate) >= new Date()) {
    _data.lastGames_home = data.lastFiveGames[0].events.reverse();
    _data.lastGames_away = data.lastFiveGames[1].events.reverse();
  }

  return _data;
}

export async function fetchMlbSummaryById(_id: string): Promise<DetailGameInfoType> {
  const { data } = await axios.get(MLB_SUMMARY_URL(_id));

  const gameDate = data.header.competitions[0].date;
  const _data: DetailGameInfoType = {
    type: 'MLB',
    id: data.header.id,
    gameNote: data.header.gameNote,
    home: data.header.competitions[0].competitors[0],
    away: data.header.competitions[0].competitors[1],
    boxscore_home: data.boxscore.teams[0].statistics,
    boxscore_away: data.boxscore.teams[1].statistics,
    lastGames_home: '',
    lastGames_away: '',
    isStarted: new Date(gameDate) < new Date(),
    date: gameDate,
    location: data.gameInfo.venue.fullName,
    series: data.header.competitions[0].series,
    homeSum: 0,
    awaySum: 0,
  };

  if (new Date(gameDate) >= new Date()) {
    _data.lastGames_home = data.lastFiveGames[0].events.reverse();
    _data.lastGames_away = data.lastFiveGames[1].events.reverse();
  }

  return _data;
}
