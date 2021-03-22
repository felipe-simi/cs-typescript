import { Comparable } from '../../util/comparable';

class Node<T extends Comparable<T>> {
  private _value: T;
  private _left!: Node<T>;
  private _right!: Node<T>;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set left(node: Node<T>) {
    this._left = node;
  }

  get left(): Node<T> {
    return this._left;
  }

  set right(node: Node<T>) {
    this._right = node;
  }

  get right(): Node<T> {
    return this._right;
  }
}

export { Node };
