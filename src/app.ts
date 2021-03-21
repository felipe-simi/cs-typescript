import { BinarySearchTree } from './datastructure/tree/binary-search-tree';
import { Comparable, Ordering } from './util/comparable';

const startup = () => {
  const tree = new BinarySearchTree();
  tree.put(new ComparableNumber(50));
  tree.put(new ComparableNumber(30));
  tree.put(new ComparableNumber(70));
  tree.put(new ComparableNumber(60));
  tree.put(new ComparableNumber(20));
  tree.put(new ComparableNumber(40));
  tree.put(new ComparableNumber(80));
};

class ComparableNumber implements Comparable<ComparableNumber> {
  private _value: number;

  constructor(value: number) {
    this._value = value;
  }

  compareTo(obj: ComparableNumber): Ordering {
    if (this._value === obj._value) {
      return Ordering.EQUAL;
    }
    if (this._value > obj._value) {
      return Ordering.GREATER;
    }
    return Ordering.LESS;
  }
}

startup();
