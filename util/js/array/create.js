// array of x elements, all undefined
Array.from({ length: x });
// array of x elements, all value (same reference for objects! diff if created here, like {})
Array.from({ length: x }, () => value);

// array of [0, 1, ..., end - 1]
Array.from({ length: end }, (_, i) => i);
[...Array.from({ length: end }).keys()];
[...new Array(end).keys()];

// array of [start, start + 1, ..., end - 1]
Array.from({ length: end - start}, (_, i) => i + start);