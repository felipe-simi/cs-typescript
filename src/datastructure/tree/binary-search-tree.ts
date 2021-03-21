import { Comparable, Ordering } from '../../util/comparable';
import { Tree } from './tree';

class BinarySearchTree<T extends Comparable<T>> implements Tree<T> {
  private _root!: Node<T>;

  put(value: T): void {
    this._root = this.putNode(value, this._root);
  }

  private putNode(value: T, node: Node<T>): Node<T> {
    if (!node) {
      return new Node(value);
    }
    const comparison = value.compareTo(node.value);
    if (comparison === Ordering.LESS) {
      node.left = this.putNode(value, node.left);
    }
    if (comparison === Ordering.GREATER) {
      node.right = this.putNode(value, node.right);
    }
    if (comparison === Ordering.EQUAL) {
      node = new Node(value);
    }
    return node;
  }
}

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

export { BinarySearchTree };
