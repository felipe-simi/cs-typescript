import { Comparable } from '../../util/comparable';

export interface Tree<T extends Comparable<T>> {
  put(value: T): void;
}
