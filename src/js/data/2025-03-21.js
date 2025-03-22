dataSetVersion = "2025-03-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

import { AnonT100 } from "./ranking_data/AnonT100.js";
import { Covers } from "./ranking_data/covers.js";
import { SBR } from "./ranking_data/SBR.js";
import { Sp2024OPS } from "./ranking_data/Sp2024OPS.js";
import { Sp2024EDS } from "./ranking_data/Sp2024EDS.js";
import { SeismicNonAni3 } from "./ranking_data/SeismicNonAni3.js";
import { Su2024OPS } from "./ranking_data/Su2024OPS.js";
import { Su2024EDS } from "./ranking_data/Su2024EDS.js";
import { LoveLive } from "./ranking_data/LoveLive.js";

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Ranking",
    key: "ranking",
    tooltip: "Check this to restrict to certain series.",
    checked: true,
    sub: [
      { name: "Covers", key: "Covers", checked: false},
      { name: "Show By Rock!!", key: "SBR!!", checked: false},
      { name: "Spring 2024 Openings", key: "Sp2024OPS", checked: false},
      { name: "Spring 2024 Endings", key: "Sp2024EDS", checked: false},
      { name: "Seismic Non-Ani 3", key: "SeismicNonAni3", checked: false},
      { name: "Summer 2024 Openings", key: "Su2024OPS", checked: false},
      { name: "Summer 2024 Endings", key: "Su2024EDS", checked: false},
      { name: "Anon Top 100", key: "AnonT100", checked: false},
      { name: "Love Live", key: "LoveLive", checked: false}
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  ...Covers,
  ...SBR,
  ...Sp2024OPS,
  ...Sp2024EDS,
  ...SeismicNonAni3,
  ...Su2024OPS,
  ...Su2024EDS,
  ...AnonT100,
  ...LoveLive
];