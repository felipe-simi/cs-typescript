import { Comparable, Ordering } from '../../util/comparable';
import { Tree } from './tree';

class BinarySearchTree<T extends Comparable<T>> implements Tree<T> {
  private _root!: Node<T>;

  contains(value: T): boolean {
    let currentNode = this._root;
    while (currentNode) {
      const comparison = value.compareTo(currentNode.value);
      if (comparison === Ordering.EQUAL) {
        return true;
      }
      if (comparison === Ordering.LESS) {
        currentNode = currentNode.left;
      }
      if (comparison === Ordering.GREATER) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  getDistanceFrom(value1: T, value2: T): number {
    if (!this.contains(value1) || !this.contains(value2)) {
      return 0;
    }
    const lca = this.getLowestCommonAncestor(value1, value2);
    if (lca) {
      return this.countDist(lca, value1) + this.countDist(lca, value2);
    }
    return 0;
  }

  private getLowestCommonAncestor(value1: T, value2: T): Node<T> | null {
    if (this.contains(value1) && this.contains(value2)) {
      const node = this.findLca(this._root, value1, value2);
      return node ? node : null;
    }
    return null;
  }

  private findLca(node: Node<T>, value1: T, value2: T): Node<T> | null {
    if (!node) {
      return null;
    }
    if (
      node.value.compareTo(value1) === Ordering.GREATER &&
      node.value.compareTo(value2) === Ordering.GREATER
    ) {
      return this.findLca(node.left, value1, value2);
    }
    if (
      node.value.compareTo(value1) === Ordering.LESS &&
      node.value.compareTo(value2) === Ordering.LESS
    )
      return this.findLca(node.right, value1, value2);

    return node;
  }

  private countDist(lca: Node<T>, value: T): number {
    let currentNode = lca;
    let dist = 0;
    while (currentNode) {
      const comparison = value.compareTo(currentNode.value);
      if (comparison === Ordering.EQUAL) {
        return dist;
      }
      dist++;
      if (comparison === Ordering.LESS) {
        currentNode = currentNode.left;
      }
      if (comparison === Ordering.GREATER) {
        currentNode = currentNode.right;
      }
    }
    throw new Error(`Value ${value} not found in sub-tree with LCA ${lca}.`);
  }

  preOrderTraversal(): Array<T> {
    return this.preOrder(this._root);
  }

  private preOrder(node: Node<T>): Array<T> {
    if (!node) {
      return [];
    }
    const results: Array<T> = [node.value];
    results.push(...this.preOrder(node.left));
    results.push(...this.preOrder(node.right));
    return results;
  }

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
