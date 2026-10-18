import { createModule } from '../../core/create-module';
import { objectTransform } from './transform.part';
import { objectQuery } from './query.part';

const Transform = createModule(objectTransform);
const Query     = createModule(objectQuery);

export const object = { ...Transform, ...Query };

export type ObjectModule = typeof object;

export const { clone, merge, get, pick } = object;