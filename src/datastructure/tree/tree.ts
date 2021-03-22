import { Comparable } from '../../util/comparable';

interface Tree<T extends Comparable<T>> {
  contains(value: T): boolean;
  preOrderTraversal(): Array<T>;
  put(value: T): void;
}

export { Tree };
