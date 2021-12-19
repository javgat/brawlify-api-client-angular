export * from './brawler.service';
import { BrawlerService } from './brawler.service';
export * from './gamemode.service';
import { GamemodeService } from './gamemode.service';
export * from './map.service';
import { MapService } from './map.service';
export const APIS = [BrawlerService, GamemodeService, MapService];
