"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const src_1 = require("../src");
(0, mocha_1.describe)("fuelCalculator", () => {
    it("Should return 2", () => {
        const result = (0, src_1.fuelCalculator)("12");
        chai_1.assert.equal(result, 2);
    });
    it("Should return 2", () => {
        const result = (0, src_1.fuelCalculator)("14");
        chai_1.assert.equal(result, 2);
    });
    it("Should return 654", () => {
        const result = (0, src_1.fuelCalculator)("1969");
        chai_1.assert.equal(result, 654);
    });
    it("Should return 33583", () => {
        const result = (0, src_1.fuelCalculator)("100756");
        chai_1.assert.equal(result, 33583);
    });
    it("Should return 3386686", () => {
        const result = (0, src_1.fuelCalculator)(`127117
121199
80494
83466
125933
80813
137787
122687
123256
128013
90525
116909
95227
86368
96748
131600
101434
98226
88614
76871
65553
141639
55075
133494
149211
51775
139337
94542
76351
100791
107426
91462
78691
70162
95006
101280
59398
77396
66276
100207
67200
58985
64763
125001
149661
129085
114919
77844
108209
121125
54662
103292
112164
121118
71847
130912
81068
137253
56703
107683
108181
142507
112673
97242
50195
123852
130090
144719
133862
73461
81374
56574
147026
140613
148938
123768
64967
106133
123961
87190
71348
148830
87261
58942
132417
101993
94510
138358
72539
80356
74249
103109
135176
128635
116062
82975
135814
62702
80696
95607`);
        chai_1.assert.equal(result, 3386686);
    });
});
