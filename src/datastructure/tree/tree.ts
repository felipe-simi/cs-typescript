import { Comparable } from '../../util/comparable';

export interface Tree<T extends Comparable<T>> {
  preOrderTraversal(): Array<T>;
  put(value: T): void;
}
