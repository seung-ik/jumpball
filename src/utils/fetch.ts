import axios from 'axios';
import { format } from 'date-fns';
import { NBAEventType } from '@pages/jumpball';
import { parseTimeToUsTime } from './parser';

const normalizeGameInfo = (info: any): NBAEventType => {
  console.log(info);
  const _info: NBAEventType = {
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

export async function fetchScoreBoardByDate(_date: Date): Promise<NBAEventType[]> {
  const { data } = await axios.get(
    `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${format(
      parseTimeToUsTime(_date),
      'yyyyMMdd',
    )}`,
  );

  const _list = data.events.map((event: any) => normalizeGameInfo(event));
  return _list;
}
