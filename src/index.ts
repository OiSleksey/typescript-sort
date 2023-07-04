import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([12, -9, 4, 1]);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection('cycka');
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(8);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);
linkedList.sort();
linkedList.print();
