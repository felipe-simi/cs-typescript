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
  console.log('pre-oreder traversal');
  console.log(tree.preOrderTraversal());
  console.log('contains 25? ' + tree.contains(new ComparableNumber(25)));
  console.log('contains 100? ' + tree.contains(new ComparableNumber(100)));
  console.log('contains 71? ' + tree.contains(new ComparableNumber(71)));
  console.log('contains 20? ' + tree.contains(new ComparableNumber(20)));
  console.log('contains 30? ' + tree.contains(new ComparableNumber(30)));
  console.log('contains 40? ' + tree.contains(new ComparableNumber(40)));
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
