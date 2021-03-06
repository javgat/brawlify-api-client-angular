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
import { Gadget } from './gadget';
import { ModelClass } from './modelClass';
import { Rarity } from './rarity';
import { StarPower } from './starPower';
import { Video } from './video';


export interface Brawler { 
    id: number;
    avatarId: number;
    name: string;
    hash: string;
    path: string;
    released: boolean;
    version: number;
    link: string;
    imageUrl: string;
    imageUrl2: string;
    imageUrl3: string;
    _class: ModelClass;
    rarity: Rarity;
    unlock?: string;
    description: string;
    starPowers: Array<StarPower>;
    gadgets: Array<Gadget>;
    videos: Array<Video>;
}
