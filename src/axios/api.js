import { get, post } from  './http';

//测试
export const getAnimeList =(p,d) =>post('/anime/queryAll',p,d);
