import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([12, -9, 4, 1]);
const characterCollection = new CharacterCollection('cycka');

const sorter1 = new Sorter(numberCollection);
const sorter2 = new Sorter(characterCollection);

// console.log(sorter.collection);
console.log(numberCollection.data);
console.log(characterCollection.data);
sorter1.sort();
sorter2.sort();
// console.log(sorter);
console.log(numberCollection.data);
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(8);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);

const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
