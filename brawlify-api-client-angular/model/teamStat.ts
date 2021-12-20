/**
 * Brawlify API (not official)
 * Some queries of the Brawlify API. This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell nor Brawlify and Supercell or Brawlify are not responsible for it
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { TeamStatData } from './teamStatData';


export interface TeamStat { 
    name: string;
    hash: string;
    /**
     * brawler id
     */
    brawler1: number;
    /**
     * brawler id
     */
    brawler2: number;
    /**
     * brawler id
     */
    brawler3: number;
    data: TeamStatData;
}
