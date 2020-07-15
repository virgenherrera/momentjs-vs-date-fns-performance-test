# Date-fns and MomentJs Performance test

We are testing the performance of date-fns and momentJs against some basic operations of a dates library:

- Getting the day of the year.
- Manipulating a date, in this case we're adding one day to the current date.
- Query: using the isAfter operator.

## Usage

```
npm install
npm run bench
```

## Specs

The specs from the machine on which the tests were run:

```
$ node -v
v12.16.1

$ /usr/sbin/system_profiler systeminfo

Hardware Overview:
  OS Name:                   Microsoft Windows 10 Pro
  OS Version:                10.0.18363 N/A Build 18363
  OS Manufacturer:           Microsoft Corporation
  System Model:              HP EliteBook 745 G6
  System Type:               x64-based PC
  Processor(s):              1 Processor(s) Installed.
                            [01]: AMD64 Family 23 Model 24 Stepping 1 AuthenticAMD ~2300 Mhz
  BIOS Version:              HP R74 Ver. 01.05.00, 4/15/2020
  Total Physical Memory:     14,269 MB
  Available Physical Memory: 6,965 MB
```

### Bundle sizes

Launch with `npm run bundle`.

```
Size moment 231.434KB
Size moment-no-locales 49.467KB
Size date-fns 30.387KB
```
## Results

Get current day of year.
```
  2 tests completed.

  moment   x 127,764 ops/sec ±9.43% (79 runs sampled)
  date-fns x 133,610 ops/sec ±3.17% (75 runs sampled)

  Fastest are: date-fns, moment
```

Manipulate the current date adding one day to it.
```
  2 tests completed.

  moment   x 215,597 ops/sec ±19.52% (69 runs sampled)
  date-fns x 483,114 ops/sec ±4.96% (74 runs sampled)

  Fastest is: date-fns
```

Compare two dates using the operator isAfter.
```
  2 tests completed.

  moment   x   403,090 ops/sec ±1.50% (80 runs sampled)
  date-fns x 1,828,533 ops/sec ±2.19% (79 runs sampled)

  Fastest is: date-fns
```