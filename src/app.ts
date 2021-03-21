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
  console.log('--- pre-oreder traversal ---');
  console.log(tree.preOrderTraversal());
  console.log('--- contains ---');
  console.log('25? ' + tree.contains(new ComparableNumber(25)));
  console.log('100? ' + tree.contains(new ComparableNumber(100)));
  console.log('71? ' + tree.contains(new ComparableNumber(71)));
  console.log('20? ' + tree.contains(new ComparableNumber(20)));
  console.log('30? ' + tree.contains(new ComparableNumber(30)));
  console.log('40? ' + tree.contains(new ComparableNumber(40)));
  console.log('--- distance ---');
  console.log(
    '20 to 40? ' + tree.getDistanceFrom(new ComparableNumber(20), new ComparableNumber(40))
  );
  console.log(
    '40 to 60? ' + tree.getDistanceFrom(new ComparableNumber(40), new ComparableNumber(60))
  );
  console.log(
    '60 to 80? ' + tree.getDistanceFrom(new ComparableNumber(60), new ComparableNumber(80))
  );
  console.log(
    '20 to 70? ' + tree.getDistanceFrom(new ComparableNumber(20), new ComparableNumber(70))
  );
  console.log(
    '50 to 30? ' + tree.getDistanceFrom(new ComparableNumber(50), new ComparableNumber(30))
  );
  console.log(
    '60 to 60? ' + tree.getDistanceFrom(new ComparableNumber(60), new ComparableNumber(60))
  );
  console.log(
    '60 to 101? ' + tree.getDistanceFrom(new ComparableNumber(60), new ComparableNumber(101))
  );
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
