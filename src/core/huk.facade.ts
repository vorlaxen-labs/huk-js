import { string } from '../modules/string';
import { number } from '../modules/number';
import { date } from '../modules/date';
import { array } from '../modules/array';
import { object } from '../modules/object';
import { storage } from '../modules/storage';
import { is } from '../modules/is';
import { fn } from '../modules/function';
import { crypto } from '../modules/crypto';

class HuKs {
  public readonly string = string;
  public readonly number = number;
  public readonly date = date;
  public readonly array = array;
  public readonly object = object;
  public readonly is = is;
  public readonly storage = storage;
  public readonly fn = fn;
  public readonly crypto = crypto;
}

export const HuK = new HuKs();
