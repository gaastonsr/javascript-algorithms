# How To Use

## Test Utility

To test an algorithm you can use the `test.js` utility.

Usage

```
./test.js ALGORITHM SAMPLE_SIZE
```

Where `ALGORITHM` is one of the availables algorithms in the `algorithms` folder without the `Sort` suffix. Examples of valid algorithms are `bubble`, `selection`, `insertion`, `topDownMerge`, `bottomUpMerge`, `quick`, `quick3Way`, etc.

And `SAMPLE_SIZE` is an integer without commas. So if you want a sample size of 10,000 you would write `10000`.

`SAMPLE_SIZE` defaults to 100,000 if not defined.

Examples of usage of `test.js`

```
./test.js bubble 1000
./test.js selection 10000
./test.js insertion 10000
./test.js topDownMerge 100000
```

## Compare Utility

`utility.js` is used to compare running time of two algorithms.

Usage

```
./compare.js ALGORITHM_1 ALGORITHM_2 [SAMPLE_SIZE]
```

Where `ALGORITHM_1` and `ALGORITHM_2` should be valid algorithms names as defined before and `SAMPLE_SIZE` is optional. It defaults to 100,000 if not defined.

Examples of usage

```
./compare.js selection insertion 10000
./compare.js topDownMerge bottomUpMerge
./compare.js quick quick3Way
./compare.js topDownMerge quick
```

## Test PriorityQueue Implementation

Run `test.js` inside the `PriorityQueue` folder.

Usage

```
./PriorityQueue/test.js [SAMPLE_SIZE]
```

`SAMPLE_SIZE` defaults to 100,000 if not defined.