Hashes are good for
Modeling relationships from one thing to another thing
Filtering out duplicates
Caching/memorizing data instead of making your server do work

You'll almost never have to implement a hash table yourself. The programming language you use should provide an implementation for you. You can use Python's hash tables and assume that you'll get the average case performance: constant time.

Hash tables are a powerful data structure because they're so fast and they let you model data in a different way. You might soon find that you're using them all the time:

You can make a hash table by combining a hash function with an array.
Collisions are bad. You need a hash function that minimizes collisions.
Hash tables have really fast serach, insert, and delete.
Hash tables are good for modeling relationships from one item to another item.
Once your load factor is greater than 0.7, it's time to resize your hash table.
Hash tables are used for caching data (for example, with a web server).
Hash tables are great for catching duplicates.
