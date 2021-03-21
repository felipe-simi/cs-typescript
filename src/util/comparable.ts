interface Comparable<T> {
  compareTo(obj: T): Ordering;
}

enum Ordering {
  LESS,
  EQUAL,
  GREATER
}

export { Comparable, Ordering };
