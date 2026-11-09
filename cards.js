/* Accutemp Field Reference card data. See CONTRIBUTING.md for how to add a card. */
window.ACCUTEMP_DATA = {
 "version": 1,
 "chips": [
  {
   "tag": "txv",
   "label": "TXV"
  },
  {
   "tag": "reversing-valve",
   "label": "Reversing Valve / 21S4"
  },
  {
   "tag": "clo",
   "label": "CLO Board"
  },
  {
   "tag": "combustion",
   "label": "Combustion"
  },
  {
   "tag": "vfd",
   "label": "VFD / Drive"
  },
  {
   "tag": "nema",
   "label": "NEMA / Motor Frame"
  },
  {
   "tag": "drier",
   "label": "Filter Drier"
  },
  {
   "tag": "economizer",
   "label": "Economizer"
  },
  {
   "tag": "defrost",
   "label": "Defrost"
  },
  {
   "tag": "compressor",
   "label": "Compressor"
  },
  {
   "tag": "chiller",
   "label": "Chiller"
  },
  {
   "tag": "boiler-safety",
   "label": "Boiler Safety"
  },
  {
   "tag": "gas-valve",
   "label": "Gas Valve"
  },
  {
   "tag": "expansion-tank",
   "label": "Expansion Tank"
  },
  {
   "tag": "hydronic",
   "label": "Hydronic / Piping"
  },
  {
   "tag": "pump",
   "label": "Pump"
  },
  {
   "tag": "cooling-tower",
   "label": "Cooling Tower"
  },
  {
   "tag": "vav-bas",
   "label": "VAV / BAS"
  },
  {
   "tag": "bearing-belt",
   "label": "Bearing / Belt"
  },
  {
   "tag": "wiring",
   "label": "Wiring / Schematics"
  },
  {
   "tag": "sh-sc",
   "label": "SH / SC Targets"
  },
  {
   "tag": "brazing",
   "label": "Brazing"
  },
  {
   "tag": "vendor",
   "label": "Vendor / Parts"
  },
  {
   "tag": "vrf",
   "label": "VRF / Mitsubishi"
  },
  {
   "tag": "fault-matrix",
   "label": "Field Signs / Fault Matrix"
  },
  {
   "tag": "low-voltage",
   "label": "Low Voltage / Relays"
  },
  {
   "tag": "pm-checklist",
   "label": "PM Checklist / Kit P/N"
  },
  {
   "tag": "airflow",
   "label": "Airflow / Static"
  },
  {
   "tag": "walk-in",
   "label": "Walk-In Cooler / Freezer"
  }
 ],
 "tabs": [
  {
   "key": "diagnostics",
   "label": "Diagnostics",
   "icon": "&#128295;",
   "content": [
    {
     "html": "<div class=\"disclaimer\"><b>Note:</b> Specific target values, sensor readings, combination ratios, and model cross-references are taken from manufacturer service literature for the indicated platforms. Always verify against the current service manual and exact unit model/serial before using for diagnosis or adjustment.</div>"
    },
    {
     "id": "eq-43",
     "title": "VRF Systems",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "vrf-1",
       "title": "Combination ratio check",
       "level": "sub",
       "tags": [
        "vrf"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">The referenced Mitsubishi SM-series documentation lists a 50% minimum combination ratio (sum of connected indoor unit capacity vs outdoor unit rated capacity) for that platform. Falling below the documented minimum for a given outdoor unit causes compressor modulation failures that look like a charge problem but aren't.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Formula</div><div class=\"fval\">Combination ratio = total connected IDU capacity &divide; ODU rated capacity &times; 100</div></div><div class=\"frow\"><div class=\"flabel\">Minimum ratio (per referenced SM-series documentation)</div><div class=\"fval\">50% &mdash; confirm this figure against the current spec sheet for the exact outdoor unit before relying on it</div></div><div class=\"frow\"><div class=\"flabel\">Symptom if violated</div><div class=\"fval\">Compressor won't modulate down properly, short cycling, capacity control faults</div></div></div><div class=\"tip\"><b>Field tip:</b> Don't chase charge or SH/SC on an undersized combination ratio system &mdash; fix the ratio (add IDUs or downsize the ODU) first, then re-evaluate.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "vrf-2",
       "title": "Refrigerant charge verification",
       "level": "sub",
       "tags": [
        "vrf"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Use manufacturer charging chart for the specific model &mdash; VRF systems don't use a universal SH/SC target the way single-circuit systems do, since branch circuit controllers add their own SC/SH stages.</p><div class=\"tip\"><b>Field tip:</b> Always confirm combination ratio and indoor unit count match the design before adjusting charge.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "vrf-3",
       "title": "Indoor unit types & troubleshooting",
       "level": "sub",
       "tags": [
        "vrf"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Indoor unit symptoms are diagnosed as part of the whole VRF circuit, not in isolation &mdash; check the branch circuit controller and outdoor unit before condemning an indoor unit.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">4-way cassette</div><div class=\"fval\">Most common commercial IDU. Check drain pump operation on low-static units.</div></div><div class=\"frow\"><div class=\"flabel\">Slim duct / mid-static duct</div><div class=\"fval\">Verify external static matches unit rating; airflow issues mimic charge issues.</div></div><div class=\"frow\"><div class=\"flabel\">High wall</div><div class=\"fval\">Simplest IDU, fewest failure points. Check EEV coil resistance if not modulating.</div></div><div class=\"frow\"><div class=\"flabel\">Convertible AHU (V-AHU)</div><div class=\"fval\">Requires EEV kit sized to tonnage &mdash; confirm correct EEV kit before troubleshooting undercharge symptoms.</div></div></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "vrf-4",
       "title": "Mitsubishi City Multi target values (R2 vs Y-Series)",
       "level": "sub",
       "tags": [
        "vrf"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">R2-Series (heat recovery, branch circuit controller) and Y-Series (heat pump only) have different target values and terminology.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">R2 Cooling &mdash; ODU</div><div class=\"fval\">Te = 32&deg;F, TC = >100&deg;F, TH4 = 160&ndash;200&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">R2 Heating &mdash; ODU</div><div class=\"fval\">Te = < Ambient, TC = 120&deg;F, TH4 = 160&ndash;200&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">R2 Cooling &mdash; BC controller</div><div class=\"fval\">DPHM = 0&ndash;10 psi, SC1 = 9&ndash;27&deg;F, SC6 = 18&ndash;54&deg;F, SH = 4&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">R2 Heating &mdash; BC controller</div><div class=\"fval\">DPHM = 44&ndash;73 psi, L1 = 110 pulses, L2 = 60 pulses, L3 = modulating</div></div><div class=\"frow\"><div class=\"flabel\">R2 Cooling &mdash; IDU</div><div class=\"fval\">SH = 0&ndash;15&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">R2 Heating &mdash; IDU</div><div class=\"fval\">SC = 9&ndash;27&deg;F, TH3 = 130&ndash;155&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Y-Series Cooling</div><div class=\"fval\">SCo = 12&ndash;18&deg;F, SCc = 36&ndash;52&deg;F, SHb = 5&ndash;15&deg;F, IDU SH = 0&ndash;15&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Sensor key</div><div class=\"fval\">TH1 = return air, TH2 = liquid pipe after LEV, TH3 = gas pipe, TC = condensing temp, TE = evaporating temp</div></div></div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div>"
        }
       ],
       "updated": "2026-10-29"
      },
      {
       "id": "vrf-5",
       "title": "Trane to Samsung model cross-reference",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Trane VRF outdoor and indoor units are built by Samsung. Use this when pulling parts or cross-referencing specs under the Samsung name.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">4TVH0072C300NA (6T VRF HP, 208-230V/3ph)</div><div class=\"fval\">AM072FXVAFH2AA</div></div><div class=\"frow\"><div class=\"flabel\">4TVH0120C300NA (10T VRF HP, 208-230V/3ph)</div><div class=\"fval\">AM120FXVAFH2AA</div></div><div class=\"frow\"><div class=\"flabel\">4TVR0096C300NA (8T VRF HR/Recovery)</div><div class=\"fval\">AM096FXVAFR2AA</div></div><div class=\"frow\"><div class=\"flabel\">4TVC0024B100ND (24 MBh 4-way cassette IDU)</div><div class=\"fval\">AM024FN4DCH/AA</div></div><div class=\"frow\"><div class=\"flabel\">4TVW0018D100NA (18 MBh high wall IDU)</div><div class=\"fval\">AM018MNVDCH/AA</div></div><div class=\"frow\"><div class=\"flabel\">4TVM0018C100NB (18 MBh convertible AHU)</div><div class=\"fval\">AM018JNZDCH/AA</div></div></div><div class=\"tip\"><b>Field tip:</b> Sample only &mdash; pull current full cross-reference from Trane/Samsung documentation.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "vrf-6",
       "title": "Reversing valve diagnosis (21S4)",
       "level": "sub",
       "tags": [
        "reversing-valve",
        "vrf"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Confirm the working position of a 21S4-series reversing valve using a strong magnet and a ruler rather than guessing from line temps alone &mdash; the metal plates holding the internal seals will attract a magnet, letting you find the actual slide position.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Valve size (K-gen 21S4)</div><div class=\"fval\">Approx 8&frac34;\" across</div></div><div class=\"frow\"><div class=\"flabel\">Cooling position &mdash; plate measurements</div><div class=\"fval\">8&#8531;\" / 5&#8260;8\" / 2\" from reference points (see source photos)</div></div><div class=\"frow\"><div class=\"flabel\">Heating position &mdash; plate measurements</div><div class=\"fval\">6&frac34;\" / 5&#8260;8\" / 2\" from reference points (shifted from cooling)</div></div><div class=\"frow\"><div class=\"flabel\">Orientation convention</div><div class=\"fval\">Unless noted, photos are oriented with compressor discharge on top and pilot assembly on the back side</div></div></div><div class=\"tip\"><b>Field tip:</b> A unit stuck in cooling with the valve physically stuck in heat position is a classic mechanical failure that reads confusingly on gauges &mdash; the magnet-and-ruler check confirms actual slide position independent of pressures.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div><div class=\"reflink\">Full reference (photos, plate measurements, cutaway diagrams): <a href=\"refs/21s4-reversing-valve-diagnosis.pdf\" target=\"_blank\">21S4 reversing valve diagnosis PDF</a></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "vrf-65",
       "title": "City Multi compressor replacement procedure",
       "level": "sub",
       "tags": [
        "compressor",
        "vrf"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Mitsubishi factory procedure for outdoor unit compressor/accumulator replacement. Licensed HVAC professionals only &mdash; refer to full manufacturer instructions before attempting.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">1. Recover charge</div><div class=\"fval\">Both high and low side service ports. Current models may lack L-shaped adapters &mdash; use valve fittings instead. Heat may be needed at accumulator/compressor to fully recover charge; never use open flame.</div></div><div class=\"frow\"><div class=\"flabel\">2&ndash;5. Access</div><div class=\"fval\">Remove exterior panels, compressor compartment access cover, and top cover (may require removing blanking cover, transformer box, and lowering the electrical panel depending on model)</div></div><div class=\"frow\"><div class=\"flabel\">6&ndash;7. De-braze & unmount</div><div class=\"fval\">De-braze suction and discharge line joints closest to the compressor (or accumulator joints if replacing that). Remove compressor mounting bolt nuts and anti-vibration bracket &mdash; one nut is normally missing by design. Remove crankcase heater/thermistor if equipped.</div></div><div class=\"frow\"><div class=\"flabel\">8&ndash;10. Oil check</div><div class=\"fval\">Pour oil from suction pipe into a graduated container. Less than 1 liter (32 oz) or any foreign matter &rarr; consult Mitsubishi rep. Acid-test the oil to determine correct filter core if installing a PAC-SPRFCS filter kit.</div></div><div class=\"frow\"><div class=\"flabel\">11&ndash;14. Install & braze</div><div class=\"fval\">Install new compressor/accumulator, filter kit if used, braze all joints while purging with nitrogen at 0.5&ndash;2 PSI, reinstall mounting hardware and crankcase heater</div></div><div class=\"frow\"><div class=\"flabel\">15&ndash;20. Pressure test & evacuate</div><div class=\"fval\">Pressurize to 600 PSI with nitrogen and leak check. Evacuate to 4000 microns, break with nitrogen, re-evacuate to 1500 then 500 microns. Hold 500 microns for 30 min pump time, then 1 hour standing.</div></div><div class=\"frow\"><div class=\"flabel\">21. Recharge</div><div class=\"fval\">Weigh in charge as liquid to the high side only, never the low side. New accumulator requires oil added to the suction line before the accumulator via a two-port oil charge tank.</div></div><div class=\"frow\"><div class=\"flabel\">22&ndash;23. Reset compressor hours</div><div class=\"fval\">Read/reset via dip switches on the control board &mdash; switch sequence differs between J-generation and K/L-generation units. Confirm hours read back to zero after reset.</div></div></div><div class=\"tip\"><b>Field tip:</b> Note the missing mounting nut on step 7 is normal, not a prior tech's mistake &mdash; don't waste time hunting for a 4th nut that was never there.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div><div class=\"reflink\">Full reference (all 18 figures/photos, dip switch tables): <a href=\"refs/city-multi-compressor-replacement.pdf\" target=\"_blank\">City Multi compressor replacement PDF</a></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "vrf-118",
       "title": "Electronic expansion valve (EEV) troubleshooting",
       "level": "sub",
       "tags": [
        "txv"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">EEVs show up in heat pumps, VRF, inverter mini-splits, and chillers &mdash; also called LEV (Mitsubishi), EXV (Carel), or EOSM (Sporlan) depending on manufacturer. Covers the common 480-pulse style valve found in most North American equipment.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">How it's controlled</div><div class=\"fval\">Temperature and pressure sensors let the controller calculate superheat and modulate the valve to hold target SH. Certain modes override normal control &mdash; Oil Return and Freeze Protection are common examples</div></div><div class=\"frow\"><div class=\"flabel\">Basic parts</div><div class=\"fval\">Power head (electromagnetic coil + permanent magnet), threaded shaft, needle. The power head has 4 coil windings that sequentially magnetize to rotate the permanent magnet, driving the needle through 48&ndash;60 discrete \"steps.\" Typically clockwise = closed, counterclockwise = open, but confirm against the service manual before manually operating a valve</div></div><div class=\"frow\"><div class=\"flabel\">Startup click test</div><div class=\"fval\">On startup, an audible click is normal as the valve fully cycles closed and open to re-find its position. A valve that doesn't complete this cycle may have a failed coil or stuck pin &mdash; but diagnosing purely by sound is subjective, so confirm with electrical/mechanical testing</div></div><div class=\"frow\"><div class=\"flabel\">If a coil fails</div><div class=\"fval\">The permanent magnet stops rotating entirely &mdash; like pulling a domino out of a line, it stops the whole valve's movement. There's no way to know how open or closed the valve was left once a coil fails</div></div><div class=\"frow\"><div class=\"flabel\">Power head continuity test</div><div class=\"fval\">Power off, unplug the power head from the controller, identify the common wire, then check resistance from each remaining wire to common. Rule of thumb ~40&ndash;50&Omega; &plusmn;10% per winding, though the real range can run 26&ndash;750&Omega; depending on the exact EEV &mdash; always confirm the manufacturer's spec. Reading low or OL (open) on any winding means replace the EEV</div></div><div class=\"frow\"><div class=\"flabel\">Mechanical (valve body) test</div><div class=\"fval\">Use a manual (magnet-driven) or powered EEV tool to drive the needle fully open and closed and confirm free range of motion. Position the tool between the middle and top of the valve body so it aligns with the internal magnet &mdash; placing it at the bottom misses the magnet entirely. Confirm full travel via temperature drop across the valve, since temp correlates to pressure/position</div></div><div class=\"frow\"><div class=\"flabel\">Powered tool caution</div><div class=\"fval\">Avoid unplugging or inserting an EEV connector into a control board while it's still powered &mdash; risk of board damage</div></div></div><div class=\"tip\"><b>Field tip:</b> Don't try to diagnose an EEV by clicking sound alone &mdash; a coil continuity test plus a mechanical range-of-motion test gives a real answer instead of a guess.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/electronic-expansion-valve-troubleshooting/\" target=\"_blank\">Electronic Expansion Valve Troubleshooting &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "vrf-139",
       "title": "Troubleshooting inverter boards",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">An inverter board does two jobs: converts incoming AC to DC, then simulates AC again at a variable frequency to control 3-phase motor speed. Understanding the 4 main components tells you where to test. Always confirm exact readings against the specific equipment's service manual &mdash; the numbers here are examples, not universal specs.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">1. Diode bridge rectifier</div><div class=\"fval\">A series of diodes (electrical check valves) arranged to turn incoming AC into DC regardless of the incoming current's direction. Testing confirms none of the diodes are stuck conducting the wrong way</div></div><div class=\"frow\"><div class=\"flabel\">2. DC smoothing reactor (choke)</div><div class=\"fval\">The large, heavy, transformer-like component that smooths ripple out of the DC and protects the rectifier from surge current. Test with power off: remove the leads and ohm it out (auto-range ohms, not continuity) &mdash; expect roughly 0.6&Omega; between input and output. A failing reactor climbs toward 500&Omega;&ndash;1k&Omega; and should be replaced in that range</div></div><div class=\"frow\"><div class=\"flabel\">3. Capacitors</div><div class=\"fval\">Store the DC leaving the reactor to keep a steady supply available. With the unit powered and an active demand, check DC voltage between C+ and C&minus; (auto-range DC) &mdash; expect anywhere from 220&ndash;680VDC depending on manufacturer, so check the service manual for the exact target. Under/over voltage here points back to incoming power quality: verify for under/over voltage and phase imbalance (most manufacturers want &plusmn;10% voltage differential and 2% phase imbalance max between phases while running)</div></div><div class=\"frow\"><div class=\"flabel\">4. IGBTs (insulated-gate bipolar transistors)</div><div class=\"fval\">A set of 6 fast-switching relay-like transistors that create the simulated AC output; motor frequency is set by how fast they switch. Stuck IGBTs cause a distorted output waveform, high amperage, and irregular operation</div></div><div class=\"frow\"><div class=\"flabel\">Testing IGBTs &mdash; diode check method</div><div class=\"fval\">Power off, remove the compressor terminals from the board. Using a multimeter's diode check function and the manufacturer's terminal diagram, check forward and reverse bias at each terminal combination against the expected OL / 0.4&ndash;0.5 pattern (typically a 12-step check) to confirm none are stuck in the wrong orientation</div></div><div class=\"frow\"><div class=\"flabel\">Testing IGBTs &mdash; manufacturer transistor check mode</div><div class=\"fval\">Some manufacturers (e.g. Daikin) offer a \"transistor check mode\" that drives the motor at minimum simulated voltage. Power down and remove compressor leads first, and confirm capacitors have discharged below 34VDC (they're fully charged at power-off) before touching anything &mdash; then re-power, enter check mode, and confirm balanced output voltage across all three compressor wires</div></div><div class=\"frow\"><div class=\"flabel\">Universal red flag</div><div class=\"fval\">No part of a healthy inverter board circuit should measure to ground on any connecting terminal. Some boards have a dedicated grounding terminal specifically for checking internal components against ground to find earth leakage</div></div></div><div class=\"tip\"><b>Field tip:</b> An L1 (overcurrent) code can still show up with a balanced IGBT output &mdash; a poor connection or a failing IGBT can cause overcurrent through the relay even when the output looks balanced, since IGBTs are just high-amp switching relays and aren't impervious to failure.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/troubleshooting-inverter-boards/\" target=\"_blank\">Troubleshooting Inverter Boards &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-44",
     "title": "RTU / Package Units &mdash; Diagnostics & Fault Matrices",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "rtu-7",
       "title": "Field signs (before you hook up manifolds)",
       "level": "sub",
       "tags": [
        "fault-matrix"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Confirm airflow and voltage independently before any of this points at charge.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Amps at/above RLA</div><div class=\"fval\">Hot discharge + liquid line at cond outlet &rarr; high head. Check condenser fan amps/airflow before blaming charge.</div></div><div class=\"frow\"><div class=\"flabel\">Amps below RLA</div><div class=\"fval\">Warm-to-cool suction, reduced discharge temp &rarr; undercharge or worn valves. Sharp cold spot on liquid line = restriction instead.</div></div><div class=\"frow\"><div class=\"flabel\">Low &Delta;T (below ~18&deg;F)</div><div class=\"fval\">Confirm blower amps vs rated tap first. Excess airflow (wrong tap) is an air problem &mdash; fix airflow before touching charge.</div></div><div class=\"frow\"><div class=\"flabel\">High &Delta;T (above ~24&deg;F)</div><div class=\"fval\">Check blower amps vs tap &mdash; low airflow (dirty filter/coil, closed damper) starves evap and mimics undercharge.</div></div><div class=\"frow\"><div class=\"flabel\">Frost migrating past coil onto suction line</div><div class=\"fval\">Overfeeding &mdash; bad TXV, or straight overcharge on a piston system.</div></div></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "rtu-8",
       "title": "TXV metering &mdash; fault matrix",
       "level": "sub",
       "tags": [
        "txv",
        "fault-matrix"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">SH is the controlled variable on a TXV &mdash; it holds unless charge is way off. SC is the primary charge indicator.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Overcharge</div><div class=\"fval\">Amps at/above RLA, liquid line and discharge line hot to the touch, frost pattern normal. Gauges will confirm: head high, SC high, SH normal-to-low.</div></div><div class=\"frow\"><div class=\"flabel\">Undercharge</div><div class=\"fval\">Amps below RLA, suction line warm, liquid line uniformly warm. Gauges will confirm: both pressures low, SH high, SC low.</div></div><div class=\"frow\"><div class=\"flabel\">Liquid line restriction</div><div class=\"fval\">Amps starved, sharp cold spot at the drier or a fitting. Gauges will confirm: sharp pressure/temp drop across the restriction, SH high. See Flash gas under HVAC Fundamentals for why this restriction causes the symptoms it does.</div></div><div class=\"frow\"><div class=\"flabel\">Evap overfeeding / failing TXV</div><div class=\"fval\">Frost migrating onto the suction line, low &Delta;T. Gauges will confirm: SH low/near zero, suction pressure high for the load.</div></div><div class=\"reflink\">Companion visual fault-matrix chart (TXV vs fixed metering, by symptom): <a href=\"https://www.hvacrschool.com/wp-content/uploads/2020/05/Cheat_Sheet_chart.pdf\" target=\"_blank\">HVAC School Diagnostic Quick Sheet</a></div></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "rtu-9",
       "title": "Fixed orifice / piston &mdash; fault matrix",
       "level": "sub",
       "tags": [
        "fault-matrix"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">No modulation here &mdash; SH is the primary charge indicator, SC follows charge directly.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Overcharge</div><div class=\"fval\">Amps at/above RLA, liquid line and discharge line hot to the touch. Gauges will confirm: head high, SH low, SC high.</div></div><div class=\"frow\"><div class=\"flabel\">Undercharge</div><div class=\"fval\">Amps below RLA, liquid line warm, no cold spot anywhere. Gauges will confirm: both pressures low, SH high, SC low.</div></div><div class=\"frow\"><div class=\"flabel\">Restriction</div><div class=\"fval\">Amps below RLA, localized frost at the drier, sight glass flashing. Gauges will confirm: SH high, SC low, sharp temp drop across the restriction.</div></div><div class=\"reflink\">Companion visual fault-matrix chart (TXV vs fixed metering, by symptom): <a href=\"https://www.hvacrschool.com/wp-content/uploads/2020/05/Cheat_Sheet_chart.pdf\" target=\"_blank\">HVAC School Diagnostic Quick Sheet</a></div></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "rtu-11",
       "title": "Compound faults &mdash; when numbers don't fit",
       "level": "sub",
       "tags": [
        "fault-matrix"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Don't chase a component until the SH/SC pattern matches one bucket cleanly. If it doesn't fit any bucket, suspect a compound fault &mdash; undercharge stacked with a restriction, or non-condensables masking an actual overcharge.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Protocol</div><div class=\"fval\">Resolve the most obvious candidate first, document readings, then re-check the remaining axis. Don't correct two variables at once.</div></div><div class=\"frow\"><div class=\"flabel\">Document</div><div class=\"fval\">Get customer acknowledgment on any deferred safety item before leaving site if full remediation isn't happening same visit.</div></div><div class=\"frow\"><div class=\"flabel\">Target numbers (ballpark only)</div><div class=\"fval\">Evap &Delta;T 18&ndash;22&deg;F &middot; TXV superheat (evaporator, coil outlet) 8&ndash;12&deg;F &middot; Air-cooled SC 10&ndash;15&deg;F &middot; Compressor amps &plusmn;10% RLA</div></div></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "rtu-13",
       "title": "Economizer operation & troubleshooting",
       "level": "sub",
       "tags": [
        "economizer"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Purpose</div><div class=\"fval\">Brings in cool outdoor air to reduce/eliminate compressor run time (free cooling), most active 45&ndash;65&deg;F outdoor</div></div><div class=\"frow\"><div class=\"flabel\">Control types</div><div class=\"fval\">Dry-bulb (compares OA temp to setpoint) or enthalpy (compares total heat &mdash; more accurate, prevents humid OA use)</div></div><div class=\"frow\"><div class=\"flabel\">Mixed air target</div><div class=\"fval\">Typically 55&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Actuator signal</div><div class=\"fval\">2&ndash;10VDC or 4&ndash;20mA modulating</div></div><div class=\"frow\"><div class=\"flabel\">Common failures</div><div class=\"fval\">Stuck/seized dampers, broken actuator linkage, failed OA or mixed-air sensor, miswired control board</div></div></div><div class=\"tip\"><b>Field tip:</b> If the economizer doesn't open in cool weather, check actuator voltage and sensor resistance first &mdash; 90% of failures are sensor or linkage-related, not the board.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "rtu-121",
       "title": "Economizer sensors, enthalpy control & minimum position",
       "level": "sub",
       "tags": [
        "economizer"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Companion to the general economizer troubleshooting card above &mdash; this one goes deeper on the sensors and math behind commissioning one properly. ASHRAE 62.1 governs the fresh-air requirement itself; a common rule-of-thumb design assumption is roughly one person per 200 sq ft.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Why economizers matter beyond \"free cooling\"</div><div class=\"fval\">They provide two layers of filtration (the outdoor air filter plus the RTU's own filter) and help meet ventilation requirements, not just save energy &mdash; \"free cooling\" is a bit of a misnomer since fan motors and controls still draw power</div></div><div class=\"frow\"><div class=\"flabel\">Temperature vs enthalpy sensors</div><div class=\"fval\">Temperature (dry-bulb) sensors only account for sensible heat. Enthalpy (wet-bulb) sensors account for total heat, sensible plus latent. An enthalpy sensor may run the economizer even when dry-bulb temp alone looks unfavorable, if humidity conditions are favorable enough</div></div><div class=\"frow\"><div class=\"flabel\">Sensor availability</div><div class=\"fval\">Many economizers ship with temperature sensors only; enthalpy sensors are sometimes a field-installed upgrade. Some controls (e.g. Honeywell Jade) read both temperature and enthalpy simultaneously</div></div><div class=\"frow\"><div class=\"flabel\">Full sensor set feeding the controller</div><div class=\"fval\">Outdoor air enthalpy, return air enthalpy, discharge temp, and mixed air temp</div></div><div class=\"frow\"><div class=\"flabel\">Honeywell A/B/C/D settings</div><div class=\"fval\">Plot on a psychrometric chart &mdash; conditions to the left of the selected curve let the economizer handle cooling, conditions to the right hand cooling to the mechanical system. Hot, dry climates commonly use A or B; humid climates commonly use D (when they use economizers at all)</div></div><div class=\"frow\"><div class=\"flabel\">Damper minimum position &mdash; purpose</div><div class=\"fval\">Keeps a constant minimum amount of fresh air flowing without fully closing the damper, even outside of free-cooling mode</div></div><div class=\"frow\"><div class=\"flabel\">Damper minimum position &mdash; formula</div><div class=\"fval\">% outdoor air = (Return air temp &minus; Mixed air temp) &divide; (Return air temp &minus; Outdoor air temp) &times; 100</div></div><div class=\"frow\"><div class=\"flabel\">Worked example</div><div class=\"fval\">Outdoor air 40&deg;F, return air 74&deg;F, mixed air 70&deg;F &rarr; (74&minus;70) &divide; (74&minus;40) = 4/34 &asymp; 12% outdoor air &mdash; set the damper minimum position to roughly 12%</div></div><div class=\"frow\"><div class=\"flabel\">Setting it &mdash; analog controls</div><div class=\"fval\">A labeled \"Min Pos\" potentiometer, adjusted with a screwdriver. Test at fully open (100%) and fully closed (0%) to confirm the damper mechanics work independently of the setpoint itself</div></div><div class=\"frow\"><div class=\"flabel\">Setting it &mdash; electronic controls</div><div class=\"fval\">Set the percentage digitally (e.g. Honeywell Jade), often with a built-in \"Damper Open\"/\"Damper Closed\" checkout test in the controller menu. Carrier SystemVu can set minimum position per fan speed</div></div></div><div class=\"tip\"><b>Field tip:</b> Proper commissioning of an economizer is a sensor-and-math exercise as much as a mechanical one &mdash; confirm the minimum position calculation against actual sensor readings rather than trusting a factory default.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/fresh-air-in-commercial-buildings-economizer-sensors-and-settings/\" target=\"_blank\">Fresh Air in Commercial Buildings: Economizer Sensors and Settings &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "rtu-14",
       "title": "Low-voltage short diagnostic flowchart",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Systematic fuse-isolation method for a resettable low-voltage fuse that keeps tripping.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">1. Verify power source</div><div class=\"fval\">Check transformer secondary (24&ndash;28 VAC). No 24V &rarr; check primary, repair/replace transformer.</div></div><div class=\"frow\"><div class=\"flabel\">2. Remove all thermostat wires</div><div class=\"fval\">Reset fuse, power up. Trips &rarr; short is inside the unit (go to step 3). Holds &rarr; short is in the stat/cable, reconnect one wire at a time.</div></div><div class=\"frow\"><div class=\"flabel\">3. Isolate components one at a time</div><div class=\"fval\">Disconnect (in order): gas valve, high-limit/aux safeties, economizer/OA damper harness, blower relay coil, condenser contactor coil. Reset fuse before each test. Fuse holds after disconnecting X &rarr; X is shorting.</div></div><div class=\"frow\"><div class=\"flabel\">4. Still trips with everything disconnected</div><div class=\"fval\">Inspect harness for rubbed wires on blower deck, pinched wires near gas valve bracket, wires touching heat exchanger, or burned transformer secondary touching chassis.</div></div><div class=\"frow\"><div class=\"flabel\">5. Confirm</div><div class=\"fval\">Reconnect components one at a time until fuse trips again &mdash; the last one reconnected is the fault.</div></div></div>"
        }
       ],
       "updated": "2026-08-13",
       "quickCheck": [
        {
         "label": "1. Verify power source",
         "text": "Check transformer secondary (24&ndash;28 VAC). No 24V &rarr; check primary, repair/replace transformer."
        },
        {
         "label": "2. Remove all thermostat wires",
         "text": "Reset fuse, power up. Trips &rarr; short is inside the unit (go to step 3). Holds &rarr; short is in the stat/cable, reconnect one wire at a time."
        }
       ]
      },
      {
       "id": "rtu-99",
       "title": "TXV failure &mdash; full diagnostic sequence",
       "level": "sub",
       "tags": [
        "txv"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">TXVs are misdiagnosed constantly, usually because a tech fixates on suction pressure alone. Low suction plus adding refrigerant that doesn't raise it looks like a failed valve &mdash; but the valve is often just doing exactly what it's designed to do (close further as more liquid becomes available), while the real problem is airflow or load.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Step 1 &mdash; confirm liquid supply</div><div class=\"fval\">Check subcooling first. In theory 1&deg;F is the minimum for a full line of liquid, but in reality confirm the factory-specified subcool, usually around 10&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Step 2 &mdash; confirm pressure differential</div><div class=\"fval\">Want at least 100 PSI minimum difference between liquid line pressure and desired evaporator pressure. Low ambient conditions dropping head pressure too far can starve the valve of the differential it needs to function</div></div><div class=\"frow\"><div class=\"flabel\">Step 3 &mdash; check evaporator outlet superheat</div><div class=\"fval\">Most A/C systems maintain 6&ndash;14&deg;F superheat at the evap outlet once subcool and pressure differential are confirmed adequate. In range = the valve is doing its job, not bad</div></div><div class=\"frow\"><div class=\"flabel\">Below 6&deg;F superheat</div><div class=\"fval\">Possible overfeeding (failed open) &mdash; double check thermometer/gauge calibration first before condemning the valve</div></div><div class=\"frow\"><div class=\"flabel\">Above 14&deg;F superheat with proper subcool/differential confirmed</div><div class=\"fval\">Failed closed (underfeeding). Check for a blocked inlet screen before assuming the valve itself is bad &mdash; freeze the coil intentionally or use thermal imaging to find the actual point of temperature/pressure drop</div></div><div class=\"frow\"><div class=\"flabel\">Overfeeding first check</div><div class=\"fval\">Bulb insulation, placement, and strapping &mdash; if the bulb isn't properly sensing the suction line, the valve stays too far open regardless of anything else</div></div><div class=\"frow\"><div class=\"flabel\">Most common real causes of failure</div><div class=\"fval\">Contaminants or moisture reaching the valve and sticking/restricting it, bulb tube rub-outs, or an external equalizer without a core depressor installed on a Schrader port</div></div><div class=\"frow\"><div class=\"flabel\">Refrigeration cross-check</div><div class=\"fval\">Same principle as a sight glass check on a split system &mdash; confirm no kinked lines or plugged driers before condemning the valve</div></div></div><div class=\"tip\"><b>Field tip:</b> If you're chasing low suction and adding refrigerant makes the TXV close further without suction climbing, stop &mdash; that's the valve doing its job correctly. Go check airflow and load before touching the valve.</div><div class=\"reflink\">Full reference (Q&A format, related powerhead article): <a href=\"https://www.hvacrschool.com/how-to-diagnose-a-txv-failure/\" target=\"_blank\">How to Diagnose a TXV Failure &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "rtu-149",
       "title": "Rheem Classic (RGECYB) high-static vs standard-static CT blower",
       "level": "sub",
       "tags": [
        "airflow"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">RGECYB Classic 3 to 6 ton units use a direct-drive constant-torque (CT) blower. There is no VFD and no potentiometer: airflow is set only by programmed motor taps. Model digit 12 tells you the drive: <b>T</b> = standard static, <b>U</b> = high static. Rheem rates the high-static drive for nominal airflow up to 1.5\" ESP.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Safety</div><div class=\"fval\">LOTO the unit disconnect and verify zero voltage at the blower harness with a proven meter before moving any tap wire. Follow Accutemp safety rules. Close panels before taking static readings.</div></div><div class=\"frow\"><div class=\"flabel\">1. Read the unit</div><div class=\"fval\">Digit 12 of the model (T or U), blower HP and the \"External Static Pressure Range\" on the nameplate. Use the airflow table that matches the exact model, drive (T or U), voltage and sideflow vs downflow. In the Rheem spec sheet (R11-880 Rev 2) the standard-static tables run 0.1 to 0.8\" ESP and the high-static tables run 0.8 to 1.5\" ESP.</div></div><div class=\"frow\"><div class=\"flabel\">2. Selection</div><div class=\"fval\">High static is for duct systems that actually need it (long runs, high-resistance accessories). On existing duct that an older or standard-static unit ran at low ESP, a high-static drive can push static and noise up, worst on zoned duct. Before install, compare the old nameplate (blower HP, ESP rating) to the new one and flag a mismatch to the office.</div></div><div class=\"frow\"><div class=\"flabel\">3. Separate taps</div><div class=\"fval\">Each call energizes its own programmed torque: Fan Only, Low Heat, High Heat, Rated Cool, Max Speed. Rheem notes Tap 4 = factory cooling tap. Moving the cooling tap does <b>not</b> change fan-only or heat airflow. Confirm tap wire colors and the field change procedure on the unit wiring diagram / I&amp;O before moving anything.</div></div><div class=\"frow\"><div class=\"flabel\">4. CT motor behavior</div><div class=\"fval\">Constant torque holds torque, not CFM. Delivered CFM floats with static: lower static = more air, higher static = less air and more noise. The unit does not hold a duct static setpoint.</div></div><div class=\"frow\"><div class=\"flabel\">5. Motor swap</div><div class=\"fval\">HP alone is <b>not</b> an approved swap. The T and U drives use different programmed torque per tap (the 4 ton spec sheet lists 3/4 HP standard static vs 1.5 HP high static, same frame 48). Matching frame, wheel or RPM does not prove compatibility. Any T to U or U to T conversion only with Rheem/supplier confirmation by full model and serial, using the OEM programmed motor part number. Never install a generic CT/ECM motor by HP.</div></div><div class=\"frow\"><div class=\"flabel\">6. Measure TESP</div><div class=\"fval\">Close economizer / OA damper. Run the blower on the call you are checking (usually cooling). Probe supply after the unit and return before the unit at the I&amp;O test locations. TESP = supply + return magnitude (example: +0.50\" and -0.30\" = 0.80\" WC).</div></div><div class=\"frow\"><div class=\"flabel\">7. Compare to the table</div><div class=\"fval\">Is TESP inside the nameplate ESP range? Read CFM at that ESP for the active tap from the correct table and check it is inside the table's Manufacturer Recommended Airflow Range (min/max). Apply the table notes (Rheem lists approx. wet coil 0.09\" and downflow 0.1\" drops for 3 to 5 ton). TESP above the last column = off chart: you cannot read CFM from the table, fix static first.</div></div><div class=\"frow\"><div class=\"flabel\">8. Zoned duct</div><div class=\"fval\">Every zone damper that closes removes airflow path, so ESP climbs and open registers get loud. Take TESP with <b>all zones calling</b> and with the <b>smallest zone calling alone</b>. If minimum-zone TESP is over the nameplate range: check bypass / relief damper setting and operation, zone damper minimum stops, and zone panel fan/staging setup. Airflow must stay at or above the OEM minimum in the recommended range.</div></div><div class=\"frow\"><div class=\"flabel\">9. When taps run out</div><div class=\"fval\">If cooling is already on the lowest available tap and static is still over range, a tap change is not the fix. Write up both TESP readings and escalate to the office for supplier/Rheem review (approved drive conversion or zoning correction). Verify cooling airflow and heating temperature rise after any change.</div></div></div><div class=\"tip\"><b>Field tip:</b> Real case (Nov 2026): RGECYB048ACU (1.5 HP high static, nameplate 0.8 to 1.5\" ESP) replaced a unit rated 0.5\" max ESP on zoned duct. Static was in range with all zones open, but hit 2.32\" TESP (+1.96\" supply, -0.36\" return) with zones satisfied. Problem showed up only after the swap. Always check min-zone static on zoned replacements.</div><div class=\"reflink\">Manufacturer source: <a href=\"https://files.myrheem.com/webpartners/ProductDocuments/FE04146A-56D9-4F9E-AEE1-41EF8C39FD72.pdf\" target=\"_blank\">Rheem RGEC Classic / Classic Plus spec sheet, Form R11-880 Rev 2 (nomenclature, blower data, airflow tables)</a></div><div class=\"reflink\">Related: <a href=\"https://www.hvacrschool.com/total-external-static-pressure-tesp-a-basic-review/\" target=\"_blank\">Total External Static Pressure (TESP): A Basic Review, HVAC School</a></div>"
        }
       ],
       "updated": "2026-11-09",
       "quickCheck": [
        {
         "label": "1. Read the unit",
         "text": "Digit 12 of the model (T or U), blower HP and the \"External Static Pressure Range\" on the nameplate."
        },
        {
         "label": "6. Measure TESP",
         "text": "Close economizer / OA damper."
        },
        {
         "label": "7. Compare to the table",
         "text": "Is TESP inside the nameplate ESP range?"
        }
       ]
      }
     ]
    },
    {
     "id": "eq-103",
     "title": "RTU / Package Units &mdash; Compressors & Maintenance",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "rtu-10",
       "title": "Compressor mechanical & non-condensables",
       "level": "sub",
       "tags": [
        "compressor"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Compressor valve wear</div><div class=\"fval\">Amps below RLA despite otherwise normal charge signs. Gauges will confirm: suction high for the load, head low for ambient, SH high/SC low despite adequate charge. Low compression ratio is the tell &mdash; see Compression Ratio under the Reference tab.</div></div><div class=\"frow\"><div class=\"flabel\">Non-condensables</div><div class=\"fval\">Amps at/above RLA, all lines proportionally hot to the touch. Gauges will confirm: head high for ambient, and condenser sat temp reads higher than SC/ambient can explain.</div></div><div class=\"frow\"><div class=\"flabel\">Dirty/restricted condenser airflow</div><div class=\"fval\">Fan amps/RPM confirmed correct but the condenser coil is visibly dirty or blocked &rarr; points to coil face restriction, not the fan. Gauges will confirm: head high for ambient.</div></div></div><div class=\"tip\"><b>Field tip:</b> If condenser airflow independently confirms good and the ambient-to-sat-temp delta is still abnormal, suspect non-condensables over a dirty coil.</div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "rtu-12",
       "title": "CLO board (current-sensing lock out)",
       "level": "sub",
       "tags": [
        "clo"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">CLO stands for Current-Sensing Lock Out (also called Compressor Lock Out). It prevents restart of the compressor/unit after a safety trip until power is momentarily interrupted to the CLO. Applies to Carrier 38/48/50 series units.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Normal operating condition</div><div class=\"fval\">18&ndash;30 VAC at Terminals 1 & 2, with 2.5A through the current sensor loop &mdash; relay stays de-energized</div></div><div class=\"frow\"><div class=\"flabel\">Trip condition</div><div class=\"fval\">Current drops to 0.5A &rarr; relay energizes within 1 second, opens N.C. contact between 2 & 3, closes N.C. contact between 2 & X (alarm signal)</div></div><div class=\"frow\"><div class=\"flabel\">What trips it</div><div class=\"fval\">HPS (high pressure switch), LPS (low pressure switch), or FPT (freeze protection thermostat) opening in the C1 compressor contactor circuit</div></div></div><div class=\"tip\"><b>Field tip:</b> A compressor that won't restart after a nuisance trip, with no obvious fault present, is often just waiting on the CLO to be reset by cycling power &mdash; check the CLO before condemning the compressor or contactor.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div><div class=\"reflink\">Full reference (Carrier TIP05-002, wiring diagram): <a href=\"refs/carrier-clo-compressor-lock-out.pdf\" target=\"_blank\">CLO operation procedure PDF</a></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "rtu-64",
       "title": "Compressor unloaders (electric & pressure-operated)",
       "level": "sub",
       "tags": [
        "compressor"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Unloaders reduce compressor capacity by isolating a cylinder bank from the suction manifold, letting the unloaded cylinders spin without pumping refrigerant. Two control types on Carrier reciprocating compressors: electric (remote signal to a solenoid) and pressure-operated (driven by suction/discharge differential).</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Electric &mdash; loaded (de-energized)</div><div class=\"fval\">Valve passageways aligned for loaded conditions. No manual adjustment required.</div></div><div class=\"frow\"><div class=\"flabel\">Electric &mdash; unloaded (energized)</div><div class=\"fval\">Solenoid opens the capacity control valve port, venting discharge gas from behind the unloader piston back to suction &mdash; isolates that cylinder bank, no compression</div></div><div class=\"frow\"><div class=\"flabel\">Pressure-operated &mdash; loaded</div><div class=\"fval\">Suction pressure overcomes control set point spring &rarr; poppet valve closes &rarr; discharge gas builds against unloader piston &rarr; bank runs fully loaded</div></div><div class=\"frow\"><div class=\"flabel\">Pressure-operated &mdash; unloaded</div><div class=\"fval\">Suction pressure drops below set point &rarr; diaphragm snaps, opens poppet &rarr; discharge gas vents to suction side &rarr; cylinder bank isolated</div></div><div class=\"frow\"><div class=\"flabel\">Control set point range</div><div class=\"fval\">0&ndash;86 psig, adjustable. Each full turn CCW on the adjustment nut lowers load-up point ~7.2 psi</div></div><div class=\"frow\"><div class=\"flabel\">Pressure differential range</div><div class=\"fval\">6&ndash;16 psi between load-up and unload points. Each full turn CW on the adjustment screw increases differential ~0.8 psi</div></div><div class=\"frow\"><div class=\"flabel\">Startup behavior</div><div class=\"fval\">On pressure-operated units, controlled cylinders don't load until suction/discharge differential reaches approx 25 psig</div></div><div class=\"frow\"><div class=\"flabel\">Field check</div><div class=\"fval\">Solenoid should give an audible click when actuated (electric type). No click with 24V present &mdash; suspect solenoid coil.</div></div></div><div class=\"tip\"><b>Field tip:</b> Cylinder head assemblies include the capacity control valve &mdash; for electrically actuated heads, the solenoid coil is purchased separately. Confirm valve plate gasket thickness (0.32\" for 06ER/EY refrigeration models, 0.07\" for all others) before reassembly.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div><div class=\"reflink\">Full reference (cutaway diagrams, torque specs, adjustment curves): <a href=\"refs/carrier-unloaders-electric-mechanical.pdf\" target=\"_blank\">Compressor unloaders instruction sheet PDF</a></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "rtu-94",
       "title": "Commercial package unit maintenance essentials",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Residential techs moving to 5-20 ton light commercial rooftops share a lot with residential equipment, but there's more to check on the bigger stuff.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Fresh air filters</div><div class=\"fval\">Often metal mesh &mdash; wash regularly with a hose and degreaser, especially near exhaust hoods</div></div><div class=\"frow\"><div class=\"flabel\">Belt tension</div><div class=\"fval\">Tight enough not to slip or vibrate excessively, no tighter &mdash; over-tight belts cause high blower amps, breakage, stretching, and excessive bearing wear. The 1/2\" deflection rule is a rough guide at best since it ignores belt length and deflection force; a proper tension tool gives a real number</div></div><div class=\"frow\"><div class=\"flabel\">Pulley alignment</div><div class=\"fval\">Align both pulley centers (left-right) and camber (angle). Misalignment usually traces back to a slipped motor base bolt or a recently adjusted/replaced pulley. Causes thrown/damaged belts, damaged bearings, noise. Worn pulleys (lost shape, grooved sides) cause improper airflow and shorter belt life even when alignment is correct</div></div><div class=\"frow\"><div class=\"flabel\">Condenser splitting</div><div class=\"fval\">Multi-row condensers often need to be split apart to clean completely &mdash; frequency depends on location and airborne debris</div></div><div class=\"frow\"><div class=\"flabel\">Phase balance (3-phase)</div><div class=\"fval\">Check voltage leg to leg on all three legs. Imbalance over 2% is detrimental, over 4% is unacceptable &mdash; even small imbalances cause motor heat and failure. Many 3-phase systems already have phase monitoring controls installed to catch this automatically</div></div></div><div class=\"tip\"><b>Field tip:</b> New commercial techs tend to over-tighten belts out of habit from residential work &mdash; if you're chasing high blower amps or premature bearing wear on a rooftop, check belt tension before anything else.</div><div class=\"reflink\">Full reference (belt tensioner tool guide, condenser splitting video): <a href=\"https://www.hvacrschool.com/5-things-consider-maintaining-commercial-package-unit/\" target=\"_blank\">5 Things to Consider When Maintaining a Commercial Package Unit &mdash; HVAC School</a> &middot; <a href=\"https://hvacrschool.com/wp-content/uploads/2017/09/belttensioning.pdf\" target=\"_blank\">Browning Belt Tensioning Guide PDF</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "rtu-96",
       "title": "Tandem compressors",
       "level": "sub",
       "tags": [
        "compressor"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Two compressors sharing one circuit (three = a trio) &mdash; common in RTUs, chillers, DOAS, and data center cooling to hit minimum modulation requirements without the expense of a single variable-speed compressor.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Why use them</div><div class=\"fval\">Splits load across two compressors so the circuit can turn down further (e.g. to 25% of full capacity) than one single-speed compressor could alone &mdash; helps meet efficiency standards like IEER/IPLV</div></div><div class=\"frow\"><div class=\"flabel\">OEL (oil equalization line)</div><div class=\"fval\">Connects the two compressor sumps below the compressors so oil balances between them. Must be level &mdash; sloped OEL piping starves one compressor of oil and floods the other, causing premature failure. Copeland tandem-ready compressors ship with spacers to keep it level</div></div><div class=\"frow\"><div class=\"flabel\">TPTL (two-phase transfer line)</div><div class=\"fval\">Larger line that equalizes both oil and refrigerant, usually with its own sight glass for checking oil level. Most Copeland trios use this. Combined with the OEL, this is a \"three-pipe\" design</div></div><div class=\"frow\"><div class=\"flabel\">GEL (gas equalization line)</div><div class=\"fval\">Located near the top of the compressor shell, equalizes pressure between compressors. If present, it's a \"four-pipe\" design &mdash; common on the smallest tandem pairings where a sight glass won't fit</div></div><div class=\"frow\"><div class=\"flabel\">Replacing just one failed compressor</div><div class=\"fval\">Compressors under 7\" diameter or under 10 HP generally require full tandem replacement &mdash; most distributors don't stock tandem-ready compressors that small. Look for an oil equalization port and sight glass to confirm a compressor is tandem-ready before ordering a single replacement</div></div><div class=\"frow\"><div class=\"flabel\">When to replace the whole tandem anyway</div><div class=\"fval\">Contamination from a catastrophic failure of one compressor can compromise the other, since they share oil and refrigerant &mdash; even a 9\"+ compressor might warrant full tandem replacement in that case</div></div></div><div class=\"tip\"><b>Field tip:</b> Never replace a tandem-ready compressor with a standard (non-tandem) compressor even if the ports look close &mdash; a non-tandem compressor has no oil equalization port and cannot be piped into an existing OEL/TPTL/GEL setup.</div><div class=\"reflink\">Full reference (OEL/TPTL/GEL diagrams from Copeland): <a href=\"https://www.hvacrschool.com/tandem-compressors-and-their-efficiency-benefits/\" target=\"_blank\">Tandem Compressors and Their Efficiency Benefits &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "rtu-97",
       "title": "Field guide to crankcase heaters",
       "level": "sub",
       "tags": [
        "compressor"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Prevents liquid refrigerant from migrating into the compressor crankcase during the off-cycle and diluting the oil. A missing or failed crankcase heater is a leading cause of premature compressor failure &mdash; and it's not just a cold-climate problem (a hot attic keeping the indoor coil warm while the outdoor unit cools rapidly at sunset causes the same migration in Florida).</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">What happens without one</div><div class=\"fval\">Liquid refrigerant floods the crankcase and dilutes the oil. At next startup, the sudden pressure drop makes it boil violently into foam &mdash; this causes bearing washout (foam forced out, starving bearings of lubrication) and slugging (incompressible liquid drawn into cylinders/scrolls, breaking valves or shattering scroll sets)</div></div><div class=\"frow\"><div class=\"flabel\">Scroll compressors</div><div class=\"fval\">Have compliance mechanisms that let scrolls separate slightly to handle small amounts of liquid, but they're not immune &mdash; a crankcase heater may be skippable only below a specific charge limit per the manufacturer's data. Never add a hard start kit to a scroll that's stalling on liquid migration; the extra torque can force it to start against a slug and break the scroll set</div></div><div class=\"frow\"><div class=\"flabel\">Variable-speed compressors</div><div class=\"fval\">Often don't need an external heater at all &mdash; the VFD sends small DC current through the motor windings, generating up to 50W of heat directly</div></div><div class=\"frow\"><div class=\"flabel\">Wrap-around (belly-band)</div><div class=\"fval\">Most common type, straps around the compressor housing. Easy field install/replacement, even heating, but less efficient than internal heaters</div></div><div class=\"frow\"><div class=\"flabel\">Immersion (well) style</div><div class=\"fval\">Inserts into a dedicated port, heats the oil directly. More efficient and faster, but only works on compressors designed with a well</div></div><div class=\"frow\"><div class=\"flabel\">Installation</div><div class=\"fval\">Install as low on the shell as possible without covering the bottom weld, perfectly horizontal, snug contact along the full length, avoid other weld seams (creates hot spots). Torque the clamp to 20&ndash;25 in-lb. Never power a heater in free air before it's installed &mdash; it will burn out</div></div><div class=\"frow\"><div class=\"flabel\">Pre-startup requirement</div><div class=\"fval\">On a new install or after extended shutdown, energize the heater a minimum of 24 hours before first start &mdash; this drives off migrated liquid from the oil, not just warms it. The first start is the most critical one a compressor gets; don't skip this</div></div><div class=\"frow\"><div class=\"flabel\">Diagnosing a failed heater</div><div class=\"fval\">Visual: cracks, burned spots, frayed leads. Temperature: shell should feel slightly warm when energized, not hot. Resistance: OL means open/failed element (target &Omega; = voltage&sup2; &divide; wattage). Ground: any reading other than OL indicates a short to ground</div></div><div class=\"frow\"><div class=\"flabel\">Wiring method to watch for</div><div class=\"fval\">When replacing a single-pole contactor with a double-pole, the crankcase heater can lose its power source since a double-pole interrupts both legs. Fix: jumper L2 to T2 to mimic the continuous-voltage behavior the heater was relying on</div></div></div><div class=\"tip\"><b>Field tip:</b> A crankcase heater is one of the most legitimate low-cost upsells in the trade &mdash; cheap insurance against a multi-thousand-dollar compressor replacement, and a mark of a thorough tech.</div><div class=\"reflink\">Full reference (control strategy wiring diagrams, resistance reference chart): <a href=\"https://www.hvacrschool.com/field-guide-to-crankcase-heaters/\" target=\"_blank\">Field Guide to Crankcase Heaters &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "rtu-98",
       "title": "Scroll compressors & the A2L refrigerant transition",
       "level": "sub",
       "tags": [
        "compressor",
        "vrf"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">R-410A equipment with a GWP over 700 stopped being manufactured January 1, 2025, and installation of new R-410A split systems becomes illegal January 1, 2026 (chillers and other specialized equipment have later deadlines). Scroll compressor design had to change to handle the new refrigerants.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Common misconception</div><div class=\"fval\">A2Ls do NOT contain R-290 (propane, an A3 refrigerant). R-32 is a pure refrigerant on its own; R-454B is a blend of 68.9% R-32 and 31.1% R-1234yf &mdash; no propane in either</div></div><div class=\"frow\"><div class=\"flabel\">Why compressor design changed</div><div class=\"fval\">R-32 runs higher discharge temperatures than R-410A, requiring a more viscous oil (POE-46 instead of POE-36) to keep from breaking down under the extra heat. R-454B has minor glide (1&ndash;2.5&deg;F) requiring some design accommodation, though nowhere near as much as older R-407C blends (up to 11.5&deg;F)</div></div><div class=\"frow\"><div class=\"flabel\">Copeland model number nomenclature</div><div class=\"fval\">Traditional A1 scroll models start with Z. A2L/flammable-refrigerant models start with Y &mdash; specifically YA for R-454B, YP for R-32</div></div><div class=\"frow\"><div class=\"flabel\">R-410A replacement compressors still available</div><div class=\"fval\">The manufacturing ban applies to complete systems, not individual parts &mdash; Copeland's new LXE line (ZPLXE single-stage, ZPSLXE two-stage) replaces legacy ZP-prefix models for service work, with 80 LXE models covering 277 legacy models</div></div><div class=\"frow\"><div class=\"flabel\">Service practice changes</div><div class=\"fval\">Minimal if you were already doing things right &mdash; nitrogen pressure testing and deep vacuum go from best practice to required, but R-32/R-454B operating pressures are close enough to R-410A that gauge readings and targets don't shift dramatically</div></div></div><div class=\"tip\"><b>Field tip:</b> Don't assume \"A2L\" means propane is involved &mdash; check the actual refrigerant name (R-32, R-454B, etc.) before making assumptions about flammability handling or charge limits.</div><div class=\"reflink\">Full reference (GWP restriction timeline by application, CO2/R-290 compressor detail): <a href=\"https://www.hvacrschool.com/scroll-compressors-in-a-changing-regulatory-landscape/\" target=\"_blank\">Scroll Compressors in a Changing Regulatory Landscape &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "rtu-114",
       "title": "Discharge line temperature & discharge superheat",
       "level": "sub",
       "tags": [
        "compressor"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Discharge line temp is easy to check (no need to break into the sealed system) and gives useful insight into compression ratio and compressor health, especially on heat pumps in winter when suction SH/SC readings are harder to access.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">225&deg;F ceiling</div><div class=\"fval\">If discharge line temp at the compressor exceeds 225&deg;F, that's a problem &mdash; it corresponds to an internal compressor temp over 300&deg;F, where oil starts breaking down (\"225 stay alive\" rule of thumb)</div></div><div class=\"frow\"><div class=\"flabel\">PVE oil note</div><div class=\"fval\">PVE oil, common in VRF/VRV and ductless equipment, starts breaking down at 247&deg;F &mdash; well below the 300&deg;F internal-temp threshold, so VRF/ductless systems have less margin</div></div><div class=\"frow\"><div class=\"flabel\">Typical normal range</div><div class=\"fval\">Roughly 160&ndash;180&deg;F is a commonly seen discharge line temp on properly functioning A/C systems in warm-climate summer conditions &mdash; useful as a rough sanity check, not a hard target</div></div><div class=\"frow\"><div class=\"flabel\">Compression ratio drives discharge temp</div><div class=\"fval\">High head or low suction pressure raises compression ratio, which raises discharge temp. Low suction pressure also means lower-density refrigerant, which cools the compressor less effectively (less mass flow through the crankcase) &mdash; both push discharge temp up</div></div><div class=\"frow\"><div class=\"flabel\">Suction line insulation</div><div class=\"fval\">An uninsulated or poorly insulated suction line raises suction superheat arriving at the compressor, which can also increase discharge line temp independent of charge or metering issues</div></div><div class=\"frow\"><div class=\"flabel\">Discharge superheat</div><div class=\"fval\">Discharge line temp minus discharge saturation temp at that pressure. Runs much higher than suction SH &mdash; a variable-speed VRV compressor may normally range 32&ndash;72&deg;F depending on speed</div></div><div class=\"frow\"><div class=\"flabel\">High discharge superheat (up to 100+&deg;F)</div><div class=\"fval\">Check suction superheat first to confirm adequate vapor supply/charge. If suction SH is fine, the extra heat is coming from friction inside the compressor itself &mdash; often low oil level or mechanical wear, not a charge problem</div></div><div class=\"frow\"><div class=\"flabel\">Low discharge superheat</div><div class=\"fval\">Indicates liquid compression &mdash; liquid or a liquid/vapor mix reaching the compressor washes out oil and can gall scroll surfaces or damage valves. Low suction AND discharge superheat together points to liquid getting back to the compressor</div></div><div class=\"frow\"><div class=\"flabel\">High discharge temp &mdash; common causes</div><div class=\"fval\">Low charge, severe overcharge, low condenser airflow, restricted metering device, or other restrictions (drier, kinked line, clogged screen)</div></div><div class=\"frow\"><div class=\"flabel\">Low discharge temp &mdash; common causes</div><div class=\"fval\">Slight-to-moderate overcharge, low load/airflow, or a compressor not pumping (low compression)</div></div></div><div class=\"tip\"><b>Field tip:</b> High discharge temp with normal suction superheat points at the compressor itself (oil, wear) rather than charge &mdash; don't add refrigerant chasing a discharge temp reading without confirming suction SH first.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/why-discharge-line-temperature-is-a-useful-reading/\" target=\"_blank\">Why Discharge Line Temperature is a Useful Reading &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "rtu-135",
       "title": "Common causes of compressor failure",
       "level": "sub",
       "tags": [
        "compressor"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Same information and procedures apply to compressors using any A2L refrigerant, including HFOs and HFO blends.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Overheating (the #1 cause)</div><div class=\"fval\">Lack of lubrication, high discharge temperatures, and poor maintenance all contribute. The #1 reason for overheating is an improper compression ratio &mdash; the \"225 stay alive\" rule of thumb says never let discharge line temp exceed 225&deg;F measured 6\" out from the compressor</div></div><div class=\"frow\"><div class=\"flabel\">Refrigerant contamination</div><div class=\"fval\">Moisture and other contaminants cause corrosion, internal damage, and reduced efficiency. Always replace the liquid line filter drier when opening a system &mdash; cut it out, never sweat it out. A suction-line drier used for acid cleanup should be removed within 48&ndash;72 hours (it causes a suction pressure drop if left in); confirm cleanup with an acid test. Use the sight glass if present &mdash; a new liquid line drier usually restores it to spec without replacement</div></div><div class=\"frow\"><div class=\"flabel\">Contamination examples</div><div class=\"fval\">Moisture (very acidic, causes copper plating), overheat byproducts, leak dye, excessive flux (acidic &mdash; use sparingly)</div></div><div class=\"frow\"><div class=\"flabel\">Electrical problems</div><div class=\"fval\">Incorrectly sized wire/breaker/contactor (always check RLA), copper flakes from improper deburring contacting windings (spot burns), poor ground, single-wire burns on single-phase (miswiring or a relay hangup), general winding burn (usually contamination)</div></div><div class=\"frow\"><div class=\"flabel\">Scroll compressor ohming caution</div><div class=\"fval\">An internal protector open on high amps or heat will read 0&Omega; common-to-start and common-to-run until it cools &mdash; don't mistake that for a failed compressor. You should still get a reading start-to-run</div></div><div class=\"frow\"><div class=\"flabel\">Liquid flood back</div><div class=\"fval\">Refrigerant not boiling off properly dilutes the oil, causing friction and seized bearings. Most common in low-load conditions. If uncontrollable after trying accumulator/trapping/line sizing fixes, manufacturers often suggest 20&deg;F total superheat entering the compressor under high load &mdash; but that's not universal (an R-22 medium/low-temp application would overheat the compressor at that target). Even 1&ndash;2&deg;F of superheat entering the compressor at any given moment rules out flood back at that instant; sight glass foaming is another clue</div></div><div class=\"frow\"><div class=\"flabel\">Flood back causes</div><div class=\"fval\">Metering device losing control of feed, poor evaporator airflow, lost load/no boil-off, overcharge, refrigerant bypassing control devices</div></div><div class=\"frow\"><div class=\"flabel\">Flooded start</div><div class=\"fval\">Refrigerant migrates to the cooler condenser during the off cycle and condenses into the oil. On restart, that liquid flashes off inside the compressor (\"slugging\"), diluting oil above spec and sometimes breaking parts. TD, off-cycle length, and line set size/length all affect migration speed &mdash; this is why compressor failures cluster on the first warm day after a cold snap. Mitigations: crankcase heater, or a liquid line solenoid with pump-down (minimum ~10 lb differential), while maintaining minimum charge and proper oil level</div></div><div class=\"frow\"><div class=\"flabel\">Oil loss</div><div class=\"fval\">Oil leaving the compressor must equal oil returning. If not, check for leaks, evaporator vs. crankcase location, loss of charge, short cycling, exceeding max piping distances, or improper trapping</div></div><div class=\"frow\"><div class=\"flabel\">Ruling out crankcase blow-by</div><div class=\"fval\">On a refrigerant-cooled semi-hermetic: shut down, gauge the suction service valve and the crankcase side separately, restart and slowly front-seat the suction valve. Both gauges pulling down equally rules out blow-by. Crankcase gauge stalling while suction keeps pulling down proves worn piston/cylinder/rings, which keeps the crankcase's internal check valve closed</div></div></div><div class=\"tip\"><b>Field tip:</b> Before condemning a compressor for a suspected internal short or open winding, verify it's not just a scroll's internal protector open from heat &mdash; let it cool and re-test start-to-run before writing it off.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/common-causes-of-compressor-failure/\" target=\"_blank\">Common Causes of Compressor Failure &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-45",
     "title": "Split Systems & Heat Pumps",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "split-15",
       "title": "Defrost operation & troubleshooting",
       "level": "sub",
       "tags": [
        "defrost"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Purpose</div><div class=\"fval\">Removes ice from outdoor coil during heating mode to maintain airflow/heat transfer</div></div><div class=\"frow\"><div class=\"flabel\">Defrost types</div><div class=\"fval\">Time/temperature (preset intervals) vs demand defrost (coil sensor + ambient delta &mdash; more efficient, common on Rheem/Trane/Carrier)</div></div><div class=\"frow\"><div class=\"flabel\">Defrost initiation</div><div class=\"fval\">Coil sensor ~30&deg;F with outdoor fan running in heating. Compressor keeps running, outdoor fan shuts off, reversing valve shifts to cooling</div></div><div class=\"frow\"><div class=\"flabel\">Defrost termination</div><div class=\"fval\">Coil temp rises to ~55&deg;F or max time (typically 10 min) expires. Board resets to heating, fan restarts, valve returns to heat</div></div><div class=\"frow\"><div class=\"flabel\">Sensor resistance check</div><div class=\"fval\">Typically 10k&ndash;30k&Omega; at 32&deg;F &mdash; replace sensor if out of range</div></div><div class=\"frow\"><div class=\"flabel\">Common issues</div><div class=\"fval\">Sensor out of range/open circuit, failed reversing valve, board not sending defrost command, fan relay stuck on</div></div></div><div class=\"tip\"><b>Field tip:</b> Never defrosts &rarr; check coil sensor and board voltage output. Stays in defrost &rarr; termination sensor or relay stuck.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "split-16",
       "title": "Reversing valve diagnosis (21S4)",
       "level": "sub",
       "tags": [
        "reversing-valve"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Same 21S4 magnet-and-ruler method used on VRF outdoor units applies here &mdash; see the full write-up under VRF Systems > Reversing valve diagnosis.</p><div class=\"tip\"><b>Field tip:</b> A unit that stays in cool while the valve is mechanically stuck in heat position (or vice versa) reads confusingly on gauges alone; confirming physical slide position with a magnet settles it fast.</div><div class=\"reflink\">Full reference (photos, plate measurements, cutaway diagrams): <a href=\"refs/21s4-reversing-valve-diagnosis.pdf\" target=\"_blank\">21S4 reversing valve diagnosis PDF</a></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "split-17",
       "title": "Single-phase compressor winding resistance test",
       "level": "sub",
       "tags": [
        "compressor"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Checks a single-phase compressor motor for winding-to-winding shorts (partially shorted windings) after the motor has already been checked for grounded, open, or shorted windings.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Rule of thumb</div><div class=\"fval\">Resistance of start winding (C to S) should equal 3 to 6 times the resistance of run winding (C to R)</div></div><div class=\"frow\"><div class=\"flabel\">Example &mdash; good compressor</div><div class=\"fval\">Start = 3.0&Omega;, Run = 0.5&Omega; &rarr; 3.0/0.5 = 6 &rarr; good</div></div><div class=\"frow\"><div class=\"flabel\">Example &mdash; partially shorted</div><div class=\"fval\">Start = 1.25&Omega;, Run = 0.5&Omega; &rarr; 1.25/0.5 = 2.5 &rarr; partially shorted (ratio under 3)</div></div><div class=\"frow\"><div class=\"flabel\">Safety</div><div class=\"fval\">Compressor terminals must not be disturbed while system is pressurized. Do not remove/connect wiring at the compressor unless system pressure is reduced to 0 psig.</div></div></div><div class=\"tip\"><b>Field tip:</b> Use the R&times;1 ohm scale and zero the meter first &mdash; these are extremely low resistance values, and a good compressor can get misjudged as bad with an inaccurate meter setup.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "split-113",
       "title": "Understanding heat pump fundamentals",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">A heat pump uses the same compression cycle as straight A/C, just run in reverse via a reversing/four-way valve &mdash; the coil that's normally the evaporator becomes the condenser, and vice versa.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Y terminal</div><div class=\"fval\">On a heat pump, Y isn't a \"cooling\" signal &mdash; it energizes the compressor contactor in both heating and cooling. The mode shift is handled separately by the reversing valve solenoid, most commonly a 24V call on O for cooling (less commonly B for heat)</div></div><div class=\"frow\"><div class=\"flabel\">Reversing valve solenoid</div><div class=\"fval\">A 24V electromagnetic coil on the valve that shifts a small pilot valve, not the main slide directly &mdash; system pressure does the actual shifting. Never energize it unless it's properly mounted on the valve, or it can overheat and fail</div></div><div class=\"frow\"><div class=\"flabel\">Pressure needed to shift</div><div class=\"fval\">Takes roughly 40 PSIG of differential pressure to shift a reversing valve. Below that, it won't shift internally &mdash; a compressor that isn't running or has poor compression can cause a valve misdiagnosis when the valve itself is fine</div></div><div class=\"frow\"><div class=\"flabel\">Two metering devices</div><div class=\"fval\">Most heat pumps have one metering device outdoors (for heat mode) and one indoors (for cool mode), each needing a bypass path (internal or external check valve) for the opposite mode. Some systems pair a TXV indoors with a piston outdoors &mdash; don't assume both are the same type</div></div><div class=\"frow\"><div class=\"flabel\">Bi-flow filter drier</div><div class=\"fval\">Because the liquid line's flow direction reverses between heat and cool mode, a heat pump liquid line needs a bi-flow drier that filters in both directions</div></div><div class=\"frow\"><div class=\"flabel\">High head in heat mode</div><div class=\"fval\">The indoor coil becomes the condenser in heat mode, so low indoor airflow (dirty filter/coil/blower/ducts) is the first thing to check on abnormally high head pressure</div></div><div class=\"frow\"><div class=\"flabel\">Defrost</div><div class=\"fval\">When the outdoor coil ices up, the system briefly switches to cooling mode, shuts off the condenser fan, and runs aux heat (where equipped) until defrost completes. The valve-shift noise and visible steam are normal and can trigger nuisance customer calls</div></div><div class=\"frow\"><div class=\"flabel\">Suction pressure in heat mode</div><div class=\"fval\">Since the evaporator is outside in heat mode, suction pressure/saturation drops as outdoor temp drops &mdash; this raises compression ratio and reduces capacity. Don't overcharge a heat pump on a cold day trying to force suction pressure back up</div></div><div class=\"frow\"><div class=\"flabel\">Reading suction pressure in heat mode</div><div class=\"fval\">Connect the low-side gauge to the dedicated \"common suction\" port between compressor and reversing valve &mdash; the line normally called \"suction\" is a high-pressure vapor line in heat mode</div></div></div><div class=\"tip\"><b>Field tip:</b> High head pressure on a heat pump running in heat mode almost always points to indoor airflow first, since the indoor coil is acting as the condenser &mdash; check filters and blower before touching charge.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/understand-heat-pumps/\" target=\"_blank\">Understand Heat Pumps &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "split-120",
       "title": "Drain trap depth & negative pressure",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">A common nuisance callback: water backing up into the secondary drain pan on straight-cool A/C units and heat pumps, but not on furnaces. The difference comes down to coil/blower arrangement and drain-side pressure.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Why furnaces don't have this problem</div><div class=\"fval\">Coil-over-blower arrangement (typical furnace) puts the drain under positive pressure, which pushes air out of the drain</div></div><div class=\"frow\"><div class=\"flabel\">Why heat pumps/retrofit air handlers do</div><div class=\"fval\">Coil-under-blower arrangement (most heat pumps and many retrofit straight-cool air handlers) puts the drain under negative pressure, which sucks air back into the drain. A trap that's too shallow lets that air back in and the condensate backs up</div></div><div class=\"frow\"><div class=\"flabel\">Trap sizing rule of thumb</div><div class=\"fval\">Trap depth (inches) &asymp; 2 &times; return-side static pressure (inches w.c.). Example: 0.5\" w.c. static &rarr; 1\" deep trap. 0.7\" w.c. static &rarr; 1.4\" deep trap. Always follow the manufacturer's spec over this rule of thumb where one is given</div></div><div class=\"frow\"><div class=\"flabel\">Static pressure isn't fixed</div><div class=\"fval\">Filter restriction (especially on ECM-blower systems) can raise static pressure over time &mdash; don't undersize a trap based on a low return static reading on day one</div></div><div class=\"frow\"><div class=\"flabel\">Bigger is generally fine</div><div class=\"fval\">Main requirement is the trap outlet sitting at least one pipe dimension lower than the inlet. Residential HVAC rarely needs a trap deeper than 2\". If return static ever reaches 1\" w.c., there are bigger problems to address than trap depth</div></div></div><div class=\"tip\"><b>Field tip:</b> This is a negative-pressure problem specifically &mdash; it won't show up on positively pressurized furnace drains. Don't forget to cap the cleanouts once the trap is sized correctly.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/drain-trap-depth-and-negative-pressure/\" target=\"_blank\">Drain Trap Depth and Negative Pressure &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "split-141",
       "title": "What you need to know about microchannel",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Microchannel coils use flat aluminum tubes with wave-shaped fins between them &mdash; identifiable at a glance. Originally developed for automotive radiators/A/C condensers, they're now common on residential and light commercial condensers for their superior heat transfer, lighter weight, and smaller refrigerant charge.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Never pump one down</div><div class=\"fval\">Attempting to pump down a system with a microchannel condenser risks catastrophic coil failure. Always recover the charge for a refrigerant circuit repair, then carefully weigh the correct charge back in afterward per manufacturer spec &mdash; even on a short line set</div></div><div class=\"frow\"><div class=\"flabel\">Contamination risk is higher</div><div class=\"fval\">The \"micro\" channels are genuinely tiny and easily blocked by solid contaminants. Flow nitrogen while brazing, install a new liquid line drier after any refrigerant circuit repair, pull a proper vacuum, and keep shavings out when cutting/reaming. Keep tubing ends and hoses away from dirt &mdash; on a compressor replacement, anything that gets into the pipework hits the condenser coil before it ever reaches the liquid drier</div></div><div class=\"frow\"><div class=\"flabel\">Washing carefully</div><div class=\"fval\">Most manufacturers advise against chemical cleaners on microchannel coils. Use a garden hose or a low-pressure \"fan pattern\" pressure washer under 100 PSI, or a cleaner specifically approved for microchannel. The channels run all the way to the coil's edge and can be damaged by careless impact</div></div><div class=\"frow\"><div class=\"flabel\">Charging is critical</div><div class=\"fval\">Follow manufacturer specs and weigh in charge whenever possible. Don't start adding refrigerant for low suction until charge is confirmed as the cause rather than an airflow issue or restriction &mdash; subcooling tends to read more erratically on microchannel systems due to the condenser's lower internal volume</div></div><div class=\"frow\"><div class=\"flabel\">Installation considerations</div><div class=\"fval\">Keep microchannel coils away from areas where lawn equipment could throw debris into the surface. A leak often shows up as a visible oil stain on the coil face &mdash; these leaks can be quite small given the channel size, so investigate any telltale oil spot</div></div></div><div class=\"tip\"><b>Field tip:</b> A microchannel condenser is not a \"pump it down like normal\" repair &mdash; recover and weigh in the charge every time, no exceptions, even on familiar short line sets.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/need-know-microchannel/\" target=\"_blank\">What You Need to Know About Microchannel &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-46",
     "title": "Chillers",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "chill-18",
       "title": "Chiller operation & diagnostics",
       "level": "sub",
       "tags": [
        "chiller"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Types</div><div class=\"fval\">Air-cooled (condenser fans reject to ambient, easier install/maintain) vs water-cooled (condenser water + tower, more efficient for large systems)</div></div><div class=\"frow\"><div class=\"flabel\">Typical chilled water temps</div><div class=\"fval\">Leaving 42&ndash;45&deg;F, entering 52&ndash;55&deg;F, &Delta;T typically 8&ndash;12&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Condenser water temps (water-cooled)</div><div class=\"fval\">In/out typically 85&deg;F / 95&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">R410A pressures (air-cooled example)</div><div class=\"fval\">Suction 115&ndash;130 psi, discharge 350&ndash;400 psi (varies with ambient)</div></div><div class=\"frow\"><div class=\"flabel\">R134a pressures (water-cooled example)</div><div class=\"fval\">Suction 65&ndash;75 psi, discharge 120&ndash;140 psi typical at 44&deg;F evap / 95&deg;F cond</div></div><div class=\"frow\"><div class=\"flabel\">Water flow requirements</div><div class=\"fval\">Chilled water 2.4 GPM/ton, condenser water 3.0 GPM/ton</div></div><div class=\"frow\"><div class=\"flabel\">Evaporator approach</div><div class=\"fval\">Leaving water temp &minus; evaporating temp, typically 8&ndash;12&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Condenser approach</div><div class=\"fval\">Condensing temp &minus; leaving condenser water temp, typically 10&ndash;15&deg;F. High approach = fouled tubes or low flow</div></div></div><div class=\"tip\"><b>Field tip:</b> If chilled water temps fluctuate or the unit short cycles, check water flow and &Delta;T before adjusting refrigerant charge &mdash; roughly 80% of chiller faults are water-side, not refrigerant-side.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "chill-68",
       "title": "Chiller compressor types",
       "level": "sub",
       "tags": [
        "chiller"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Same basic refrigeration cycle as any DX system &mdash; the difference is the evaporator chills water (or glycol) instead of cooling air directly, and that water is then piped out to air handlers/fan coils elsewhere in the building.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Reciprocating</div><div class=\"fval\">Older/smaller chillers, largely phased out on new equipment but still common in the field. Piston-driven, multiple cylinders, capacity staged by unloading cylinder banks (see Compressor unloaders card under RTU/Package Units)</div></div><div class=\"frow\"><div class=\"flabel\">Scroll</div><div class=\"fval\">Small-to-mid tonnage chillers, often multiple scrolls manifolded together for capacity steps. Quiet, few moving parts, common on air-cooled packaged chillers</div></div><div class=\"frow\"><div class=\"flabel\">Screw</div><div class=\"fval\">Mid-to-large tonnage. Twin rotating screws compress refrigerant continuously &mdash; smooth capacity modulation via a sliding slide valve, no on/off cylinder banks. Oil management is critical (oil separator, oil cooler)</div></div><div class=\"frow\"><div class=\"flabel\">Centrifugal</div><div class=\"fval\">Large tonnage (100+ tons), common in big commercial/campus plants. Impeller-driven, most efficient per ton at full load. Often runs refrigerants below atmospheric pressure at the evaporator (R-123, R-1233zd) &mdash; requires a purge unit to remove air/non-condensables that leak in</div></div><div class=\"frow\"><div class=\"flabel\">Absorption</div><div class=\"fval\">No mechanical compressor at all &mdash; uses heat (steam, hot water, or direct gas fire) plus a lithium bromide/water absorption cycle to move refrigerant. Rare, but shows up where cheap waste heat or steam is available</div></div></div><div class=\"tip\"><b>Field tip:</b> If you can't tell what compressor type you're looking at, check the nameplate first &mdash; screw and centrifugal chillers will call it out directly, and the compressor housing shape is a giveaway (screws are a long cylindrical housing, centrifugals have a distinct volute/impeller housing).</div>"
        }
       ],
       "updated": "2026-08-19"
      },
      {
       "id": "chill-69",
       "title": "Chiller safeties & protection",
       "level": "sub",
       "tags": [
        "chiller"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Chilled water flow switch</div><div class=\"fval\">Prevents the compressor from running with no/low water flow through the evaporator &mdash; a flowing evaporator is what keeps the refrigerant from freezing solid. Nuisance trips are usually a dirty strainer, air in the system, or a failed pump, not the switch itself</div></div><div class=\"frow\"><div class=\"flabel\">Low temp / freeze protection cutout</div><div class=\"fval\">Second layer of protection behind the flow switch &mdash; trips on low leaving water temp or low refrigerant temp/pressure before the evaporator can freeze and split. Never bypass this to keep a unit running</div></div><div class=\"frow\"><div class=\"flabel\">Why evaporators freeze</div><div class=\"fval\">Low water flow, low charge, or a failing TXV/EEV all drop evaporator temp below 32&deg;F at the tube wall &mdash; ice expands and can crack copper tubes, turning a service call into a full evaporator replacement</div></div><div class=\"frow\"><div class=\"flabel\">High/low pressure safeties</div><div class=\"fval\">Same purpose as any DX system &mdash; protect the compressor from operating outside its envelope. On larger machines these are often electronic (transducer + control board) rather than mechanical switches</div></div><div class=\"frow\"><div class=\"flabel\">Purge unit (low-pressure centrifugal only)</div><div class=\"fval\">Since the evaporator runs below atmospheric pressure, air and moisture leak in over time rather than refrigerant leaking out. The purge unit periodically pulls this air off and vents it, keeping non-condensables from building up and killing capacity/efficiency</div></div><div class=\"frow\"><div class=\"flabel\">Staging / lead-lag (multi-chiller plants)</div><div class=\"fval\">Where more than one chiller feeds a common loop, a plant controller stages chillers on/off based on load, and rotates which unit is \"lead\" to even out run hours &mdash; don't assume a chiller that's off is faulty, check the plant controller first</div></div></div><div class=\"tip\"><b>Field tip:</b> A chiller that trips on low temp cutout repeatedly is telling you something upstream is wrong (flow, charge, or metering) &mdash; resetting it without finding the cause just delays a frozen/split evaporator.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div>"
        }
       ],
       "updated": "2026-08-19"
      }
     ]
    },
    {
     "id": "eq-47",
     "title": "Boilers & Hydronic Heating",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "boil-19",
       "title": "Boiler safety devices & functions",
       "level": "sub",
       "tags": [
        "boiler-safety"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Low water cut-off (LWCO)</div><div class=\"fval\">Prevents firing when water level is too low. Test weekly, clean float chamber annually.</div></div><div class=\"frow\"><div class=\"flabel\">Pressure relief valve</div><div class=\"fval\">Releases excess pressure. Test annually by lifting lever, replace every 5 years or if leaking.</div></div><div class=\"frow\"><div class=\"flabel\">High limit / aquastat</div><div class=\"fval\">Shuts off burner if water temp exceeds setpoint (typ. 200&ndash;210&deg;F). Ensure manual reset works.</div></div><div class=\"frow\"><div class=\"flabel\">Flame safeguard</div><div class=\"fval\">Monitors pilot/main flame, locks out on flame failure. Check signal, typically >2&micro;A or >2V DC.</div></div><div class=\"frow\"><div class=\"flabel\">Rollout switch</div><div class=\"fval\">Detects flame/heat escaping combustion chamber. Manually resettable, test for continuity.</div></div><div class=\"frow\"><div class=\"flabel\">Flow switch</div><div class=\"fval\">Ensures water flow before burner operation. Test for continuity only when pump is running.</div></div><div class=\"frow\"><div class=\"flabel\">Gas pressure switches (hi/lo)</div><div class=\"fval\">Monitor inlet/manifold gas pressure. Test with manometer, adjust only per manufacturer spec.</div></div><div class=\"frow\"><div class=\"flabel\">Condensate float switch</div><div class=\"fval\">Prevents operation if condensate line backs up. Test by lifting float or adding water.</div></div></div><div class=\"tip\"><b>Field tip:</b> Never bypass or jumper a safety for diagnostics without supervision &mdash; a failed safety can lead to severe equipment damage or unsafe operation.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "boil-20",
       "title": "Combustion tuning targets",
       "level": "sub",
       "tags": [
        "combustion"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Sequence of operation</div><div class=\"fval\">Call for heat &rarr; safety interlocks prove &rarr; combustion fan pre-purges &rarr; ignition trial &rarr; gas valve opens &rarr; flame proven &rarr; modulates to setpoint</div></div><div class=\"frow\"><div class=\"flabel\">Non-condensing targets</div><div class=\"fval\">O&#8322; 3&ndash;6%, CO&#8322; 7&ndash;9%, CO <100 ppm steady-state, stack temp 325&ndash;500&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Condensing targets</div><div class=\"fval\">O&#8322; 4&ndash;7%, CO&#8322; 8&ndash;10.5%, CO <80 ppm steady-state, stack temp 100&ndash;140&deg;F. Keep return water &le;130&deg;F for max efficiency</div></div><div class=\"frow\"><div class=\"flabel\">Flame signal</div><div class=\"fval\">2&ndash;6&micro;A DC (flame rod) or 3&ndash;5VDC (UV sensor). Weak/unstable = dirty sensor, poor ground, or misaligned burner</div></div><div class=\"frow\"><div class=\"flabel\">Gas pressure &mdash; inlet</div><div class=\"fval\">Natural gas 5&ndash;10\" W.C., propane 10&ndash;14\" W.C.</div></div><div class=\"frow\"><div class=\"flabel\">Gas pressure &mdash; manifold</div><div class=\"fval\">Natural gas ~3.5\" W.C., propane ~10\" W.C.</div></div><div class=\"frow\"><div class=\"flabel\">Efficiency targets</div><div class=\"fval\">Non-condensing 80&ndash;86%, condensing 90&ndash;96%</div></div></div><div class=\"tip\"><b>Field tip:</b> When tuning, verify air intake, gas pressure, and venting first &mdash; combustion issues are usually airflow or vent-related, not gas valve faults. Adjust O&#8322; in 0.1&ndash;0.2% steps and recheck CO after every change.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div><div class=\"reflink\">Full reference (targets by burner type &mdash; oil, gas, atmospheric): <a href=\"refs/sauermann-combustion-troubleshooting.pdf\" target=\"_blank\">Combustion troubleshooting & targets PDF</a></div>"
        }
       ],
       "updated": "2026-10-29"
      },
      {
       "id": "boil-64",
       "title": "Combustion troubleshooting matrix",
       "level": "sub",
       "tags": [
        "combustion"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Symptom-to-cause matrix for combustion analyzer readings. Always follow manufacturer's specifications for the specific burner.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Low O&#8322; / high CO</div><div class=\"fval\">Insufficient combustion air (adjust air band), burner over-firing (adjust fuel), or low stack draft (adjust/install barometric control, check heat exchanger, check chimney/vent sizing)</div></div><div class=\"frow\"><div class=\"flabel\">High O&#8322;</div><div class=\"fval\">Excess combustion air (adjust air band), burner under-firing (adjust fuel), excess draft (adjust/install barometric control), or loose ports/doors/missing gasket (check & repair)</div></div><div class=\"frow\"><div class=\"flabel\">Unstable O&#8322; / CO readings</div><div class=\"fval\">Changing weather/atmospheric conditions (check draft/barometric control), cracked heat exchanger (check/replace), excess draft, or loose ports/doors/missing gasket</div></div><div class=\"frow\"><div class=\"flabel\">High stack temp</div><div class=\"fval\">Insufficient airflow across heat exchanger &mdash; increase blower speed, increase supply/return ducting, check for dirty blower/filter/coils</div></div><div class=\"frow\"><div class=\"flabel\">Low stack temp</div><div class=\"fval\">Burner under-firing (adjust fuel), excess air flowing past heat exchanger (check temp rise vs manufacturer spec), or high fan speed (decrease fan speed/blower to reduce airflow)</div></div><div class=\"frow\"><div class=\"flabel\">Low stack draft (fuel oil, < -.04\" W.C.)</div><div class=\"fval\">Wrong sized venting/chimney, blocked vent, low combustion air, chimney/vent leak, or barometric control needs adjustment</div></div><div class=\"frow\"><div class=\"flabel\">High stack draft (fuel oil, > -.06\" W.C.)</div><div class=\"fval\">Barometric control needs adjustment/install, or wrong sized venting/chimney</div></div><div class=\"frow\"><div class=\"flabel\">Cracked heat exchanger check</div><div class=\"fval\">Place probe in stack, watch O&#8322; and excess air readings as blower turns on &mdash; a substantial change indicates a cracked heat exchanger (on oil systems, possibly a missing gasket or loose clean-out port instead)</div></div></div><div class=\"tip\"><b>Field tip:</b> Run this matrix against actual analyzer readings before touching gas pressure or air band &mdash; a symptom like high stack temp is often airflow-side, not a combustion tuning issue.</div><div class=\"reflink\">Full reference (targets by burner type &mdash; oil, gas, atmospheric): <a href=\"refs/sauermann-combustion-troubleshooting.pdf\" target=\"_blank\">Combustion troubleshooting & targets PDF</a></div>"
        }
       ],
       "updated": "2026-10-29"
      },
      {
       "id": "boil-21",
       "title": "Condensing vs non-condensing identification",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Flue gas temp</div><div class=\"fval\">Condensing ~100&ndash;140&deg;F vs non-condensing ~300&ndash;450&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Return water temp requirement</div><div class=\"fval\">Condensing must stay below ~130&deg;F (ideal 110&ndash;120&deg;F) or it operates like non-condensing and loses efficiency</div></div><div class=\"frow\"><div class=\"flabel\">Heat exchanger material</div><div class=\"fval\">Condensing: stainless steel/aluminum (acid-resistant). Non-condensing: copper/cast iron/steel</div></div><div class=\"frow\"><div class=\"flabel\">Venting</div><div class=\"fval\">Condensing: PVC/CPVC/polypropylene, sealed combustion. Non-condensing: metal Category I vent with draft hood</div></div><div class=\"frow\"><div class=\"flabel\">Common field mistake</div><div class=\"fval\">Piping a condensing boiler to a high-temp loop without a mixing valve &mdash; no condensation occurs, efficiency is lost</div></div></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "boil-22",
       "title": "Gas valve operation & combustion safety checks",
       "level": "sub",
       "tags": [
        "combustion",
        "gas-valve"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Valve types</div><div class=\"fval\">Single-stage (on/off), two-stage (low/high), modulating (0&ndash;10VDC or PWM signal)</div></div><div class=\"frow\"><div class=\"flabel\">Sequence</div><div class=\"fval\">Thermostat calls &rarr; inducer starts, proving switch closes &rarr; ignitor energizes &rarr; gas valve opens &rarr; flame sensor proves flame</div></div><div class=\"frow\"><div class=\"flabel\">Valve coil test</div><div class=\"fval\">Resistance typically 30&ndash;50&Omega;. 24V present but no click &rarr; replace valve. No 24V &rarr; trace back through safeties.</div></div><div class=\"frow\"><div class=\"flabel\">Combustion safety checks</div><div class=\"fval\">Inducer draft pressure -0.4\" to -0.8\" W.C., steady blue flame core, clean burners</div></div><div class=\"frow\"><div class=\"flabel\">Common failures</div><div class=\"fval\">Coil open/shorted, regulator drift, valve stuck closed, contaminated seat (oil/debris)</div></div></div><div class=\"tip\"><b>Field tip:</b> Ignition starts but no flame &rarr; check for 24V at the gas valve coil. Voltage present but no gas &rarr; replace the valve. No voltage &rarr; trace back through pressure and rollout safeties.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "boil-23",
       "title": "Expansion tank sizing & function",
       "level": "sub",
       "tags": [
        "expansion-tank"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Purpose</div><div class=\"fval\">Absorbs expansion of heated water in a closed loop to prevent overpressure</div></div><div class=\"frow\"><div class=\"flabel\">Types</div><div class=\"fval\">Diaphragm/bladder (most common) vs compression (no bladder, needs frequent air charge checks)</div></div><div class=\"frow\"><div class=\"flabel\">Location</div><div class=\"fval\">At the point of no pressure change (PONPC), typically on the suction side near the fill point</div></div><div class=\"frow\"><div class=\"flabel\">Pre-charge pressure</div><div class=\"fval\">Factory ~12 psi, adjust to system static fill pressure &mdash; rule of thumb: 1 psi per 2.31 ft of system height</div></div><div class=\"frow\"><div class=\"flabel\">Failure symptoms</div><div class=\"fval\">Relief valve leaking, pressure fluctuating, noisy pump cavitation, tank heavy and full of water (no air charge)</div></div></div><div class=\"tip\"><b>Field tip:</b> Always test air charge cold, with the system isolated and drained. A waterlogged or undercharged tank is one of the most common causes of relief valve discharge.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "boil-24",
       "title": "Hydronic loop balancing & flow verification",
       "level": "sub",
       "tags": [
        "hydronic"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Flow formula</div><div class=\"fval\">GPM = BTU &divide; (500 &times; &Delta;T). Example: 60,000 BTU coil at 20&deg;F &Delta;T = 6 GPM</div></div><div class=\"frow\"><div class=\"flabel\">&Delta;T reference</div><div class=\"fval\">Heating coil 15&ndash;25&deg;F, cooling coil 8&ndash;12&deg;F. Low &Delta;T = over-pumping/low load, high &Delta;T = low flow/plugged coil</div></div><div class=\"frow\"><div class=\"flabel\">Verification steps</div><div class=\"fval\">Record entering/leaving temps &rarr; measure &Delta;P across circuit setter &rarr; use chart to confirm GPM &rarr; adjust valve &rarr; recheck &Delta;T</div></div><div class=\"frow\"><div class=\"flabel\">Air binding</div><div class=\"fval\">Entrapped air reduces/blocks flow at high points. Purge and check auto air vents &mdash; air-bound coils show low &Delta;P and erratic &Delta;T</div></div></div><div class=\"tip\"><b>Field tip:</b> Balance main loops first, then branches. A 1&deg;F sensor error causes a 5%+ error in GPM calculation &mdash; use calibrated sensors.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "boil-25",
       "title": "Primary vs secondary piping",
       "level": "sub",
       "tags": [
        "hydronic"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Primary loop</div><div class=\"fval\">Main loop connected directly to boiler/chiller. Constant flow, sized for the heat source. Protects it from flow starvation.</div></div><div class=\"frow\"><div class=\"flabel\">Secondary loop</div><div class=\"fval\">Connected via closely spaced tees, variable flow via zone valves/VFD pumps to meet zone load.</div></div><div class=\"frow\"><div class=\"flabel\">Decoupling</div><div class=\"fval\">Closely spaced tees or a hydraulic separator decouple the loops' pressure while allowing temperature transfer between them.</div></div><div class=\"frow\"><div class=\"flabel\">Common problems</div><div class=\"fval\">Incorrect tee spacing, undersized pump, or reverse flow causing temperature fluctuations on the primary side</div></div></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "boil-26",
       "title": "Crest FB burner cleaning technique",
       "level": "sub",
       "tags": [
        "combustion"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Identify assembly generation first: first-gen burners use 1/4x20 studs with no stud under the air arms; second-gen use 3/8 studs with an extra stud under each air arm.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Burner cleaning</div><div class=\"fval\">90 psi continuous air, tight circular pattern from the inside out, unit upside down. 30&ndash;60 min typical. Pay special attention to the flame sensor 2 shield inside the burner.</div></div><div class=\"frow\"><div class=\"flabel\">Reassembly</div><div class=\"fval\">Loctite 567 around each stud above/below each gasket. 1/4x20 studs torque to 6&ndash;8 ft-lb, 3/8 studs to 25 ft-lb. Watch for gasket bulging at either torque.</div></div><div class=\"frow\"><div class=\"flabel\">Leak check</div><div class=\"fval\">Remove 4-wire PWM plugs from the fans, use Windex-type spray to generate pressure and check all gaskets. Run to operating temp, cool down, retorque all bolts a second time.</div></div><div class=\"frow\"><div class=\"flabel\">Flame pattern check</div><div class=\"fval\">Two techs: one up top, one at the control. Gas valve 1&2 high: flame blue, &frac34;\"&ndash;1&frac12;\" long, well defined. Gas valve 1&2 low: flame mostly orange, tight to burner.</div></div><div class=\"frow\"><div class=\"flabel\">Flame signal target</div><div class=\"fval\">Both flame signals 9.0 microamps or better &mdash; 11&ndash;13 is a good range</div></div><div class=\"frow\"><div class=\"flabel\">Combustion targets</div><div class=\"fval\">CO 20ppm or less at low fire, 80ppm or less at high fire</div></div></div><div class=\"tip\"><b>Field tip:</b> Do not adjust combustion to book numbers if operational testing is already complete and you meet the final criteria (no leaks, no noise, good flame signals, good flame patterns).</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div>"
        }
       ],
       "updated": "2026-08-13"
      }
     ]
    },
    {
     "id": "eq-48",
     "title": "Pumps",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "pump-27",
       "title": "Pump curves & sizing basics",
       "level": "sub",
       "tags": [
        "pump"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Head (ft)</div><div class=\"fval\">Resistance the pump must overcome. 1 ft of head &asymp; 0.433 psi (30 ft head = 13 psi)</div></div><div class=\"frow\"><div class=\"flabel\">Reading a curve</div><div class=\"fval\">As flow increases, head decreases &mdash; curve slopes downward. Operating point = where pump curve meets system curve</div></div><div class=\"frow\"><div class=\"flabel\">Sizing example</div><div class=\"fval\">Coil needs 10 GPM at 30 ft head &mdash; select a pump whose curve passes through that point near mid-range</div></div><div class=\"frow\"><div class=\"flabel\">Oversized pump</div><div class=\"fval\">Too much flow &rarr; noise, erosion, wasted energy. Verify by measuring &Delta;P vs expected TDH; may need impeller trim or VFD</div></div><div class=\"frow\"><div class=\"flabel\">Undersized pump</div><div class=\"fval\">Can't reach design flow &rarr; poor heating/cooling. Check voltage, rotation, or clogging before assuming replacement</div></div><div class=\"frow\"><div class=\"flabel\">Field verification</div><div class=\"fval\">Use suction/discharge gauges to measure differential pressure across the pump, convert psi to feet of head (psi &times; 2.31)</div></div></div><div class=\"tip\"><b>Field tip:</b> Ideal operation is near the middle of the pump curve, where it runs efficiently and quietly.</div>"
        }
       ],
       "updated": "2026-08-13"
      }
     ]
    },
    {
     "id": "eq-49",
     "title": "Cooling Towers",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "tower-28",
       "title": "Loop types",
       "level": "sub",
       "tags": [
        "cooling-tower"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Open loop</div><div class=\"fval\">Tower water exposed directly to atmosphere. Open-cell/crossflow/counterflow tower. Prone to contamination, scaling, algae.</div></div><div class=\"frow\"><div class=\"flabel\">Closed loop</div><div class=\"fval\">Sealed system, no air contact, heat exchanged through a coil. Closed-circuit fluid cooler. Cleaner, less oxygen corrosion.</div></div><div class=\"frow\"><div class=\"flabel\">Visual tell</div><div class=\"fval\">Spray nozzles/fill media visible = open loop. Finned coils with fan above sealed coil section = closed loop.</div></div></div><div class=\"tip\"><b>Field tip:</b> If water contacts air directly, it's open loop. If water/glycol is isolated inside coils or piping, it's closed loop.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "tower-29",
       "title": "Operation & seasonal maintenance",
       "level": "sub",
       "tags": [
        "cooling-tower"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Startup checklist</div><div class=\"fval\">Verify basin cleaned/filled &rarr; check float valve &rarr; confirm pump prime &rarr; inspect belts/fan/bearings &rarr; energize fan and check rotation</div></div><div class=\"frow\"><div class=\"flabel\">Winterization</div><div class=\"fval\">Drain basin/piping &rarr; blow out supply/return lines &rarr; open all drains &rarr; clean fill/strainers &rarr; disable makeup water. Leave drains open through winter.</div></div><div class=\"frow\"><div class=\"flabel\">Approach temperature</div><div class=\"fval\">Leaving water temp &minus; ambient wet bulb temp. Typical 5&ndash;10&deg;F. High approach = fouled fill, poor airflow, or reduced water flow</div></div><div class=\"frow\"><div class=\"flabel\">Cooling range (&Delta;T)</div><div class=\"fval\">Entering &minus; leaving water temp. Typical 10&ndash;15&deg;F. Low &Delta;T = low load/excess flow. High &Delta;T = low flow/fouled coil</div></div><div class=\"frow\"><div class=\"flabel\">Water treatment</div><div class=\"fval\">Monitor conductivity, pH 7.0&ndash;9.0, biocide levels. Poor water quality reduces heat transfer and damages components</div></div></div><div class=\"tip\"><b>Field tip:</b> If approach temperature rises above 10&deg;F, inspect fill, basin, and fan system. Low airflow = dirty blades or fan motor. Low water flow = clogged strainers or blocked nozzles.</div><div class=\"reflink\">Full reference (seasonal shutdown checklist): <a href=\"https://www.goodway.com/hvac-blog/2026/09/cooling-tower-winterization-checklist-how-to-prepare-for-the-cold-seasonal-shutdowns/\" target=\"_blank\">Cooling Tower Winterization Checklist &mdash; Goodway</a></div>"
        }
       ],
       "updated": "2026-10-29"
      },
      {
       "id": "tower-70",
       "title": "How a cooling tower actually works",
       "level": "sub",
       "tags": [
        "cooling-tower"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">This is the concept that makes the approach/wet-bulb numbers elsewhere in this section make sense. A cooling tower doesn't cool water by blowing air past it like a condenser coil &mdash; it cools water by evaporating a small portion of it.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Why evaporation cools</div><div class=\"fval\">Turning liquid water into vapor takes a large amount of heat (latent heat of vaporization) &mdash; that heat gets pulled from the remaining water, cooling it. This is the same principle as sweat cooling skin</div></div><div class=\"frow\"><div class=\"flabel\">Why wet bulb, not dry bulb, is the limit</div><div class=\"fval\">Because the process depends on evaporation, a tower's performance is limited by how much moisture the air can still absorb &mdash; that's what wet-bulb temperature measures. A tower can cool water close to (but never below) the entering air's wet-bulb temp, regardless of the dry-bulb (regular thermometer) temp outside</div></div><div class=\"frow\"><div class=\"flabel\">Why this matters in humid weather</div><div class=\"fval\">High humidity means wet-bulb temp is close to dry-bulb temp, so the air can't absorb much more moisture &mdash; tower performance drops even if it doesn't feel especially hot outside. This is normal, not a fault</div></div><div class=\"frow\"><div class=\"flabel\">Water loss</div><div class=\"fval\">Evaporation constantly loses water to the atmosphere &mdash; this is why towers need continuous makeup water and a float valve, unlike a sealed closed-loop system</div></div></div><div class=\"tip\"><b>Field tip:</b> If a customer asks why the tower \"isn't cooling as well\" on a humid day, this is usually the answer &mdash; check approach temp against wet bulb, not against the air temp on your phone's weather app.</div>"
        }
       ],
       "updated": "2026-08-19"
      },
      {
       "id": "tower-71",
       "title": "Fill, drift eliminators & fan drive",
       "level": "sub",
       "tags": [
        "cooling-tower"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Splash fill</div><div class=\"fval\">Water splashes over stacked bars/grids, breaking into droplets to increase surface area for evaporation. More open, less prone to clogging, but lower efficiency than film fill</div></div><div class=\"frow\"><div class=\"flabel\">Film fill</div><div class=\"fval\">Water flows as a thin film over closely spaced PVC sheets. More surface area and more efficient than splash fill, but fouls more easily &mdash; needs cleaner water and is more sensitive to scaling/algae</div></div><div class=\"frow\"><div class=\"flabel\">Drift eliminators</div><div class=\"fval\">Baffles at the air discharge that catch water droplets carried by the airflow, so the tower loses water only to evaporation, not to droplets blowing out with the exhaust air. Damaged/missing eliminators show up as excessive water loss and wet surfaces/staining near the tower discharge</div></div><div class=\"frow\"><div class=\"flabel\">Fan drive types</div><div class=\"fval\">Belt-driven (adjustable via sheave, most common on smaller towers), gear-driven (right-angle gearbox, common on larger induced-draft towers, needs its own oil service), and direct-drive (motor shaft-mounted straight to the fan, fewer wear points)</div></div><div class=\"frow\"><div class=\"flabel\">Induced vs forced draft</div><div class=\"fval\">Induced draft: fan at the top pulls air up through the fill (most common). Forced draft: fan at the bottom pushes air in &mdash; more prone to recirculating warm discharge air back into the intake</div></div><div class=\"frow\"><div class=\"flabel\">VFD fan control</div><div class=\"fval\">Modulates fan speed to hold a target leaving water temp instead of just cycling on/off &mdash; saves energy and reduces belt/bearing wear from constant starts. See Mounted bearing lubrication under Motor & Drive Reference for gearbox/fan shaft bearing service</div></div></div><div class=\"tip\"><b>Field tip:</b> Excessive water loss with no obvious leak is almost always drift eliminators &mdash; check them before assuming a piping or basin leak.</div>"
        }
       ],
       "updated": "2026-08-19"
      },
      {
       "id": "tower-72",
       "title": "Water treatment & Legionella safety",
       "level": "sub",
       "tags": [
        "cooling-tower"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Open cooling towers create warm water aerosolized into the air &mdash; exactly the conditions Legionella bacteria need to grow and spread. Water treatment on a tower isn't just about protecting equipment, it's a health and safety issue.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Why it matters</div><div class=\"fval\">Legionnaires' disease spreads through inhaled mist from contaminated water sources &mdash; poorly maintained cooling towers are a documented source of outbreaks. Many states/municipalities require registered testing and maintenance plans for open towers</div></div><div class=\"frow\"><div class=\"flabel\">Biocide</div><div class=\"fval\">Kills bacteria/algae in the water &mdash; needs to be maintained at proper levels continuously, not just shocked occasionally</div></div><div class=\"frow\"><div class=\"flabel\">Cycles of concentration / blowdown</div><div class=\"fval\">As water evaporates, dissolved minerals concentrate in the remaining water. Blowdown (bleeding off some tower water and replacing with fresh makeup) keeps mineral concentration and conductivity from climbing too high and scaling the fill/coils</div></div><div class=\"frow\"><div class=\"flabel\">pH</div><div class=\"fval\">Typically maintained 7.0&ndash;9.0. Out-of-range pH accelerates scaling (high) or corrosion (low)</div></div><div class=\"frow\"><div class=\"flabel\">If a tower has sat idle</div><div class=\"fval\">Towers that have been offline (seasonal shutdown, unoccupied building) need to be disinfected before restart per manufacturer/local requirements &mdash; stagnant warm water is a higher Legionella risk than water in continuous circulation</div></div></div><div class=\"tip\"><b>Field tip:</b> If a building's water treatment program looks neglected (no test records, cloudy/slimy basin water), flag it &mdash; this is a liability issue for the customer, not just a maintenance one.</div>"
        }
       ],
       "updated": "2026-08-19"
      }
     ]
    },
    {
     "id": "eq-50",
     "title": "Air Terminal Units & Ventilation Equipment",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "term-30",
       "title": "Constant volume vs VAV",
       "level": "sub",
       "tags": [
        "vav-bas"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Control method</div><div class=\"fval\">CV: cycling compressors or modulating coil valves. VAV: adjusting zone damper position to vary airflow</div></div><div class=\"frow\"><div class=\"flabel\">Airflow</div><div class=\"fval\">CV: constant at all times. VAV: modulated continuously by VAV boxes while supply temp stays relatively constant</div></div><div class=\"frow\"><div class=\"flabel\">Energy efficiency</div><div class=\"fval\">CV: less efficient, fans run full speed at partial load. VAV: highly efficient, fan speed reduces via VFD</div></div><div class=\"frow\"><div class=\"flabel\">Typical equipment</div><div class=\"fval\">CV: RTUs, small AHUs, simple systems. VAV: large AHUs, multi-zone buildings</div></div><div class=\"frow\"><div class=\"flabel\">Controls/BAS</div><div class=\"fval\">CV: usually thermostat-based, minimal BAS. VAV: fully BAS-integrated with static pressure reset, scheduling, trending</div></div></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "term-119",
       "title": "HRVs and ERVs in commercial buildings",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">A second controlled pathway for fresh air besides economizers &mdash; essentially larger versions of the residential HRV/ERV, common where a building needs to meet ASHRAE 62.1 ventilation rates without relying on uncontrolled envelope leakage.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">ASHRAE 62.1 outdoor-air fraction (OAF)</div><div class=\"fval\">Minimum ratio of outdoor air intake to total supply air, varies by building type &mdash; e.g. 15% for retail/office, 20&ndash;40% for auditoriums/gymnasiums</div></div><div class=\"frow\"><div class=\"flabel\">How they work</div><div class=\"fval\">A blower assembly pulls in outdoor air and exhausts stale return air, with filtration on the incoming airstream. The outgoing and incoming air cross within a heat exchanger without directly mixing, recovering energy that would otherwise be lost to the exhaust</div></div><div class=\"frow\"><div class=\"flabel\">HRV (Heat Recovery Ventilator)</div><div class=\"fval\">Sensible heat exchange only, typically via a fixed-plate crossflow surface. Best suited to cold, dry climates &mdash; recovers heat from warmer indoor exhaust air to precondition cold incoming outdoor air</div></div><div class=\"frow\"><div class=\"flabel\">ERV (Energy Recovery Ventilator)</div><div class=\"fval\">Sensible AND latent exchange via a desiccant-coated medium, either fixed-plate or a rotary \"enthalpy wheel.\" Suits milder, moderately humid (\"green grass\") climates. Not as effective as active dehumidification in very humid climates &mdash; some ERVs offer an optional sensible-only mode</div></div><div class=\"frow\"><div class=\"flabel\">Typical ERV parts</div><div class=\"fval\">Blower, exchange medium (often an enthalpy wheel), filters, digital control box, access panel</div></div><div class=\"frow\"><div class=\"flabel\">Demand-control IAQ integration</div><div class=\"fval\">Some ERV controls tie into CO2/VOC sensors with an alarm setpoint (e.g. 1200 PPM) and a time delay, letting the BAS bring in fresh air on demand rather than continuously</div></div><div class=\"frow\"><div class=\"flabel\">Climate matching matters</div><div class=\"fval\">An HRV in a humid climate or an ERV in a very cold, dry climate is the wrong tool &mdash; match the unit type to what the building actually needs to manage (sensible only vs sensible + latent)</div></div></div><div class=\"tip\"><b>Field tip:</b> If a commercial client's main concern is contaminant/CO2 control rather than temperature or humidity, an ERV with IAQ sensor integration can bring in fresh air on demand instead of running continuously &mdash; churches are a common example of this use case.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/hrvs-and-ervs-in-commercial-buildings/\" target=\"_blank\">HRVs and ERVs in Commercial Buildings &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "term-129",
       "title": "Kitchen exhaust & makeup air",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Applies to commercial kitchen hoods, but the same negative-pressure principle shows up on residential range hoods and other high-CFM exhaust too. Code citations below are IRC baseline plus a Florida example of how local code layers on top &mdash; always check the applicable state/local code.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Why balance ventilation</div><div class=\"fval\">Exhausting air puts the structure under negative pressure, pulling in replacement air from wherever it can &mdash; envelope cracks, commercial floor drains, attic space (dust, insulation debris, pest waste). Negative pressure can also backdraft open-combustion appliances, which is dangerous</div></div><div class=\"frow\"><div class=\"flabel\">IRC M1503</div><div class=\"fval\">Makeup air must be provided at a rate approximately equal to exhaust for kitchen exhaust systems exceeding 400 CFM</div></div><div class=\"frow\"><div class=\"flabel\">IRC M1503.6.2</div><div class=\"fval\">Requires makeup air dampers that automatically open when a >400 CFM exhaust system runs</div></div><div class=\"frow\"><div class=\"flabel\">IRC M1503.6.1</div><div class=\"fval\">Makeup air must discharge into the same room as the exhaust hood, or into a duct/room system that interacts directly with that room through a permanent opening (a return or transfer grille counts; a doorway does not) &mdash; closer to the source is better</div></div><div class=\"frow\"><div class=\"flabel\">IRC G2407.4 (304.4)</div><div class=\"fval\">Makeup air is required if exhaust ventilation interferes with a gas appliance's combustion air. Otherwise, open-combustion appliances can't share space with exhaust ventilation at all</div></div><div class=\"frow\"><div class=\"flabel\">Florida example (model of local layering)</div><div class=\"fval\">FL Residential Code M1503.4 mirrors the 400 CFM/makeup-air-rate requirement and requires at least one damper to regulate airflow. FL Mechanical Code 505.2 requires makeup air above 400 CFM without specifying mechanical vs. natural, but requires mitigating the negative pressure</div></div></div><div class=\"tip\"><b>Field tip:</b> A nuisance complaint about a smoky kitchen or a backdrafting water heater near a big range hood is often a makeup air problem, not an exhaust problem &mdash; check whether replacement air is actually getting back in through a controlled path.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/kitchen-exhaust-and-makeup-air/\" target=\"_blank\">Kitchen Exhaust and Makeup Air &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-51",
     "title": "Unit Heaters",
     "level": "top",
     "tags": [],
     "content": [
      {
       "html": "<div class=\"placeholder\">Add content here</div>"
      }
     ],
     "updated": "2026-08-13"
    },
    {
     "id": "eq-52",
     "title": "Controls & BAS",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "bas-31",
       "title": "KMC VAV flow controller-actuator (CSP-5001/5002)",
       "level": "sub",
       "tags": [
        "vav-bas"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">What it is</div><div class=\"fval\">Pressure-independent controller-actuator for VAV terminal units. Senses air velocity via a flow-through sensor, range 0&ndash;3,300 fpm at 0&ndash;10VDC</div></div><div class=\"frow\"><div class=\"flabel\">Models</div><div class=\"fval\">CSP-5001 = CCW to close (factory default). CSP-5002 = CW to close. Rotation is field-changeable via jumper.</div></div><div class=\"frow\"><div class=\"flabel\">Wiring basics</div><div class=\"fval\">16VDC to thermostat +, IN to T1 (cooling) or T2 (heating), OUT to V1 for velocity readout, &minus; to &minus;</div></div><div class=\"frow\"><div class=\"flabel\">Testing actuator motor</div><div class=\"fval\">Jumper IN to 16VDC &rarr; green Open LED, damper drives open. Jumper IN to &minus; &rarr; red Close LED, damper drives closed.</div></div><div class=\"frow\"><div class=\"flabel\">Min/max flow limits</div><div class=\"fval\">Set at either the CSP controller or the CTE-5100 thermostat, never both &mdash; conflicting limits at both locations will not reflect either one correctly</div></div><div class=\"frow\"><div class=\"flabel\">VNOM setting</div><div class=\"fval\">Leave at factory/centered setting unless a specific velocity range is required &mdash; changing it alters IN/OUT voltage calibration</div></div><div class=\"frow\"><div class=\"flabel\">Common troubleshooting</div><div class=\"fval\">No damper movement: check 24VAC at ~/&minus;, 16VDC at (16VDC)/(&minus;), and Requested Flow voltage on IN/&minus;. Mismatch between Requested and Actual Flow beyond tolerance: check flow sensor tubing for kinks or replace controller</div></div></div><div class=\"tip\"><b>Field tip:</b> Never jumper terminal 16VDC to terminal &minus; directly &mdash; this shorts and can damage the power supply. Use the documented manual open/close jumper method instead.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div><div class=\"reflink\">Full reference (wiring diagrams, dimensions, spec sheet): <a href=\"refs/kmc-csp-5001-5002-installation-guide.pdf\" target=\"_blank\">CSP-5001/5002 installation guide PDF</a></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "bas-110",
       "title": "Shielded control cable for communicating controls",
       "level": "sub",
       "tags": [
        "wiring"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Communicating \"signal\" controls run at low voltage but are far more susceptible to induced electrical noise than a simple on/off control circuit, since they're picking up charges from nearby conductors, electronics, and even lightning transients rather than just switching a load.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">What shielded cable does</div><div class=\"fval\">A metallic jacket surrounds the individual conductors and routes induced charges to ground instead of letting them corrupt the signal</div></div><div class=\"frow\"><div class=\"flabel\">Grounding rule</div><div class=\"fval\">Bond the shield to a good equipment ground on ONE end only. Grounding both ends risks turning the shield into a ground-fault path and can create a ground loop that generates the very noise you're trying to eliminate</div></div><div class=\"frow\"><div class=\"flabel\">If shielded cable wasn't run</div><div class=\"fval\">Grounding leftover/unused conductors on one end can sometimes help, but isn't guaranteed &mdash; unlike a true shield, spare conductors don't fully surround the ones actually carrying the signal</div></div><div class=\"frow\"><div class=\"flabel\">Manufacturer requirements vary</div><div class=\"fval\">Some communicating systems require shielded cable, some merely recommend it, others don't address it at all &mdash; check the specific system's install documentation rather than assuming</div></div></div><div class=\"tip\"><b>Field tip:</b> A system that throws intermittent communication faults, especially correlating with nearby electrical storms or equipment, is a classic sign of unshielded (or improperly grounded) low-voltage signal wiring picking up induced noise.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/shielded-control-cable-communicating-controls/\" target=\"_blank\">Shielded Control Cable & Communicating Controls &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "bas-140",
       "title": "4-20mA control basics",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">A milliamp-based analog signal protocol that carries over the old mechanical/pneumatic control philosophy into electrical controls &mdash; common on BAS-connected sensors and transducers.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">The basic idea</div><div class=\"fval\">The bottom of any sensor's range is set to output 4mA, the top of its range to 20mA. A tank level sensor set up this way outputs 4mA at empty and 20mA at full; a pressure transducer outputs 4mA at its bottom rated pressure and 20mA at its max</div></div><div class=\"frow\"><div class=\"flabel\">How it works</div><div class=\"fval\">Power is supplied to a sensor/transmitter. Based on what it measures, the transmitter produces a proportional milliamp signal, which feeds into a control input that reads the amperage and converts it to a value</div></div><div class=\"frow\"><div class=\"flabel\">Why 4-20mA over voltage signals</div><div class=\"fval\">Amperage is the same at every point in the circuit, so a 4-20mA loop isn't affected by voltage drop or interference the way a voltage-sensing circuit can be. Because the bottom of the range is 4mA (not 0), the control can also tell the difference between an out-of-range low reading and a fully open/dead circuit</div></div><div class=\"frow\"><div class=\"flabel\">The tradeoff</div><div class=\"fval\">Each 4-20mA device needs its own dedicated conductor pair. Digital controls can run many devices off a shared conductor \"trunk,\" making them easier to route and manage on more complex jobs</div></div><div class=\"frow\"><div class=\"flabel\">Testing &mdash; process clamp meter</div><div class=\"fval\">A specialized milliamp clamp meter reads the loop's amperage without disconnecting any wires. Accurate and non-invasive, but expensive and not common on a typical HVAC/R truck</div></div><div class=\"frow\"><div class=\"flabel\">Testing &mdash; in-series meter</div><div class=\"fval\">The more common method: alligator clips on a quality meter set to the mA scale, connected in series in the circuit (requires disconnecting a wire or terminal). Same basic technique used to test microamp flame-sensing signals on a gas furnace, just on the milliamp scale instead</div></div></div><div class=\"tip\"><b>Field tip:</b> If a 4-20mA sensor is reading a value that seems physically impossible rather than just wrong, check whether it's reading below 4mA first &mdash; that range is reserved for signaling an out-of-range or open-circuit condition, not a valid measurement.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/4-20ma-control-basics/\" target=\"_blank\">4-20mA Control Basics &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-78",
     "title": "Thermostats, Zoning & Low-Voltage Controls",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "therm-79",
       "title": "Low voltage wiring & relay basics",
       "level": "sub",
       "tags": [
        "low-voltage"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Low voltage wiring</div><div class=\"fval\">Typically &le;50V, most common is 24VAC in HVAC (thermostats, controls, safeties). Carries control/signal current, not load current. \"Safer\" than line voltage but still causes damage or comm failures if poorly wired. Sensitive to EMI near power lines/motors &mdash; run separate from high voltage, shield if needed. Match voltage type (24VAC vs 12/24VDC) &mdash; mismatch damages components</div></div><div class=\"frow\"><div class=\"flabel\">Relay basics</div><div class=\"fval\">Coil (receives the low voltage signal) &rarr; armature &rarr; contacts (open/close) &rarr; spring (returns to rest state). A relay bridges low voltage control to a high voltage load &mdash; e.g. a 24V thermostat signal energizes a relay coil, which switches 240V to the compressor</div></div><div class=\"frow\"><div class=\"flabel\">EMR (electromechanical)</div><div class=\"fval\">Physical contacts &mdash; the traditional relay type, visible/audible click on operation</div></div><div class=\"frow\"><div class=\"flabel\">SSR (solid state)</div><div class=\"fval\">No moving contacts &mdash; faster switching, silent, more reliable long-term, higher cost</div></div><div class=\"frow\"><div class=\"flabel\">Latching relay</div><div class=\"fval\">Holds its position with power removed &mdash; power-saving design, common where the load needs to stay set without continuous coil power</div></div><div class=\"frow\"><div class=\"flabel\">Time delay relay</div><div class=\"fval\">Controlled on/off delay, used in sequencing (e.g. staggering compressor starts, blower-off delay)</div></div><div class=\"frow\"><div class=\"flabel\">Contact rating</div><div class=\"fval\">Must match the load &mdash; underrated contacts arc, weld shut, and fail early</div></div><div class=\"frow\"><div class=\"flabel\">Coil voltage</div><div class=\"fval\">Must match the control signal exactly, including AC vs DC &mdash; a DC coil on an AC signal (or vice versa) won't operate correctly even if the voltage number looks right</div></div><div class=\"frow\"><div class=\"flabel\">Inductive loads</div><div class=\"fval\">Motors and solenoids need spike protection (snubber circuits) &mdash; the collapsing magnetic field on de-energization generates a voltage spike that can damage contacts/electronics without one</div></div><div class=\"frow\"><div class=\"flabel\">Isolation</div><div class=\"fval\">Relays provide electrical isolation between the control circuit and the load circuit &mdash; this is a safety function, not just a switching convenience</div></div></div><div class=\"tip\"><b>Field tip:</b> A relay that hums or chatters instead of pulling in cleanly is usually low coil voltage or a worn/misaligned armature &mdash; check coil voltage first before condemning the relay.</div><div class=\"unitnote\">Source: George Carey, Indoor Comfort Marketing, July 2025.</div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "therm-123",
       "title": "Short cycling &mdash; causes & controls",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Short cycling is equipment turning on and off more than optimal. Never intentionally rapid-cycle equipment to try to \"spread out\" runtime (some utilities have proposed this for load-shedding) &mdash; it's a hard no. Long, steady run times beat frequent short cycles every time.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Safeties & limits</div><div class=\"fval\">Furnace limit switches, motor overloads, and refrigerant high/low/loss-of-charge pressure switches shut equipment off before a failure. Most have a natural gap between make and break points plus a time delay, which helps prevent rapid re-cycling</div></div><div class=\"frow\"><div class=\"flabel\">Power interruptions</div><div class=\"fval\">Rapid power cycling (storms, a breaker flipped on/off, a bumped condensate switch) can restart equipment with no time delay &mdash; hard on motors and controls, and can occasionally even make a scroll compressor run backward</div></div><div class=\"frow\"><div class=\"flabel\">Oversizing / low load</div><div class=\"fval\">Equipment sized above the load hits setpoint quickly and short-cycles. Well-designed systems run nearly continuously at peak load &mdash; reassure customers that a system that \"never shuts off\" in extreme weather is a good sign for longevity and efficiency, not a fault, as long as comfort is maintained</div></div><div class=\"frow\"><div class=\"flabel\">Controls design</div><div class=\"fval\">An on/off dead-band plus a max CPH (cycles per hour) setting balances comfort against short-cycling. Example: 3&deg;F dead-band, cooling CPH of 3, 75&deg;F setpoint &rarr; comes on at 76&deg;F, shuts off at 74&deg;F, capped at 3 cycles per hour</div></div><div class=\"frow\"><div class=\"flabel\">Electrical consequences</div><div class=\"fval\">Voltage sag/dimming lights during motor or compressor start-up, contactor and relay contact wear from repeated arcing, premature hot surface ignitor failure</div></div><div class=\"frow\"><div class=\"flabel\">Mechanical/performance consequences</div><div class=\"fval\">Compressor oil loss and lubrication issues, poor dehumidification (the coil needs run time to cool down and start condensing moisture), poor efficiency (steady-state performance takes time to reach), radiant discomfort (air temp changes fast but furniture/walls/floors don't), poor ventilation control</div></div></div><div class=\"tip\"><b>Field tip:</b> If a customer complains a system \"never shuts off,\" check comfort and efficiency before assuming a problem &mdash; continuous run time at design conditions on a properly sized system is expected, not a fault.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/short-cycling/\" target=\"_blank\">Short Cycling &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-125",
     "title": "Metering Devices &mdash; TXV & EEV",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "txv-126",
       "title": "Mounting the TXV bulb",
       "level": "sub",
       "tags": [
        "txv"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">A TXV bulb has no logic of its own &mdash; it's charged with refrigerant that follows the same pressure-temperature rules as the rest of the system, and it's this bulb pressure that provides the valve's opening force. Everything about mounting it comes down to one goal: read suction line temperature as accurately as possible.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">The 3-way balance</div><div class=\"fval\">Bulb pressure provides the opening force. Spring pressure and equalizing pressure (accounting for the evaporator's pressure drop) both provide closing force. The valve modulates based on this balance, so an inaccurate bulb reading throws off the whole valve</div></div><div class=\"frow\"><div class=\"flabel\">Clock position rules of thumb</div><div class=\"fval\">Roughly 1 o'clock for ⅜\"&ndash;⅝\" OD tubing, 3 o'clock for ¾\"&ndash;1¼\" OD &mdash; but good contact with the suction line matters more than hitting the exact clock position</div></div><div class=\"frow\"><div class=\"flabel\">Avoid 6 o'clock</div><div class=\"fval\">Mounting at 6 o'clock risks the bulb picking up oil temperature pooled at the bottom of the line instead of refrigerant temperature, which throws off the superheat reading</div></div><div class=\"frow\"><div class=\"flabel\">Strapping</div><div class=\"fval\">Use the manufacturer-provided copper strap when possible; any material that conducts heat similarly works if you can't. Never use zip ties or tape &mdash; zip ties also wear out over time and lose contact. Mount to a straight section of tubing, not a joint</div></div><div class=\"frow\"><div class=\"flabel\">Vertical tubing</div><div class=\"fval\">The capillary tube from bulb to powerhead should point UP. Pointed down, most of the liquid refrigerant in the powerhead won't be in the bulb, so it won't respond well to temperature changes</div></div><div class=\"frow\"><div class=\"flabel\">Insulating the bulb</div><div class=\"fval\">Critical in HVAC applications, where ambient temperature is almost always well above suction line temperature. Less critical in refrigeration, where suction line temp is often closer to ambient already</div></div><div class=\"frow\"><div class=\"flabel\">Protecting from brazing heat</div><div class=\"fval\">The bulb is heat-sensitive &mdash; on R-410A systems it tops out around 167&deg;F. Wrap it in a wet towel or heat-blocking putty (e.g. Refrigeration Technologies WetRag), or just remove it, especially when using a rosebud tip or air-acetylene torch that spreads heat over a wider area</div></div></div><div class=\"tip\"><b>Field tip:</b> Good contact beats precise clock position &mdash; if you can't hit the textbook clock position but can get solid contact on a straight section of pipe, take the contact every time.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/mounting-the-txv-bulb/\" target=\"_blank\">Mounting the TXV Bulb &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "txv-127",
       "title": "Setting & adjusting superheat on a TXV system",
       "level": "sub",
       "tags": [
        "txv"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Adjusting a TXV is a last resort, not a first move &mdash; and not every valve can even be adjusted.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Is it even adjustable?</div><div class=\"fval\">Non-adjustable valves are flat on the bottom. Adjustable ones have a nut/extension covering an adjustable stem. Attempting to adjust a non-adjustable valve can release the entire system charge &mdash; confirm before reaching for a wrench</div></div><div class=\"frow\"><div class=\"flabel\">Rule out everything else first</div><div class=\"fval\">Bulb contact and position (not 6 o'clock), mechanical subcooler operation if present, adequate airflow/load match, and restrictions (dirty filter driers, TXV screens) should all be ruled out before adjusting the stem</div></div><div class=\"frow\"><div class=\"flabel\">Why not just adjust it</div><div class=\"fval\">Opening the valve to compensate for an unrelated operational problem makes floodback more likely &mdash; once someone fixes the real issue later, the valve can slam open and dump liquid into the compressor</div></div><div class=\"frow\"><div class=\"flabel\">Which way to turn</div><div class=\"fval\">Clockwise increases superheat (tighter spring, less liquid through). Counterclockwise decreases superheat (looser spring, more liquid through). Turn only &frac12; turn at a time</div></div><div class=\"frow\"><div class=\"flabel\">Testing after each adjustment</div><div class=\"fval\">Run the system fully buttoned up under typical operating conditions (expected airflow, panels on) before re-measuring and making further adjustments</div></div><div class=\"frow\"><div class=\"flabel\">Don't force it</div><div class=\"fval\">The adjustment screw should turn with minimal resistance past the initial \"unstick.\" Forcing it, or adjusting too much/too roughly over time, can strip the stem and permanently lock the valve in position &mdash; at that point it needs replacement</div></div><div class=\"frow\"><div class=\"flabel\">Where this actually comes up</div><div class=\"fval\">Adjustable TXVs are more common in mission-critical commercial refrigeration than residential/light commercial HVAC</div></div></div><div class=\"tip\"><b>Field tip:</b> An out-of-range superheat reading at the evaporator outlet is a symptom to investigate, not an invitation to grab a wrench &mdash; work the checklist of other causes first.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/setting-and-adjusting-superheat-on-a-txv-system/\" target=\"_blank\">Setting and Adjusting Superheat on a TXV System &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "txv-128",
       "title": "TXV external equalizers & distributors",
       "level": "sub",
       "tags": [
        "txv"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Equalizers and distributors usually show up together on larger coils, and understanding one helps explain why the other is needed.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">What the equalizer actually does</div><div class=\"fval\">Provides a closing force that references the pressure drop across the evaporator, counteracting the bulb's opening force &mdash; NOT there to even out pressure during the off cycle</div></div><div class=\"frow\"><div class=\"flabel\">Internal equalization</div><div class=\"fval\">Works fine for small coils with a small pressure drop &mdash; the reference is simply taken at the TXV's own outlet</div></div><div class=\"frow\"><div class=\"flabel\">Distributors</div><div class=\"fval\">Small tubes feeding refrigerant into separate rows of a larger evaporator coil. Each tube effectively acts like its own small evaporator with its own pressure drop</div></div><div class=\"frow\"><div class=\"flabel\">Why distributors need an external equalizer</div><div class=\"fval\">An internally-equalized valve doesn't account for the extra pressure drop the distributor tubes add, so the bulb's superheat reference becomes inaccurate on coils that use them</div></div><div class=\"frow\"><div class=\"flabel\">Bulb-to-equalizer placement</div><div class=\"fval\">Textbook answer: equalizer connection downstream of the bulb on the suction line. Downstream placement optimizes superheat/load response. Upstream placement instead protects the compressor &mdash; if the valve leaks liquid through the equalizer line, the bulb senses the flooding and closes the valve. It's a tradeoff of priorities more than a strict right/wrong</div></div><div class=\"frow\"><div class=\"flabel\">Blocked external equalizer &mdash; progression</div><div class=\"fval\">Initially the valve may read zero evaporator pressure and open too wide (flooding risk). Pressure then gradually climbs and fills the equalizer line (often via off-cycle bleed or nitrogen pressurization), which slams the valve permanently shut with no way to bleed back out</div></div><div class=\"frow\"><div class=\"flabel\">Common causes of a blockage</div><div class=\"fval\">Solder blockage, or an undepressed Schrader core where the equalizer connects via a Schrader port</div></div></div><div class=\"tip\"><b>Field tip:</b> A TXV that's permanently slammed shut with no charge movement at all is worth checking the external equalizer line for a blockage before condemning the valve itself.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/txv-external-equalizers-and-distributors/\" target=\"_blank\">TXV External Equalizers and Distributors &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-133",
     "title": "Gas Furnaces",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "furn-134",
       "title": "Troubleshooting 90%+ gas furnaces",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">90%+ high-efficiency condensing furnaces differ from 80% induced-draft furnaces in 3 key ways: a dedicated (sealed) outdoor combustion air intake, a primary AND secondary heat exchanger, and a condensate assembly &mdash; the extra heat transfer surface cools flue gases enough that water vapor condenses out, releasing extra latent heat that boosts efficiency further.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Condensate is acidic</div><div class=\"fval\">It mixes with flue gas byproducts. Keep it away from bare metal plumbing or use an acid neutralizer &mdash; these furnaces typically use dedicated PVC for condensate drainage. Secondary heat exchangers are usually stainless steel but not immune to corrosion; pitching the furnace slightly forward helps prevent acidic water pooling inside</div></div><div class=\"frow\"><div class=\"flabel\">Cold-climate freeze risk</div><div class=\"fval\">A condensate drain running straight outdoors can freeze solid at the outlet in low ambient temps, backing up the drain. Manufacturer literature may call for heat tape if the drain runs through unconditioned space (e.g. an attic)</div></div><div class=\"frow\"><div class=\"flabel\">Why sealed combustion matters</div><div class=\"fval\">Eliminates the risk of contaminated combustion air from nearby VOCs (cleaning products, off-gassing paint) and doesn't need makeup air the way open-combustion units do &mdash; important in encapsulated attics with nowhere for open combustion to draw air from, which is why 90%+ furnaces show up in performance homes even in mild climates</div></div><div class=\"frow\"><div class=\"flabel\">Sequence of operation</div><div class=\"fval\">W call &rarr; board verifies pressure switch is open &rarr; inducer starts &rarr; pressure switch closes &rarr; safety circuit check &rarr; ignition (igniter + gas valve, flame proven via flame rod) &rarr; blower starts</div></div><div class=\"frow\"><div class=\"flabel\">Pressure switches vary by tier</div><div class=\"fval\">Single-stage furnaces are similar to 80% furnaces. Two-stage often has a switch per stage. Modulating furnaces may use a pressure transducer instead. Multiple switches on the secondary heat exchanger respond to the pressure drop between primary and secondary &mdash; check manufacturer literature for exact open/close pressures. A cracked/dirty hose or an intake/exhaust piping issue is a common cause of a switch not reaching target pressure; undersized flue piping can also prevent the inducer from generating enough pressure &mdash; always size to the manufacturer's vent tables</div></div><div class=\"frow\"><div class=\"flabel\">First-look troubleshooting</div><div class=\"fval\">Loose wires, water buildup, debris in the burner compartment, obstructed intake/exhaust venting, no gas supply. Use sight and smell &mdash; a rotten egg smell or a water leak are both strong indicators</div></div><div class=\"frow\"><div class=\"flabel\">Secondary heat exchanger</div><div class=\"fval\">Tube-and-fin design like an evaporator coil. Externally, it collects debris without regular filter changes and blower cleaning, reducing airflow. Internally, a clogged exchanger can prevent proper flame draw, leading to flame rollout</div></div><div class=\"frow\"><div class=\"flabel\">Keeping animals out of the flue</div><div class=\"fval\">A simple screen over the vent can ice over in cold weather. Flush mount wall termination kits and concentric (pipe-in-pipe) vent kits draw combustion air from the backside of the fitting instead, avoiding that issue. Flush mount kits are horizontal-only; concentric kits work in both horizontal and vertical applications</div></div><div class=\"frow\"><div class=\"flabel\">Vent termination placement</div><div class=\"fval\">Roof mounts risk freezing, wall mounts risk snow coverage, and a flue near the condensing unit can corrode the coil. Keep terminations away from high-traffic areas like porches and walkways</div></div><div class=\"frow\"><div class=\"flabel\">Gas pressure</div><div class=\"fval\">Inlet pressure normally drops a bit when the valve opens &mdash; only a problem if it drags outlet pressure below spec. Running multiple gas appliances simultaneously helps isolate whether a pressure drop is the appliance/valve or the piping/regulator upstream</div></div><div class=\"frow\"><div class=\"flabel\">CO sources</div><div class=\"fval\">AHRI Guideline X lays out where and how to take CO readings and acceptable thresholds before assuming a cracked heat exchanger. Rule out other sources first too &mdash; a backdrafting water heater, garage car exhaust, or smoking occupants. Always carry a personal low-level CO monitor</div></div><div class=\"frow\"><div class=\"flabel\">Flame rectification</div><div class=\"fval\">Measure the DC microamp signal before deciding to clean or replace the flame rod &mdash; weak is usually under 1.5 microamps. Clean with steel wool, never sandpaper or a grinder. LP units foul flame rods faster than natural gas, and VOC-heavy intake locations foul them faster too. Dirty or rusted burners can also affect rectification and raise CO levels</div></div><div class=\"frow\"><div class=\"flabel\">Grounding</div><div class=\"fval\">Flame rectification relies on a completed DC circuit through the flame to ground. The system must be grounded from burner to cabinet to board to furnace plug &mdash; reversed polarity or poor/corroded grounding prevents a proper flame signal from reaching the board</div></div><div class=\"frow\"><div class=\"flabel\">Key tools</div><div class=\"fval\">A manometer (pressure switches and gas pressure), a good digital thermometer (temp rise across the furnace), an airflow measurement method (TrueFlow grid, or temp rise plus blower charts), and a level (checking drain pitch and installation per spec) &mdash; plus a smartphone for pulling up service manuals and diagnostic flowcharts</div></div></div><div class=\"tip\"><b>Field tip:</b> A furnace that only fails on the first cold snap of the season after sitting idle is worth a close look at pressure switch hoses and intake/exhaust piping for debris or nesting that accumulated during the off season.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/troubleshooting-90-gas-furnaces/\" target=\"_blank\">Troubleshooting 90%+ Gas Furnaces &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "furn-147",
       "title": "Flame sensing &mdash; the basics",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Proving flame is a critical part of the gas firing sequence &mdash; without it, unburned gas can dump into the heat exchanger. This card covers the flame sensing rod (flame rectification) method specifically, the most common approach on modern hot surface and intermittent spark ignition (ISI) systems.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">How it works</div><div class=\"fval\">The board applies a small voltage to the flame sensing rod. With no flame, there's voltage but no current. With flame present, ions in the flame let a small microamp DC current flow &mdash; the flame itself acts as a rectifier, converting the board's signal into a one-directional current the board reads as proof of flame. No current within a few seconds and the board shuts the gas valve and retries</div></div><div class=\"frow\"><div class=\"flabel\">Flame rods are \"dumb\" devices</div><div class=\"fval\">Unlike a thermocouple (which generates its own voltage), a flame rod is just a piece of metal with a ceramic insulator &mdash; it generates nothing on its own. Don't confuse the two</div></div><div class=\"frow\"><div class=\"flabel\">About that \"special coating\"</div><div class=\"fval\">No solid evidence that typical flame sensing rods have a special coating that rubs off with cleaning (unlike thermocouples/thermopiles, which do). Apparent coating issues are more likely grit left behind from cleaning with the wrong abrasive, like sand/emory cloth</div></div><div class=\"frow\"><div class=\"flabel\">4 ways they fail</div><div class=\"fval\">Shorted (cracked insulator), open (broken), not conducting (poor position in the flame), or coated (silica/carbon buildup)</div></div><div class=\"frow\"><div class=\"flabel\">Testing procedure</div><div class=\"fval\">(1) Confirm proper burner-to-neutral grounding, a few ohms max. (2) Confirm correct polarity, hot to hot/neutral to neutral. (3) Confirm the rod sits fully in the flame. (4) Use a quality microamp-scale meter, 0.10 resolution minimum. (5) Connect leads in series: disconnect the rod's lead, put one meter lead on the rod and the other on the disconnected board-side terminal. (6) Expect 0.5&ndash;10 microamps with flame present, commonly 2&ndash;6 depending on the furnace</div></div><div class=\"frow\"><div class=\"flabel\">If the reading is missing or low</div><div class=\"fval\">Ohm the rod tip-to-terminal to rule out an open rod, check the insulator for cracks or grounding, recheck burner ground and polarity, then consider cleaning (very fine steel wool or a mild abrasive pad, handled gently) followed by a repeat ohm check to confirm nothing was damaged. If everything checks out and it's still not reading, the board is the remaining suspect</div></div><div class=\"frow\"><div class=\"flabel\">Recurring fouling</div><div class=\"fval\">If flame rods keep fouling repeatedly, look for an environmental cause &mdash; furnaces pulling combustion air from laundry rooms or basements near cleaning chemicals foul flame rods noticeably faster</div></div></div><div class=\"tip\"><b>Field tip:</b> Test your meter regularly on this one &mdash; readings this small (millionths of an amp) leave very little margin for a meter that isn't reading accurately, and an untrustworthy meter here is a common source of misdiagnosis.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/flame-sensing-the-basics/\" target=\"_blank\">Flame Sensing &mdash; The Basics &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21",
       "quickCheck": [
        {
         "label": "Testing procedure",
         "text": "(1) Confirm proper burner-to-neutral grounding, a few ohms max. (2) Confirm correct polarity, hot to hot/neutral to neutral. (3) Confirm the rod sits fully in the flame."
        },
        {
         "label": "Testing procedure",
         "text": "(6) Expect 0.5&ndash;10 microamps with flame present, commonly 2&ndash;6 depending on the furnace"
        }
       ]
      },
      {
       "id": "furn-150",
       "title": "Transformer keeps failing: repeat-failure diagnosis &amp; VA sizing",
       "level": "sub",
       "tags": [
        "wiring",
        "low-voltage"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">A second transformer that fails within minutes is telling you something is wrong in the circuit, not that you got two bad parts. Do not install a third transformer until the cause is found.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Safety</div><div class=\"fval\">LOTO the furnace disconnect and verify de-energized with a proven meter before pulling connectors or ohming wiring. Only energize for live readings with panels arranged so line voltage cannot be touched. Follow Accutemp safety rules.</div></div><div class=\"frow\"><div class=\"flabel\">Primary-side burn</div><div class=\"fval\">Does <b>not</b> prove a supply fault. A secondary overload or short heats the whole transformer, and many have internal thermal protection in the primary that opens. Also inspect the primary spade, crimp and connector: a loose or burned terminal causes local heating. Replace heat-damaged connectors and wire, not just the transformer.</div></div><div class=\"frow\"><div class=\"flabel\">1. Primary voltage</div><div class=\"fval\">Measure across both primary terminals (not just hot to ground), under load. Must match the transformer primary rating on the label.</div></div><div class=\"frow\"><div class=\"flabel\">2. Match the part</div><div class=\"fval\">Replacement primary V, secondary V, VA, frequency and mounting must match the original / OEM spec. Read the label carefully: \"50/60\" is Hz, not VA.</div></div><div class=\"frow\"><div class=\"flabel\">3. No-load test</div><div class=\"fval\">Install the transformer with the secondary disconnected and insulated. Power up, confirm secondary output, watch for heating. Abnormal with no load = transformer, primary wiring or connection problem.</div></div><div class=\"frow\"><div class=\"flabel\">4. Ohm the field wiring</div><div class=\"fval\">Power off. Lift thermostat and outdoor/accessory wires. Ohm each conductor to C and to ground. A load should read its coil resistance; near 0 ohms = short. Check for chafe at sheet metal edges, staples, pinched under panels, rodent damage.</div></div><div class=\"frow\"><div class=\"flabel\">5. Add loads back</div><div class=\"fval\">Reconnect the board first, then one circuit at a time, powering down between changes. Clamp secondary amps on each call: heat, cool, fan, accessories. Max continuous amps = VA / secondary volts (40 VA / 24 V = 1.67 A, 75 VA / 24 V = 3.13 A). The circuit that spikes or trips is your fault.</div></div><div class=\"frow\"><div class=\"flabel\">Common culprits</div><div class=\"fval\">Shorted gas valve coil, contactor or relay coil, zone damper motors, chafed or shorted thermostat cable, mislanded wire on the board, added accessories (humidifier, UV light, zoning, powered thermostat) overloading the VA.</div></div><div class=\"frow\"><div class=\"flabel\">Fuse</div><div class=\"fval\">Keep the OEM fuse size shown on the print. Never upsize or bypass it. An intact fuse does not clear an overload, especially with loads wired ahead of it.</div></div><div class=\"frow\"><div class=\"flabel\">VA upsize</div><div class=\"fval\">OK only when primary V, secondary V and frequency match, it fits, and the equipment literature allows it. More VA = more available capacity, it does not force more current. It is <b>not</b> a fix for a short: a short will cook the bigger one too. A breaker-protected 75 VA transformer can be used as a temporary diagnostic tool while isolating the fault.</div></div><div class=\"frow\"><div class=\"flabel\">Verify</div><div class=\"fval\">After the repair, run full heat and cool cycles well past the old failure time. Check primary and secondary voltage, secondary amps, and no hot connectors. Restore all wiring and safety interlocks.</div></div></div><div class=\"tip\"><b>Field tip:</b> If a load spec is unknown, do not guess the VA budget: verify on the unit nameplate / IOM and the device data, and measure actual secondary amps on every call.</div><div class=\"reflink\">Source: <a href=\"https://www.marsdelivers.com/wps/wcm/connect/ef3d50aa-0b03-4a5c-8fb0-88efa2ab0f98/MARS+Tech-Transformer-Troubleshooting-Jack.pdf?MOD=AJPERES\" target=\"_blank\">MARS Tech: Transformer Troubleshooting Guide</a></div><div class=\"reflink\">Related: <a href=\"https://www.hvacrschool.com/careful-with-that-40va-transformer/\" target=\"_blank\">Careful With That 40VA Transformer, HVAC School</a></div>"
        }
       ],
       "updated": "2026-11-09",
       "quickCheck": [
        {
         "label": "Safety",
         "text": "LOTO the furnace disconnect and verify de-energized with a proven meter before pulling connectors or ohming wiring."
        },
        {
         "label": "1. Primary voltage",
         "text": "Measure across both primary terminals (not just hot to ground), under load."
        },
        {
         "label": "3. No-load test",
         "text": "Install the transformer with the secondary disconnected and insulated."
        }
       ]
      }
     ]
    },
    {
     "id": "eq-151",
     "title": "Walk-In Coolers &amp; Freezers",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "walk-152",
       "title": "Door won't seal: gasket, hinge &amp; frame checklist",
       "level": "sub",
       "tags": [
        "walk-in"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Use when a walk-in cooler or freezer door gaps on one side, frosts at the jamb, or will not pull tight. New gasket, sweep and latch with the gap still there usually means alignment, not parts.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Safety</div><div class=\"fval\">Support the door before loosening hinge screws: never remove all hinge screws on an unsupported door. LOTO the door heater / light circuit and verify de-energized before opening the junction or touching heater wire. Watch footing on ice in freezers. Follow Accutemp safety rules.</div></div><div class=\"frow\"><div class=\"flabel\">1. Dollar-bill test</div><div class=\"fval\">Close the door on a bill every 6 to 12\" around the whole perimeter. Drag = sealing, slides out = gap. Mark the gaps and note the side: hinge, latch, top or bottom.</div></div><div class=\"frow\"><div class=\"flabel\">2. Gasket</div><div class=\"fval\">Correct profile for that door (by manufacturer part number), fully seated in the retainer channel, corners not stretched or kinked, magnet pulls to the frame. Torn, hard or flattened = replace.</div></div><div class=\"frow\"><div class=\"flabel\">3. Gap on hinge side</div><div class=\"fval\">Tight hinges are not aligned hinges. Shim and adjust per the door maker. Kolpak adjustable hinge: close door, remove hinge covers, loosen the 4 leaf screws slightly, shim to center the door in the opening, snug the micro-adjust screws (upper clockwise, lower counter-clockwise), retighten without over-torquing. Norlake: shim under the door for 1/4\" gap at the top, then tighten hinge blade screws.</div></div><div class=\"frow\"><div class=\"flabel\">4. Gap on latch side</div><div class=\"fval\">Latch strike set too shallow or loose, or hinge sag swinging the door away. Adjust the strike so the latch pulls the door into the gasket.</div></div><div class=\"frow\"><div class=\"flabel\">5. Warped door</div><div class=\"fval\">Straightedge or string line corner to corner across the door face. Twist or bow shows as a gap. Common after ice buildup or heat damage. Twisted slab = door or door section quote, not hinge chasing.</div></div><div class=\"frow\"><div class=\"flabel\">6. Racked frame</div><div class=\"fval\">4 ft level on both jambs and the header (plumb and flat). Measure the opening diagonals: unequal = racked. Causes: settled floor, frost heave, loose panel cam-locks. Flag to the office for box/panel repair.</div></div><div class=\"frow\"><div class=\"flabel\">7. Heater wire &amp; ice</div><div class=\"fval\">Freezer doors (and many coolers with metal thresholds) have an anti-condensate heater around the opening. Feel or IR the jamb and threshold for a warm side and a cold side. Ice on the frame holds the door off the gasket. Verify the heater has power and compare amps or resistance to the door section label. Cold section = open heater wire or bad connection.</div></div><div class=\"frow\"><div class=\"flabel\">8. Sweep gasket</div><div class=\"fval\">Should lightly touch the threshold through the swing. Adjust or trim it, seal any gap between the bottom of the door gasket and the top of the sweep, and check floor tile is level with the threshold.</div></div><div class=\"frow\"><div class=\"flabel\">9. Self-closing (flag separately)</div><div class=\"fval\">Non-self-closing hinges are a separate finding, not the seal fix. Federal walk-in standard (10 CFR 431.306) requires automatic closers on walk-ins built on or after Jan 1, 2009 (doors up to 3' 9\" wide and 7' tall). Note it on the ticket and recommend self-closing hinges or a closer.</div></div></div><div class=\"tip\"><b>Field tip:</b> Real case (Nov 2026): freezer with new gasket, sweep and latch, no spring hinges, right side not compressing. Parts were new, so start with hinge shim / door twist / frame plumb checks, then heater and ice.</div><div class=\"reflink\">Manufacturer source: <a href=\"https://www.webstaurantstore.com/documents/pdf/kolpak_walk-in_installation_operation_manual.pdf\" target=\"_blank\">Kolpak Walk-In Installation &amp; Operation Manual (door, hinge and sweep adjustment)</a></div><div class=\"reflink\">Manufacturer source: <a href=\"https://norlake.com/wp-content/uploads/2024/03/132617-Walk-in-Manual.pdf\" target=\"_blank\">Norlake Walk-In Installation Manual (hinge shim, gasket replacement, door heater)</a></div><div class=\"reflink\">Regulation: <a href=\"https://www.ecfr.gov/current/title-10/chapter-II/subchapter-D/part-431/subpart-R/section-431.306\" target=\"_blank\">10 CFR 431.306 walk-in cooler / freezer standards (eCFR)</a></div>"
        }
       ],
       "updated": "2026-11-09",
       "quickCheck": [
        {
         "label": "1. Dollar-bill test",
         "text": "Close the door on a bill every 6 to 12\" around the whole perimeter."
        },
        {
         "label": "2. Gasket",
         "text": "Correct profile for that door (by manufacturer part number), fully seated in the retainer channel, corners not stretched or kinked, magnet pulls to the frame."
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "key": "checklists",
   "label": "Checklists",
   "icon": "&#9989;",
   "content": [
    {
     "id": "eq-53",
     "title": "PM Checklist by Equipment Type",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "pm-88",
       "title": "Boilers &mdash; Lochinvar KBX / Knight XL (400&ndash;1000)",
       "level": "sub",
       "tags": [
        "pm-checklist"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Transcribed directly from the Lochinvar Knight XL Service Manual (Table 2-1) and User's Information Manual. Applies to Series 100/101 (400&ndash;500) and Series 110/111 (650&ndash;1000).</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Daily (owner)</div><div class=\"fval\">Check boiler area &middot; Check pressure/temperature gauge (should not exceed 24 psi &mdash; higher may indicate expansion tank problem)</div></div><div class=\"frow\"><div class=\"flabel\">Monthly (owner)</div><div class=\"fval\">Check vent piping &middot; Check air piping &middot; Check air and vent termination screens &middot; Check relief valve &middot; Check condensate drain system &middot; Check air vents</div></div><div class=\"frow\"><div class=\"flabel\">Periodically (owner)</div><div class=\"fval\">Test low water cutoff (if installed) &middot; Reset button (low water cutoff)</div></div><div class=\"frow\"><div class=\"flabel\">Every 6 months (owner)</div><div class=\"fval\">Check boiler piping (gas and water) for leaks &middot; Operate relief valve (lift lever, confirm free flow, confirm valve reseats without weeping)</div></div><div class=\"frow\"><div class=\"flabel\">End of season (owner)</div><div class=\"fval\">Shut boiler down &mdash; unless the boiler is also used for domestic hot water, in which case it must run year-round</div></div><div class=\"frow\"><div class=\"flabel\">Every 3 years (licensed contractor)</div><div class=\"fval\">Relief valve must be re-inspected by a licensed plumbing contractor or authorized inspection agency to check for corrosion damage not detectable by simple lever-operation testing</div></div><div class=\"frow\"><div class=\"flabel\">Annual start-up (service technician) &mdash; general</div><div class=\"fval\">Address reported problems &middot; inspect interior, clean/vacuum if needed &middot; clean condensate trap and fill with fresh water &middot; check for leaks (water, gas, flue, condensate) &middot; verify flue/air lines sealed and in good condition &middot; check system water pressure/piping/expansion tank &middot; check fill water meter (usage over 5% of system volume indicates a possible leak) &middot; test boiler water, treat with approved restorer if indicated &middot; check control settings &middot; check ignition and flame sense electrodes (sand off deposits, clean, reposition) &middot; check wiring and connections &middot; perform start-up checkout per the Installation and Operation Manual</div></div><div class=\"frow\"><div class=\"flabel\">Annual start-up &mdash; verification</div><div class=\"fval\">Flame inspection (stable, uniform) &middot; flame signal at least 10 microamps at high fire &middot; clean heat exchanger if flue temp is more than 54&deg;F (30&deg;C) above return water temp &middot; test low water flow conditions</div></div><div class=\"frow\"><div class=\"flabel\">If combustion or performance indicate need</div><div class=\"fval\">Clean heat exchanger &middot; remove and clean burner using compressed air only &middot; clean the blower wheel</div></div><div class=\"frow\"><div class=\"flabel\">Maintenance kit &mdash; heat exchanger cleaning (Kit #100157628, Models 400&ndash;1000)</div><div class=\"fval\">Rear refractory cover 10.75\" dia. (100333410) &middot; rear refractory cover 7.25\" dia. (100208804) &middot; nylon 4\" wheel brush (100208309 &mdash; never substitute a metal brush) &middot; 1/4\"x12\" drill extension (100208310) &middot; 1/4\"x24\" drill extension (100208311)</div></div><div class=\"frow\"><div class=\"flabel\">Control module fuses</div><div class=\"fval\">F1 = 5A (pumps), F3 = 0.80A (24VDC power supply). Note: the manual's own wiring diagram labels F2 as 6A (blower) but the text elsewhere in the same manual states F2 is 3.15A &mdash; this is a discrepancy in Lochinvar's source document itself. Verify the actual fuse rating printed on the physical fuse before replacing.</div></div></div><div class=\"tip\"><b>Field tip:</b> The condensate trap has a ball inside that seals against flue gas escape when there's no condensate present &mdash; confirm that ball is still in place every time the trap is cleaned, not just at initial install.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div><div class=\"reflink\">Full reference (service manual with troubleshooting/parameters, user manual): <a href=\"https://assets.lochinvar.com/damroot/Original/10017/100383164_2000837544_Rev_C_KBX_Service_(68505).pdf\" target=\"_blank\">KBX Service Manual PDF</a> &middot; <a href=\"https://assets.lochinvar.com/damroot/Original/10014/100332295_2000589039_Rev_C_(KBX_User_57785).pdf\" target=\"_blank\">KBX User's Information Manual PDF</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "pm-89",
       "title": "Humidifiers &mdash; Nortec NHU Electrode Steam",
       "level": "sub",
       "tags": [
        "pm-checklist"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Transcribed directly from the Nortec NHU Installation, Operation, Maintenance and Troubleshooting Guide (Form 98-141). This unit's core maintenance item &mdash; cylinder replacement &mdash; is condition-based, not calendar-based. There is no fixed monthly/quarterly/annual schedule in the source manual for cylinder service; forcing one would misrepresent how the unit actually works.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Cylinder life (condition, not calendar)</div><div class=\"fval\">500 to 2,000 operating hours, dependent on water hardness and usage &mdash; harder water shortens cylinder life significantly</div></div><div class=\"frow\"><div class=\"flabel\">End-of-life indicator 1</div><div class=\"fval\">After a period of operation (not on initial startup), water level approaches the top of the cylinder</div></div><div class=\"frow\"><div class=\"flabel\">End-of-life indicator 2</div><div class=\"fval\">Reduced steam output despite a 100% capacity setting and/or an unsatisfied call from the humidistat</div></div><div class=\"frow\"><div class=\"flabel\">End-of-life indicator 3</div><div class=\"fval\">Red status lamp on with water level at the top of the cylinder &mdash; this is normal on startup, but if it persists after the water has had time to stabilize at a lower level, the cylinder is at end of life</div></div><div class=\"frow\"><div class=\"flabel\">Mandatory at every cylinder change</div><div class=\"fval\">Clean the drain valve &mdash; the valve port can be as dirty as the used cylinder. Not optional, do this every time regardless of drain valve symptoms</div></div><div class=\"frow\"><div class=\"flabel\">Extended shutdown</div><div class=\"fval\">Always drain the cylinder before disconnecting power for extended shutdown &mdash; undrained electrodes corrode rapidly, drastically shortening the next cylinder's life</div></div><div class=\"frow\"><div class=\"flabel\">Water supply pressure check</div><div class=\"fval\">Should read 30&ndash;80 psig, ideally 55&ndash;60 psig</div></div><div class=\"frow\"><div class=\"flabel\">Maintenance kit &mdash; cylinder & plugs</div><div class=\"fval\">Cylinder Type 202 (151-9002) &middot; Sensor plug (132-4047) &middot; Spring loaded cylinder plug, red (135-4012R) &middot; Spring loaded cylinder plug, black (135-4012B)</div></div><div class=\"frow\"><div class=\"flabel\">Maintenance kit &mdash; drain valve service</div><div class=\"fval\">Drain valve 3-piece assembly (132-6003) &middot; drain valve coil assembly (132-6002) &middot; drain valve O-ring (132-6004) &middot; drain valve plunger assembly (132-6002K1)</div></div></div><div class=\"tip\"><b>Field tip:</b> When ordering a replacement cylinder, quote the 3- or 5-digit model number on the cylinder's own label, or the unit's serial number/model/voltage from the nameplate &mdash; not a generic part number, since cylinder specifics vary by unit configuration.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div><div class=\"reflink\">Full reference (full parts list, exploded view, troubleshooting): <a href=\"https://www.nortechumidifierparts.com/amfile/file/download/file/1111/category/11663/\" target=\"_blank\">Nortec NHU Manual PDF</a></div>"
        }
       ],
       "updated": "2026-08-20"
      }
     ]
    },
    {
     "id": "eq-55",
     "title": "Service Call Documentation",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "svc-100",
       "title": "Wide, narrow, wide diagnosis",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">A process for every service call to make sure you actually accomplish five things: diagnose the fault correctly, find the \"why\" behind the failure, catch other problems before they become callbacks, communicate clearly with the customer and office, and execute the repair professionally.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">First \"wide\"</div><div class=\"fval\">Talk to the customer, read call history, understand past failures and current concerns. Look over the equipment for obvious signs before touching anything &mdash; oil stains, corrosion, rubbing wires, bloated capacitors</div></div><div class=\"frow\"><div class=\"flabel\">\"Narrow\"</div><div class=\"fval\">Find the current problem, specifically. This is what separates a real service tech from a sales tech &mdash; diagnosing the actual fault quickly and accurately, not just guessing at what might sell</div></div><div class=\"frow\"><div class=\"flabel\">Final \"wide\"</div><div class=\"fval\">Once you've found THE problem, go wide again before talking to the customer &mdash; check coils, contactors, capacitors, filters, belts, wire connections, potential rub-outs, oil stains at the accumulator</div></div><div class=\"frow\"><div class=\"flabel\">Mindset for the final wide pass</div><div class=\"fval\">Assume the system was installed poorly to begin with, and assume every prior repair was done improperly. This isn't cynicism &mdash; it's what puts you in the frame of mind to actually double-check everything instead of skimming</div></div></div><div class=\"tip\"><b>Field tip:</b> Skipping the first \"wide\" pass is how techs miss the actual root cause and fix a symptom instead &mdash; the customer's own description of the history is often the fastest route to the real problem.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/wide-narrow-wide-diagnosis/\" target=\"_blank\">Wide, Narrow, Wide Diagnosis &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      }
     ]
    },
    {
     "id": "eq-54",
     "title": "Startup & Commissioning",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "su-90",
       "title": "Pre-install planning checklist",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">The install really starts at the first site visit, days before the crew shows up. A checklist built around these four phases catches most of what causes trips back to the shop, callbacks, and rework.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Sales call / first site visit</div><div class=\"fval\">Take complete measurements (existing unit dimensions, clearances, total available space, platform size) &middot; photos of platform and plenum condition &middot; photos of condenser access and obstacles (bushes, other units, gates) &middot; note any access challenges in writing</div></div><div class=\"frow\"><div class=\"flabel\">Day/night before</div><div class=\"fval\">Review the proposal to understand full scope &middot; check common materials are stocked on the truck (wire nuts, brazing alloys, PVC primer/glue/fittings)</div></div><div class=\"frow\"><div class=\"flabel\">Before leaving the shop</div><div class=\"fval\">Coordinate heavy lifts based on job photos and available crew &middot; confirm large materials/upgrades are loaded (line sets, breakers, surge protectors) &middot; verify all equipment is in the box &middot; test that add-ons work before leaving (e.g. UV light ballasts)</div></div><div class=\"frow\"><div class=\"flabel\">On-site pre-install huddle</div><div class=\"fval\">Hold the safety meeting &middot; verify measurements from the sales call still hold &middot; verify condition/needs for electrical infrastructure, platform, and ductwork &middot; confirm access points before starting</div></div></div><div class=\"tip\"><b>Field tip:</b> When you build this out as an actual printed or laminated checklist, use these four phases as your headings &mdash; checking every box under one heading before moving to the next keeps you from skipping ahead on a rushed morning.</div><div class=\"reflink\">Full reference (Kalos team's real pain-point list and full checklist build-out): <a href=\"https://www.hvacrschool.com/how-to-eliminate-surprises-on-install-jobs/\" target=\"_blank\">How to Eliminate Surprises on Install Jobs &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      }
     ]
    }
   ]
  },
  {
   "key": "reference",
   "label": "Reference",
   "icon": "&#128202;",
   "content": [
    {
     "html": "<div class=\"disclaimer\"><b>Note:</b> Specific target values, sensor readings, combination ratios, and model cross-references are taken from manufacturer service literature for the indicated platforms. Always verify against the current service manual and exact unit model/serial before using for diagnosis or adjustment.</div>"
    },
    {
     "id": "eq-60",
     "title": "Brazing & Refrigerant Handling",
     "level": "top",
     "tags": [
      "brazing"
     ],
     "content": [
      {
       "id": "braz-73",
       "title": "Nitrogen purging",
       "level": "sub",
       "tags": [
        "brazing"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Oxygen in the air combines with copper to form surface oxide (light-to-dark brown discoloration). At brazing temperature a heavier black \"cupric oxide\" forms, which flakes off as scale that circulates through the system and can restrict flow through metering devices or reversing valve pilot capillary tubes.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Why it matters more now</div><div class=\"fval\">POE oils (used with R-410A and other HFCs) have a solvent effect and can \"scrub\" tube walls, circulating oxide and scale that mineral oil (R-22 era) didn't</div></div><div class=\"frow\"><div class=\"flabel\">Procedure</div><div class=\"fval\">Flow dry nitrogen through the tube during brazing to displace oxygen and prevent scale formation</div></div><div class=\"frow\"><div class=\"flabel\">Starting flow rate</div><div class=\"fval\">2&ndash;3 cfh or 1.5&ndash;2 psi. Some techs set pressure until a slight flow is felt at the exit point on the back of the hand</div></div><div class=\"frow\"><div class=\"flabel\">Timing</div><div class=\"fval\">Initiate flow before heating and continue until the part has cooled</div></div><div class=\"frow\"><div class=\"flabel\">Avoid excessive flow</div><div class=\"fval\">High flow rate cools the tube (reducing brazing heat efficiency) and can reduce braze alloy penetration. A small hole in an end cap lets nitrogen escape without building pressure</div></div></div><div class=\"tip\"><b>Field tip:</b> Test-braze on the bench and section the finished assembly to inspect for a clean inner-tube wall before relying on a given flow rate setting in the field.</div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "braz-74",
       "title": "Joint prep & brazing technique",
       "level": "sub",
       "tags": [
        "brazing"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Cut & clean</div><div class=\"fval\">Cut tube square (tube cutter or hacksaw with a sawing fixture), ream/deburr inside and out. Joint surfaces must be clean and free of oil/grease/oxide &mdash; stainless wire brush or emery cloth, solvent for oil/grease, then wipe away any grit before assembly</div></div><div class=\"frow\"><div class=\"flabel\">Joint clearance</div><div class=\"fval\">Hold .002\"&ndash;.006\" at brazing temperature (varies by alloy) &mdash; too loose or too tight both cause problems, this is not a \"press-fit is fine\" situation</div></div><div class=\"frow\"><div class=\"flabel\">Heating sequence</div><div class=\"fval\">Heat the tube first, working the flame alternately around tube and fitting until both reach brazing temperature, before applying filler metal. On vertical joints, heat the tube first then the fitting, keeping the flame directed toward the fitting</div></div><div class=\"frow\"><div class=\"flabel\">Applying alloy</div><div class=\"fval\">Only add filler metal once base metals are at brazing temperature. Feed into the joint, not the flame. Stop once the joint is filled &mdash; excess fillets waste material and don't improve joint quality</div></div><div class=\"frow\"><div class=\"flabel\">Flux behavior as a heat guide</div><div class=\"fval\">Flux bubbles as it heats, then goes clear and quiet around 1100&deg;F/593&deg;C &mdash; that's your visual cue the joint is close to brazing temperature</div></div><div class=\"frow\"><div class=\"flabel\">Cleanup</div><div class=\"fval\">Remove all flux residue after brazing &mdash; quench or wet-brush while still warm, emery cloth/wire brush if needed. Flux left in place is corrosive over time</div></div></div><div class=\"tip\"><b>Field tip:</b> If the outside of the joint is hot but the alloy won't flow, the inside isn't actually up to temperature yet &mdash; heat the tube first so heat conducts into the fitting, not just the fitting surface.</div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "braz-75",
       "title": "Flame adjustment",
       "level": "sub",
       "tags": [
        "brazing"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Oxy-acetylene</div><div class=\"fval\">Use a neutral-to-slightly-carburizing flame (well-defined inner cone). Avoid an oxidizing flame &mdash; it promotes oxide formation right when you're trying to prevent it</div></div><div class=\"frow\"><div class=\"flabel\">Air-acetylene</div><div class=\"fval\">Set delivery pressure 14&ndash;15 psi if the tank has a delivery gauge. Open the torch valve about 3/4 turn for sufficient gas flow &mdash; don't try to throttle the flame size with the torch handle valve, change tip size instead</div></div><div class=\"frow\"><div class=\"flabel\">Sizing the flame to the joint</div><div class=\"fval\">Air-fuel gives a wider heat pattern than oxy-acetylene, which helps larger tube diameters since heat wraps around the pipe. Oxy-acetylene gives the hottest, most focused heat zone</div></div></div><div class=\"tip\"><b>Field tip:</b> If you're constantly adjusting the torch handle valve mid-joint to control heat, you're using the wrong tip size for that connection &mdash; swap tips instead of fighting the flame.</div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "braz-76",
       "title": "Alloy & flux selection",
       "level": "sub",
       "tags": [
        "brazing"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Copper-to-copper</div><div class=\"fval\">Phos-copper alloys (Stay-Silv 5/15, Dynaflow) &mdash; self-fluxing on copper, no external flux needed for a straight copper joint</div></div><div class=\"frow\"><div class=\"flabel\">Copper-to-brass</div><div class=\"fval\">Same phos-copper alloys work, but now require Stay-Silv white brazing flux &mdash; the self-fluxing property only applies to bare copper-to-copper</div></div><div class=\"frow\"><div class=\"flabel\">Ferrous metals (steel, stainless)</div><div class=\"fval\">Never use phosphorus-bearing alloys on steel or other ferrous metals &mdash; it forms a brittle phosphide prone to cracking. Use a high-silver alloy (Safety-Silv 45/56) with white flux instead; black flux for stainless or long/localized heating cycles</div></div><div class=\"frow\"><div class=\"flabel\">Soldering (Stay-Brite) vs brazing</div><div class=\"fval\">Stay-Brite silver-bearing solder (430&ndash;535&deg;F) is a legitimate lower-temperature alternative to brazing on many joints &mdash; no oxide scale forms at that temp, so no nitrogen purge is needed. Trade-off: post-braze burst strength on a real brazed joint (1,800 PSI) is roughly half of pre-heat tube strength, while a properly soldered Stay-Brite joint keeps close to full tube strength since there's no annealing from high heat</div></div><div class=\"frow\"><div class=\"flabel\">Aluminum</div><div class=\"fval\">Requires its own alloys (Al-Braze/Alcor), not standard copper alloys. Aluminum-to-dissimilar-metal joints can be subject to galvanic corrosion &mdash; flag this on repairs</div></div></div><div class=\"tip\"><b>Field tip:</b> Getting phos-copper alloy on a steel fitting by habit is an easy mistake when you're used to copper-to-copper all day &mdash; check what you're actually joining before reaching for the rod.</div><div class=\"reflink\">Full reference (complete filler metal selection chart by metal combination, flux specs, alloy amount estimating charts): <a href=\"https://hvacrschool.com/wp-content/uploads/2016/11/GuidetoBrazingandSoldering.pdf\" target=\"_blank\">Harris Guide to Brazing and Soldering PDF</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "braz-77",
       "title": "Troubleshooting braze failures",
       "level": "sub",
       "tags": [
        "brazing"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Roughly 90% of joints that leak in service trace back to technique, not the alloy itself.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Alloy melts and fillets but won't flow into the joint</div><div class=\"fval\">Outside of the joint is hot but the inside isn't at brazing temp yet &mdash; heat the tube first so heat conducts inward</div></div><div class=\"frow\"><div class=\"flabel\">Alloy balls up instead of wetting/flowing</div><div class=\"fval\">Base metals aren't clean, or the joint was overheated and flux broke down (saturated with oxides, no longer active). Try a softer flame and/or heavier flux coating</div></div><div class=\"frow\"><div class=\"flabel\">Alloy flows away from the joint instead of into it</div><div class=\"fval\">Fitting isn't up to temperature &mdash; redirect the flame toward the fitting, not just the tube</div></div><div class=\"frow\"><div class=\"flabel\">Filler metal cracks after solidifying</div><div class=\"fval\">Dissimilar metal CTE mismatch (e.g. copper-to-steel, copper expands/contracts more), excessive joint clearance, or quenching too fast right after brazing &mdash; let it cool more before flushing flux residue</div></div><div class=\"frow\"><div class=\"flabel\">Repairing pinhole leaks</div><div class=\"fval\">On phos-copper brazed joints, Blockade solder can often repair a pinhole without re-melting the original braze. On high-silver alloy joints, Stay-Brite solder works for pinhole repair. Never braze over a joint that was previously soldered with tin/lead &mdash; the low-melting solder residue interferes with proper alloying</div></div></div><div class=\"tip\"><b>Field tip:</b> If a joint leaked in service and you're about to re-braze it exactly the same way, stop and figure out which of these five it actually was first &mdash; otherwise you're just re-making the same mistake with fresh alloy.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "braz-131",
       "title": "Vacuum: moisture vs. system leak",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">A deep vacuum decay test before charging tells you whether a system is dry and tight. Pulling a deep vacuum has always been best practice, but it's a hard requirement on systems using A2L refrigerants.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">If the decay test fails</div><div class=\"fval\">One of two things: the system still has moisture trapped (possibly under the compressor oil), or there's a small leak the initial pressure test missed &mdash; some leaks show up more readily under vacuum than under pressure</div></div><div class=\"frow\"><div class=\"flabel\">Nitrogen sweep procedure (for moisture)</div><div class=\"fval\">Reduce system pressure to 1000&ndash;2500 microns. Isolate the vacuum pump with the core tools and disconnect the hose from the low side. Break vacuum with nitrogen at the core tool's side port up to roughly atmospheric (760,000 microns). Purge nitrogen through the system at 1&ndash;3 PSIG from high side to low side, venting out the open core tool port. Do not pressurize the system &mdash; typically no more than a triple evacuation with sweep is needed</div></div><div class=\"frow\"><div class=\"flabel\">Don't leak-test under vacuum</div><div class=\"fval\">A standing pressure test is the correct way to find a leak &mdash; the evacuation process itself draws moisture into the system through any leak. If a leak shows up under vacuum, break it with dry nitrogen and re-test under pressure instead. Never open the system to atmosphere while it's under vacuum</div></div><div class=\"frow\"><div class=\"flabel\">Reading the decay curve</div><div class=\"fval\">A leak: the gauge keeps climbing toward atmospheric pressure. Moisture in an otherwise tight system: the rise levels off and stabilizes, typically between 20,000&ndash;25,000 microns at 72&ndash;80&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Watch for frozen moisture</div><div class=\"fval\">A system that levels off at 3500&ndash;4500 microns may have frozen its moisture to ice instead of releasing it &mdash; may need an external heat source applied to the system to drive the moisture out</div></div><div class=\"frow\"><div class=\"flabel\">App/graph pattern</div><div class=\"fval\">Wet systems level off in a flat plateau above the decay threshold. Leaky systems trend as a straight line climbing well past the target with no leveling off</div></div></div><div class=\"tip\"><b>Field tip:</b> A vacuum reading that keeps climbing in a straight line toward atmospheric is a leak, not moisture &mdash; stop chasing it with more evacuation cycles and go find the leak under nitrogen pressure instead.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/vacuum-moisture-vs-system-leak/\" target=\"_blank\">Vacuum: Moisture vs. System Leak &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "braz-136",
       "title": "Understanding P-traps in refrigerant lines",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">P/U traps in refrigerant lines exist for 3 reasons: assisting oil return to the compressor, preventing oil accumulation in the evaporator, and preventing liquid refrigerant or oil from reaching the compressor during operation or the off cycle.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Why oil needs help on a riser</div><div class=\"fval\">Oil mixed with refrigerant fights gravity going up a vertical riser and tends to fall back down. A trap at the bottom of the riser catches it before it can drain into the compressor</div></div><div class=\"frow\"><div class=\"flabel\">Traps along a tall riser</div><div class=\"fval\">General guideline: an oil trap every 10&ndash;15 feet of riser height, since the refrigerant-oil mixture gradually loses velocity as it climbs. Always confirm against manufacturer guidelines</div></div><div class=\"frow\"><div class=\"flabel\">Sizing a P-trap</div><div class=\"fval\">Never size a trap larger than 4&times; the refrigerant line's diameter, measured outside-to-outside</div></div><div class=\"frow\"><div class=\"flabel\">When a suction P-trap is required</div><div class=\"fval\">Whenever the compressor sits above the evaporator, or when line length exceeds the manufacturer's specification</div></div><div class=\"frow\"><div class=\"flabel\">How the suction trap works across the cycle</div><div class=\"fval\">Running: it acts as a turbulator, helping lift oil droplets up the riser. Off: it catches oil clinging to the pipe walls before it drains back into the compressor, holding it until restart when higher suction pressure pulls it back in</div></div><div class=\"frow\"><div class=\"flabel\">Discharge line oil traps</div><div class=\"fval\">Installed in high discharge risers to stop oil draining back into the compressor head during the off cycle. Oil pooling in the head creates a damaging pressure spike at restart &mdash; can damage valves, gaskets, the scroll set, connecting rods, or the crankshaft. Common practice: reduce the riser by one pipe size to maintain proper velocity, or use a dual-riser method for varying capacity</div></div><div class=\"frow\"><div class=\"flabel\">Inverted traps</div><div class=\"fval\">Required whenever a suction header sits above the evaporator, to stop oil migrating back into the evaporator when the condenser is higher than the evaporator during the off cycle</div></div></div><div class=\"tip\"><b>Field tip:</b> A compressor above the evaporator, or a line set longer than spec, is your cue to double-check for a required suction P-trap &mdash; missing one is a slow, quiet way to starve a compressor of oil over time.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/understanding-p-traps-in-refrigerant-lines/\" target=\"_blank\">Understanding \"P\" Traps in Refrigerant Lines &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "braz-142",
       "title": "Refrigerant oil basics",
       "level": "sub",
       "tags": [
        "compressor"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">The compressor needs oil for lubrication, but keeping 100% of it in the compressor is unrealistic &mdash; oil constantly circulates through the system and has to return.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Flooding vs. flooded start</div><div class=\"fval\">Flooding: liquid refrigerant enters a running compressor because superheat is allowed to stay near zero, diluting oil and causing rapid, potentially catastrophic wear. Flooded start: liquid refrigerant collects in the compressor/suction line/evaporator during the off cycle and slugs the compressor on startup</div></div><div class=\"frow\"><div class=\"flabel\">Preventing both</div><div class=\"fval\">Set superheat properly, and consider crankcase heaters, non-bleed expansion valves, or pump-down on the off cycle to keep liquid out of the compressor</div></div><div class=\"frow\"><div class=\"flabel\">Oil breakdown from heat</div><div class=\"fval\">Discharge line temp shouldn't exceed 225&deg;F (roughly 300&deg;F at the discharge valves on a reciprocating compressor) or the oil starts to \"carbonize.\" High discharge temp is usually driven by low suction pressure, low superheat, and high compression ratio, alone or in combination</div></div><div class=\"frow\"><div class=\"flabel\">3 factors in oil return</div><div class=\"fval\">Oil/refrigerant miscibility (how well they mix and travel together), oil viscosity (thickness), and refrigerant velocity through the circuit. Low velocity is mainly a problem in evaporator coils and suction lines when suction pressure runs lower than design</div></div><div class=\"frow\"><div class=\"flabel\">Oil quantity</div><div class=\"fval\">Longer line sets and larger evaporators need more total oil in circulation &mdash; don't assume the factory charge covers a long-line install; check the manufacturer's long-line guidelines. Too much oil is also a problem: installing a new compressor with a full oil charge on a system that already had an oil-return issue just adds more oil to a bad situation and can cause a repeat failure. Diagnose WHY the old compressor failed before assuming the new one just needs a full charge</div></div><div class=\"frow\"><div class=\"flabel\">Miscibility</div><div class=\"fval\">The oil's ability to mix with and move with the refrigerant</div></div><div class=\"frow\"><div class=\"flabel\">Viscosity</div><div class=\"fval\">A measure of the oil's flow resistance/thickness. Measured in Saybolt Universal Seconds (SUS, older) or ISO viscosity grade (ISO VG, newer) &mdash; higher number means thicker oil in both systems, but don't mix the two scales up</div></div><div class=\"frow\"><div class=\"flabel\">Hygroscopic & hydrolysis</div><div class=\"fval\">Hygroscopic oils attract and hold moisture, so keep them away from air/moisture during storage and service. Hydrolysis is decomposition from reacting with water &mdash; POE oil breaks down into acids and alcohol this way, and once decomposed it cannot be fixed with driers or evacuation</div></div><div class=\"frow\"><div class=\"flabel\">Oil types</div><div class=\"fval\">Mineral: legacy oil for CFC/HCFC systems, not miscible with modern HFC/HFO refrigerants. Alkylbenzene (AB): synthetic, CFC/HCFC-compatible, better low-temp miscibility than mineral. POE: the standard oil for HFC/HFO systems today, also works with CFC/HCFC. PVE: common in ductless/VRF, more hygroscopic than POE but doesn't hydrolyze (can be re-dried, unlike POE). PAG: mainly automotive A/C, most hygroscopic of the group but also doesn't hydrolyze</div></div><div class=\"frow\"><div class=\"flabel\">Piping for oil return</div><div class=\"fval\">Trapping strategy matters most with mineral and AB oils. POE and PVE are far more miscible, making trapping less critical in high/medium-temp applications, but manufacturer piping guidelines still apply &mdash; especially in retrofits where residual mineral/AB oil may still be present. Pitching long horizontal runs back toward the compressor is good practice regardless of oil or refrigerant</div></div><div class=\"frow\"><div class=\"flabel\">Mixing oils</div><div class=\"fval\">The old \"POE + mineral = sludge\" rumor has been debunked &mdash; small amounts of mineral oil left behind during a retrofit have proven largely inconsequential, though moving fully to POE/PVE when retrofitting to HFC is still the better practice</div></div></div><div class=\"tip\"><b>Field tip:</b> Before topping off oil on a compressor that \"lost\" its charge, figure out whether the oil actually left the system or the old compressor was simply removed with its oil intact &mdash; oil shouldn't be added if it was never lost from the system in the first place.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/refrigerant-oil-basics/\" target=\"_blank\">Refrigerant Oil Basics &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-143",
     "title": "Coil & Chemical Cleaning",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "clean-144",
       "title": "Coil cleaners: which cleaner for which application",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Coil cleaners span a wide range of acidity, alkalinity, colors, and strengths. Picking the right one for the job (and handling it safely) matters as much as the cleaning itself.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Blue cleaner</div><div class=\"fval\">High-alkaline degreaser and coil brightener, mainly for outdoor coils with heavy grease buildup (e.g. restaurant condensers). Very slippery on skin &mdash; wear gloves and eye protection</div></div><div class=\"frow\"><div class=\"flabel\">Brown cleaner</div><div class=\"fval\">Often labeled \"Extra Heavy Duty\" &mdash; more concentrated alkaline than blue, for the worst grease/grime. Highly corrosive if not rinsed properly, and can still damage older coil fins even with brief contact</div></div><div class=\"frow\"><div class=\"flabel\">Coated coils</div><div class=\"fval\">Never use high-alkaline or acidic cleaners on a coated coil &mdash; they strip the coating away. A high concentration ratio on any cleaner can also strip coating and damage paint/wire insulation, so always follow the label's mixing ratio</div></div><div class=\"frow\"><div class=\"flabel\">Green cleaner</div><div class=\"fval\">Typically for the evaporator/indoor coil. At the right dilution it's often self-rinsing (condensate rinses it away, safe for the drain pan/line). Still alkaline &mdash; can damage skin or materials left in contact too long</div></div><div class=\"frow\"><div class=\"flabel\">Pink cleaner</div><div class=\"fval\">Acidic rather than alkaline, reddish-pink or neon pink. Some dark purple acid cleaners are used for cooling tower descaling and contain a dye that changes color when it reacts with scale. NEVER use hydrofluoric (HF) cleaner on coils &mdash; it dissolves fins (and skin) quickly</div></div><div class=\"frow\"><div class=\"flabel\">Why foaming matters</div><div class=\"fval\">Most cleaners do their best work in the foam, which pushes out dirt and dislodges grease. Most need 7&ndash;10 minutes of dwell time before rinsing &mdash; long enough to work, short enough to avoid damaging the coil</div></div><div class=\"frow\"><div class=\"flabel\">Coil gun vs. pump sprayer</div><div class=\"fval\">A dedicated coil gun achieves real foaming; a pump sprayer limits the cleaner's effectiveness by not allowing it to foam well. Mixing ratios vary widely by brand and gun (e.g. one common range is 10:1&ndash;3:1, another is 80:1&ndash;5:1) &mdash; match the gun to the cleaner's specified ratio range</div></div><div class=\"frow\"><div class=\"flabel\">Detergent cleaners</div><div class=\"fval\">The mildest option, best for lightly soiled coils. Some coil coatings require detergent-only cleaning to avoid being scrubbed away</div></div><div class=\"frow\"><div class=\"flabel\">Aerosol cleaners</div><div class=\"fval\">High foaming action, useful where coils are hard to reach. On accessible but heavily compacted coils, a spray-can pass first can help break up dirt before following with a coil gun</div></div><div class=\"frow\"><div class=\"flabel\">Split coils</div><div class=\"fval\">Remove hail guards and the unit top so the coil layers can be split apart and cleaned between. Rinse and spray from inside the unit outward so loosened dirt isn't pushed further into the coil</div></div><div class=\"frow\"><div class=\"flabel\">Rubber roof membranes</div><div class=\"fval\">Pay close attention to mixing ratios and always rinse thoroughly &mdash; many coil cleaners can deteriorate roof membrane and cause leaks down the road</div></div></div><div class=\"tip\"><b>Field tip:</b> Even if you have a favorite \"go-to\" heavy duty cleaner, it's worth asking whether a maintenance visit actually needs it &mdash; the mildest cleaner that gets the job done is usually the better call for the coil's long-term condition.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/coil-cleaners-a-guide-to-which-cleaners-to-use-in-various-applications/\" target=\"_blank\">Coil Cleaners: A Guide &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-87",
     "title": "Compression Ratio",
     "level": "top",
     "tags": [
      "compressor"
     ],
     "content": [
      {
       "html": "<p class=\"ptext\">This is what \"low compression ratio is the tell\" (see Compressor mechanical & non-condensables under RTU/Package Units) is referring to &mdash; a concept worth understanding on its own, not just as a phrase. Applies to any compressor, not just RTUs.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Formula</div><div class=\"fval\">Compression ratio = absolute discharge pressure &divide; absolute suction pressure. Absolute = gauge pressure + atmospheric (14.7 psi at sea level)</div></div><div class=\"frow\"><div class=\"flabel\">Worked example (R-22)</div><div class=\"fval\">240 psig discharge + 14.7 = 254.7 psia. 75 psig suction + 14.7 = 89.7 psia. 254.7 &divide; 89.7 = 2.84:1</div></div><div class=\"frow\"><div class=\"flabel\">Typical AC range</div><div class=\"fval\">2.3:1 to 3.5:1 &mdash; modern high-efficiency equipment trends toward the low end of this range</div></div><div class=\"frow\"><div class=\"flabel\">Medium-temp refrigeration (cooler)</div><div class=\"fval\">3.0:1 to 5.5:1 typical (R-404A example)</div></div><div class=\"frow\"><div class=\"flabel\">Low-temp freezer (0&deg;F to -10&deg;F)</div><div class=\"fval\">6.0:1 to 13.0:1 typical (R-404A example)</div></div><div class=\"frow\"><div class=\"flabel\">Ratio higher than designed</div><div class=\"fval\">Compressor overheating, oil breakdown, high power consumption, low capacity</div></div><div class=\"frow\"><div class=\"flabel\">Ratio lower than designed</div><div class=\"fval\">Possible indication of mechanical failure and poor compression &mdash; this is the low-CR compressor valve wear signature</div></div><div class=\"frow\"><div class=\"flabel\">Reducing high compression ratio</div><div class=\"fval\">Keep setpoints at or above design temp for the equipment (don't run a -10&deg;F freezer at -20&deg;F), keep condenser coils clean, maintain proper evaporator airflow, install condensers in shaded/well-ventilated areas</div></div></div><div class=\"tip\"><b>Field tip:</b> A customer setting a thermostat unusually low, or a freezer working hard on a hot day, will show a high compression ratio that isn't a fault by itself &mdash; know the expected range for the application before treating it as a problem.</div><div class=\"reflink\">Full reference (pressure-enthalpy diagram walkthrough): <a href=\"http://www.hvacrschool.com/compression-ratio-matters/\" target=\"_blank\">Why Compression Ratio Matters &mdash; HVAC School</a></div>"
      }
     ],
     "updated": "2026-08-20"
    },
    {
     "id": "eq-86",
     "title": "Diagnostic Quick Sheet: TD, Formulas & Gas Pressure",
     "level": "top",
     "tags": [],
     "content": [
      {
       "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Target evaporator TD by SEER (AC)</div><div class=\"fval\">6&ndash;9 SEER = 30&deg;F &middot; 10&ndash;12 SEER = 25&deg;F &middot; 13&ndash;15 SEER = 20&deg;F &middot; 16+ SEER = 15&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Estimated evaporator TD (other)</div><div class=\"fval\">AC at 400 CFM/ton &asymp; 35&deg;F &middot; Refrigeration walk-in &asymp; 10&deg;F &middot; Refrigeration reach-in &asymp; 20&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Gas appliance outlet pressure</div><div class=\"fval\">Natural gas 3.5\" W.C. &middot; LP 11\" W.C.</div></div><div class=\"frow\"><div class=\"flabel\">CTOA (condensing temp over ambient)</div><div class=\"fval\">Estimated condensing temp minus outdoor ambient temp &mdash; a quick sanity check on head pressure readings relative to conditions</div></div><div class=\"frow\"><div class=\"flabel\">CFM (airflow)</div><div class=\"fval\">400 CFM per ton of cooling (nominal, rule of thumb) &mdash; or calculate from BTU sensible output and measured &Delta;T</div></div><div class=\"frow\"><div class=\"flabel\">BTU sensible output</div><div class=\"fval\">CFM &times; &Delta;T &times; 1.08</div></div><div class=\"frow\"><div class=\"flabel\">Total heat (using enthalpy)</div><div class=\"fval\">(H1 &minus; H2) &times; 4.5 &times; CFM, where H1 = return air wet bulb (converted to enthalpy) and H2 = supply air wet bulb (converted to enthalpy)</div></div><div class=\"frow\"><div class=\"flabel\">Electric heat</div><div class=\"fval\">Volts &times; Amps &times; 3.413 = BTU output. 1 Watt = 3.413 BTU, 1 kW = 3,413 BTU, 746 Watts = 1 HP</div></div><div class=\"frow\"><div class=\"flabel\">Furnace input (natural/LP)</div><div class=\"fval\">Input (cu.ft.) &times; BTU/cu.ft. &times; measured efficiency, divided by &Delta;T &times; 1.08 for output-side cross-check</div></div><div class=\"frow\"><div class=\"flabel\">Clocking a gas meter</div><div class=\"fval\">3600 &times; smallest dial size &divide; number of seconds for one revolution = input BTU/hr</div></div><div class=\"frow\"><div class=\"flabel\">Testing capacitors under load</div><div class=\"fval\">&micro;F = (2652 &times; amps of the start winding) &divide; volts across the capacitor &mdash; same formula as the Capacitor & contactor testing card under Wiring & Electrical Reference</div></div></div><div class=\"tip\"><b>Field tip:</b> This chart's companion fault-matrix (TXV vs fixed metering, by symptom) is included in the linked PDF as a visual chart &mdash; worth a look alongside the TXV metering and Fixed orifice/piston fault matrix cards under RTU/Package Units, which cover the most common fault conditions in text form.</div><div class=\"reflink\">Full reference (complete diagnostic quick sheet chart, including wet-bulb enthalpy table): <a href=\"https://www.hvacrschool.com/wp-content/uploads/2020/05/Cheat_Sheet_chart.pdf\" target=\"_blank\">HVAC Air/Refrigerant Diagnostic Quick Sheet &mdash; HVAC School</a></div>"
      }
     ],
     "updated": "2026-08-20"
    },
    {
     "id": "eq-61",
     "title": "Filter Drier Sizing",
     "level": "top",
     "tags": [
      "drier"
     ],
     "content": [
      {
       "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">0.75–1.5 tons</div><div class=\"fval\">1/4–5/16\" OD line, min. 8 cu-in (small coils/cases)</div></div><div class=\"frow\"><div class=\"flabel\">1.5–2.5 tons</div><div class=\"fval\">3/8\" OD line, 8–16 cu-in (use 16 for dirty systems)</div></div><div class=\"frow\"><div class=\"flabel\">2–5 tons</div><div class=\"fval\">3/8–1/2\" OD line, 16 cu-in (common residential size)</div></div><div class=\"frow\"><div class=\"flabel\">5–7.5 tons</div><div class=\"fval\">1/2–5/8\" OD line, 16–30 cu-in (30 for long lines)</div></div><div class=\"frow\"><div class=\"flabel\">7.5–10 tons</div><div class=\"fval\">5/8–7/8\" OD line, 30 cu-in standard</div></div><div class=\"frow\"><div class=\"flabel\">10–15 tons</div><div class=\"fval\">5/8–7/8\" OD line, 30–45 cu-in (larger on long piping)</div></div><div class=\"frow\"><div class=\"flabel\">15–20 tons</div><div class=\"fval\">7/8–1 1/8\" OD line, 45+ cu-in, check pressure drop carefully</div></div><div class=\"frow\"><div class=\"flabel\">Heat pump / bi-directional</div><div class=\"fval\">Use a bi-flow (heat pump rated) drier when refrigerant flow reverses — check valves allow filtration in both modes</div></div><div class=\"frow\"><div class=\"flabel\">Compressor burnout</div><div class=\"fval\">Install a bi-directional HH drier, or two standard HH driers configured around the reversing valve per OEM — replace after cleanup</div></div></div><div class=\"tip\"><b>Field tip:</b> Oversize when unsure, as long as pressure drop remains acceptable. Never install a single-direction drier on a heat pump liquid line unless it's in a position that never sees flow reversal. Always verify OEM requirements.</div><div class=\"reflink\">Full manufacturer chart (Sporlan/Catch-All model numbers by tonnage, refrigerant, line size): <a href=\"refs/sporlan-catch-all-drier-sizing.pdf\" target=\"_blank\">Sporlan drier sizing PDF</a></div>"
      }
     ],
     "updated": "2026-08-13"
    },
    {
     "id": "eq-137",
     "title": "HVAC Fundamentals &mdash; Airflow & Static Pressure",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "fund-36",
       "title": "Airflow & CFM basics",
       "level": "sub",
       "tags": [
        "airflow"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Typical target</div><div class=\"fval\">350–450 CFM per ton (400 CFM/ton ideal). Example: 3-ton system → ~1,200 CFM target</div></div><div class=\"frow\"><div class=\"flabel\">Temperature split (ΔT)</div><div class=\"fval\">Return − supply, typically 18–22°F for cooling</div></div><div class=\"frow\"><div class=\"flabel\">Heating airflow check</div><div class=\"fval\">CFM = BTU output ÷ (1.08 × ΔT). Example: 80,000 BTU / (1.08 × 55°F) ≈ 1,360 CFM</div></div><div class=\"frow\"><div class=\"flabel\">Low airflow signs</div><div class=\"fval\">Frozen coil, high head/low suction, hot spots, long run times</div></div><div class=\"frow\"><div class=\"flabel\">High airflow signs</div><div class=\"fval\">Low temperature split, noisy ducts, poor humidity control</div></div></div><div class=\"tip\"><b>Field tip:</b> Verify airflow before charging or adjusting refrigerant. Below 350 CFM/ton, fix airflow first — refrigerant readings will be misleading.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "fund-105",
       "title": "Air changes per hour (ACH) confusion",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">ACH describes how many times a room's total air volume is completely replaced per hour &mdash; a ventilation rate, not a heat gain/loss calculation. Don't confuse the two.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Formula</div><div class=\"fval\">CFM &times; 60 minutes &divide; room volume (cubic feet) = ACH. A 10'x10'x10' room (1,000 cu ft) with 100 CFM balanced supply/return = 6,000 CFH &divide; 1,000 = 6 ACH</div></div><div class=\"frow\"><div class=\"flabel\">What it is NOT</div><div class=\"fval\">Not the heat gain/loss of the space &mdash; that's a separate calculation. ACH is generally used as a design guideline/reference, not the actual basis for sizing airflow</div></div><div class=\"frow\"><div class=\"flabel\">Don't confuse with outdoor air requirements</div><div class=\"fval\">Outdoor air ventilation requirements are a related but different consideration, governed by ASHRAE 62.1 and 62.2</div></div><div class=\"frow\"><div class=\"flabel\">ACH50</div><div class=\"fval\">Used with a blower door to describe whole-structure \"tightness\" &mdash; the leak rate measured when the space is pulled to -50 pascals. Referenced in many codes as a tightness standard</div></div><div class=\"frow\"><div class=\"flabel\">Correct sizing order</div><div class=\"fval\">Size room/zone airflow to heat gain/loss first (including outdoor air requirements), then let ventilation requirements dictate whether additional mechanical ventilation or fan-on time is needed &mdash; don't just hit an ACH number and assume the space is properly conditioned</div></div></div><div class=\"tip\"><b>Field tip:</b> If a customer or design calls out an ACH number, confirm whether they mean whole-structure tightness (ACH50) or per-room ventilation rate &mdash; the term gets used loosely and means very different things in each context.</div><div class=\"reflink\">Full reference (ACH vs ACH50 vs CFM50 comparison): <a href=\"https://www.hvacrschool.com/air-changes-confusion/\" target=\"_blank\">Air Changes Confusion &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "fund-107",
       "title": "Inches of water column (\"WC)",
       "level": "sub",
       "tags": [
        "airflow"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Used to measure low pressures &mdash; under 1 PSI &mdash; since 1 PSI equals 27.71\" WC. Originates from a literal water manometer: 1\" WC is the force needed to raise a column of water 1 inch.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Gas pressure</div><div class=\"fval\">Single-stage appliances commonly set to 3.5\" WC natural gas, 11\" WC propane &mdash; always confirm against manufacturer specs, combustion analysis, and meter clocking, this varies by unit</div></div><div class=\"frow\"><div class=\"flabel\">Calibration requirement</div><div class=\"fval\">Manometers and Magnehelic gauges read relative to atmospheric pressure, not absolute &mdash; must be recalibrated/zeroed before each use to account for elevation and barometric pressure changes</div></div><div class=\"frow\"><div class=\"flabel\">Altitude consideration</div><div class=\"fval\">Above 2,000 ft elevation, follow manufacturer guidance on gas valve adjustment and possible orifice size changes &mdash; lower atmospheric pressure affects gas delivery</div></div><div class=\"frow\"><div class=\"flabel\">Static pressure</div><div class=\"fval\">Pressure exerted in all directions in a contained space &mdash; not a directional force. Measure negative return-side pressure (before the blower, after the filter when possible) and positive supply-side pressure (after the blower), then combine for total external static</div></div><div class=\"frow\"><div class=\"flabel\">Worked example</div><div class=\"fval\">Return static -0.3\" WC + supply static +0.2\" WC = 0.5\" WC total external static</div></div><div class=\"frow\"><div class=\"flabel\">Two-port gauges</div><div class=\"fval\">Most manometers and all Magnehelics have two ports to read differential pressure in one measurement &mdash; also useful for testing furnace air pressure switch make/break points</div></div></div><div class=\"tip\"><b>Field tip:</b> If your manometer reading looks off, check calibration/zero before questioning the system &mdash; especially after a change in elevation between jobs or a big weather swing.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/inches-water-column/\" target=\"_blank\">Inches of Water Column &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "fund-130",
       "title": "Static pressure, manometers & Magnehelics",
       "level": "sub",
       "tags": [
        "airflow"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Companion to the Inches of Water Column card elsewhere in this tab &mdash; this one covers the tools and technique for actually taking a static pressure reading.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">What static pressure is</div><div class=\"fval\">Force exerted in all directions within a contained fluid (the air) &mdash; not the directional force of moving air, which is velocity pressure. Measured in inches of water column, the pressure needed to displace one inch of water in a water manometer</div></div><div class=\"frow\"><div class=\"flabel\">Magnehelic</div><div class=\"fval\">A brand name for a Dwyer analog differential pressure gauge in various scales. Many techs now use a digital differential manometer instead (e.g. Fieldpiece SDMN5), making a separate Magnehelic largely unnecessary</div></div><div class=\"frow\"><div class=\"flabel\">Setup</div><div class=\"fval\">Zero the tool to room pressure first (level a Magnehelic before zeroing). Negative probe goes in the return side after the filter but before the blower, kept away from the blower itself. Positive probe goes in the supply duct. Insert probes straight and square</div></div><div class=\"frow\"><div class=\"flabel\">Static tip vs pitot tube</div><div class=\"fval\">A static pressure tip (pointed opposite the airflow direction) prevents velocity pressure/air currents from skewing the reading. A pitot tube measures velocity or total pressure (velocity + static), not static alone, and looks different &mdash; open end, two connection points. Don't confuse the two</div></div><div class=\"frow\"><div class=\"flabel\">Target total external static (TESP)</div><div class=\"fval\">TESP = return + supply. Generally 0.5\" or less is the target on residential/light commercial systems; design goal is 0.4\"&ndash;0.6\" total. 0.8\"+ starts causing trouble on most newer residential systems, though motor design varies by equipment</div></div><div class=\"frow\"><div class=\"flabel\">Isolating high static</div><div class=\"fval\">Read return and supply separately (move the probe/hose between them) to find which side is driving the problem</div></div></div><div class=\"tip\"><b>Field tip:</b> If total static is high, don't guess which side is the culprit &mdash; read return and supply separately. It takes seconds and tells you exactly where to focus.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/static-pressure-manometers-and-magnehelics/\" target=\"_blank\">Static Pressure, Manometers, and Magnehelics &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "fund-138",
       "title": "Air filter static pressure drop",
       "level": "sub",
       "tags": [
        "airflow"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">A cheap-looking filter can quietly eat up more than half a system's design static pressure budget &mdash; airflow (pressure drop) deserves as much attention as filtration (MERV rating) when picking a filter.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Some filters print their own pressure drop</div><div class=\"fval\">Higher-quality filters often print their static pressure drop at a given CFM right on the frame &mdash; check it before assuming any filter that physically fits is a fine choice</div></div><div class=\"frow\"><div class=\"flabel\">Real-world example</div><div class=\"fval\">A common MERV 11 hardware-store filter added 0.26\" w.c. of static on a 2-ton system running ~700 CFM (350 CFM/ton) &mdash; on a system rated for 0.5\" w.c. total external static, that's over half the entire budget from the filter alone, before ductwork, grilles, registers, dampers, or a coil are even factored in</div></div><div class=\"frow\"><div class=\"flabel\">PSC blower impact</div><div class=\"fval\">Extra static from a restrictive filter shows up as lower airflow, poor system performance, and poor air distribution &mdash; a PSC motor can't compensate for the added resistance</div></div><div class=\"frow\"><div class=\"flabel\">ECM blower impact</div><div class=\"fval\">An ECM tries to hold airflow constant against added static, so the extra resistance instead shows up as higher power draw, plus condensate drainage issues and difficulty maintaining the trap</div></div><div class=\"frow\"><div class=\"flabel\">Why this matters more on older/PSC systems</div><div class=\"fval\">Older systems with PSC motors and furnaces with coils are the least tolerant of extra filter static &mdash; some systems can absorb the cost, many can't</div></div><div class=\"frow\"><div class=\"flabel\">Design implication</div><div class=\"fval\">Larger filter cabinets with lower-pressure-drop filters, or oversized filter/return grilles, are often the right call when a client wants a higher-MERV filter without sacrificing airflow</div></div></div><div class=\"tip\"><b>Field tip:</b> Just because a filter physically fits the slot doesn't mean it's the right filter for that system &mdash; check the pressure drop rating against the system's static budget before recommending an upgrade to a higher MERV.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/air-filter-static-pressure-drop/\" target=\"_blank\">Air Filter Static Pressure Drop &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "fund-145",
       "title": "Use static pressure responsibly",
       "level": "sub",
       "tags": [
        "airflow"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Static pressure is often treated as an all-knowing test, but like any diagnostic it has real limitations that get overlooked if we don't understand what the number is actually telling us.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">What it's really measuring</div><div class=\"fval\">Resistance to airflow at the measurement point, based on the volume of air flowing through the duct at that moment. Change the airflow volume and the static pressure reading changes too &mdash; the relationship is calculable via Fan Law 2</div></div><div class=\"frow\"><div class=\"flabel\">The RH analogy</div><div class=\"fval\">Static pressure without an airflow reading is like relative humidity without a dry-bulb reading &mdash; it tells you how \"full\" the resistance is, but not the actual volume, unless it's referenced against an airflow measurement</div></div><div class=\"frow\"><div class=\"flabel\">The blood pressure comparison</div><div class=\"fval\">A common but imperfect analogy. Just like \"normal\" blood pressure varies person to person, \"normal\" static pressure varies system to system &mdash; establish a baseline (static + airflow together) the first time you test a given system</div></div><div class=\"frow\"><div class=\"flabel\">A common mistake</div><div class=\"fval\">Assuming static above the equipment's max ESP automatically means low airflow. Not always true &mdash; elevated static with airflow still at design level increases electrical usage and shortens blower motor life, but isn't necessarily degrading equipment performance. Communicating that distinction accurately to a customer matters</div></div><div class=\"frow\"><div class=\"flabel\">Recommended use &mdash; existing systems</div><div class=\"fval\">Check ESP at highest blower speed, compare to max equipment static, and use that as a conversation starter with the customer before further diagnostics (airflow volume, source of high static) &mdash; only after approval to proceed</div></div><div class=\"frow\"><div class=\"flabel\">Recommended use &mdash; new equipment</div><div class=\"fval\">On new installs or retro-commissioning, measure both static and airflow, then leave a permanent record near the test points for future reference</div></div></div><div class=\"tip\"><b>Field tip:</b> High static pressure alone isn't proof of a performance problem &mdash; pair it with an actual airflow reading before making a recommendation, especially anything that would cost the customer money.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/use-static-pressure-responsibly/\" target=\"_blank\">Use Static Pressure Responsibly &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "fund-148",
       "title": "Total external static pressure (TESP): a basic review",
       "level": "sub",
       "tags": [
        "airflow"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">TESP is the \"balloon\" pressure inside the ductwork &mdash; distinct from velocity pressure, which is the \"speed\" of the airflow itself, sampled by pointing a tube directly into the airstream.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">What design TESP covers</div><div class=\"fval\">Only the pressure drop across that specific appliance. For fan coil air handlers that means the coil and blower &mdash; test tips go between filter and cabinet (return side) and between cabinet and supply ductwork (supply side)</div></div><div class=\"frow\"><div class=\"flabel\">Heater kit accessories</div><div class=\"fval\">Many manufacturer fan tables don't include a heat kit's pressure drop in the published design TESP. If the notes confirm it's not included, just add the kit's separately published pressure drop rather than trying to drill a port between the blower and the heat strips</div></div><div class=\"frow\"><div class=\"flabel\">Furnace TESP</div><div class=\"fval\">Doesn't include a cased cooling coil, which is a separate accessory with its own pressure drop. Measure between filter and blower, and between heat exchanger and cased coil. Installing the cased coil with a 3&ndash;4\" sheet metal spacer lets a port be drilled without risking the heat exchanger</div></div><div class=\"frow\"><div class=\"flabel\">Before drilling</div><div class=\"fval\">Verify system cleanliness first &mdash; filter, both sides of the coil, and the blower wheel</div></div><div class=\"frow\"><div class=\"flabel\">Where to drill</div><div class=\"fval\">Pick sections with laminar (smooth, unobstructed) flow. Never drill into internal components (coils, heat exchangers, heat strips, drain pans). Never puncture flex duct &mdash; fix the duct transition first if flex or a square-to-round fitting is the only option at the appliance</div></div><div class=\"frow\"><div class=\"flabel\">Setup</div><div class=\"fval\">Zero the manometer with the tips attached BEFORE inserting them into the ductwork. Confirm which mode (heat/cool) the fan table calls for, and match wet/dry coil and filter in/out conditions to what the table assumes</div></div><div class=\"frow\"><div class=\"flabel\">Tip orientation</div><div class=\"fval\">Doesn't matter whether the tip faces upstream or downstream, as long as the tip stays parallel to airflow and the side sample holes stay perpendicular to it (the front of the tip is capped). Keep the tip centered in the duct, away from corners, to minimize turbulence</div></div><div class=\"frow\"><div class=\"flabel\">Reading it</div><div class=\"fval\">TESP = positive (supply) reading minus negative (return) reading. Match each tip to the correct manometer port &mdash; dual-port manometers have a labeled return (negative) and supply (positive) port</div></div><div class=\"frow\"><div class=\"flabel\">Interpreting high readings</div><div class=\"fval\">High return static (typically 0.4\" w.c.+) often points to dirty filters or undersized ductwork, and can cause poor condensate drainage or even sling condensate through the cabinet at extreme levels. High supply static often points to undersized or restricted ductwork</div></div></div><div class=\"tip\"><b>Field tip:</b> Beyond the overall TESP number, a manometer can measure pressure drop across individual components (filter, coil, duct transitions) to pinpoint exactly where a high-static problem is actually coming from.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/total-external-static-pressure-tesp-a-basic-review/\" target=\"_blank\">Total External Static Pressure (TESP): A Basic Review &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-109",
     "title": "HVAC Fundamentals &mdash; Refrigerant Circuit & Psychrometric Concepts",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "fund-41",
       "title": "Temperature split & coil diagnostics",
       "level": "sub",
       "tags": [
        "sh-sc"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Normal ΔT — cooling</div><div class=\"fval\">Residential 18–22°F, commercial 16–20°F</div></div><div class=\"frow\"><div class=\"flabel\">Normal ΔT — heating</div><div class=\"fval\">Gas furnace 40–70°F, heat pump 20–30°F, hydronic coil 25–40°F</div></div><div class=\"frow\"><div class=\"flabel\">Low ΔT cooling</div><div class=\"fval\">Possible undercharge, low airflow, or inefficient compressor. Low ΔT + high superheat = low charge</div></div><div class=\"frow\"><div class=\"flabel\">High ΔT cooling</div><div class=\"fval\">Restricted airflow, dirty filters, or undersized return duct</div></div><div class=\"frow\"><div class=\"flabel\">Evaporator coil clues</div><div class=\"fval\">Even frost = normal. Frost only at metering device = restriction. Ice across whole coil = low airflow</div></div></div><div class=\"tip\"><b>Field tip:</b> Low ΔT + high amps = airflow issue. Low ΔT + low amps = refrigerant or compressor issue.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "fund-93",
       "title": "Flash gas",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Flash gas is just another term for boiling. It's normal and required directly after the metering device and through the evaporator &mdash; that's how the coil absorbs heat via latent heat of vaporization. It's only a problem when it happens somewhere it shouldn't.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">What causes flashing</div><div class=\"fval\">A drop in pressure below the saturation point, a rise in temperature above it, or both. In the liquid line this usually means long/undersized lines, kinks, or a clogged filter drier &mdash; all of which drop pressure</div></div><div class=\"frow\"><div class=\"flabel\">Preventing it</div><div class=\"fval\">Keep line lengths and tight bends to a minimum, insulate liquid line runs through hot spaces, keep refrigerant clean/dry with a properly sized drier</div></div><div class=\"frow\"><div class=\"flabel\">Subcooling as headroom</div><div class=\"fval\">10&deg;+ of subcooling gives the liquid line margin against pressure drop from long line runs &mdash; a system with proper subcooling normally won't flash in the liquid line under normal conditions</div></div><div class=\"frow\"><div class=\"flabel\">Bubbles in a sight glass &ne; automatically \"flash gas\"</div><div class=\"fval\">Could genuinely be true flash gas in the liquid line. Could also just mean the refrigerant was never fully condensed to liquid in the first place (low charge) &mdash; in that case subcool will read 0&deg; even at the condenser outlet</div></div><div class=\"frow\"><div class=\"flabel\">How to tell the difference</div><div class=\"fval\">True liquid-line flash gas shows measurable subcooling at the condenser outlet, but you still see/hear/measure boiling refrigerant in the liquid line before the metering device</div></div></div><div class=\"tip\"><b>Field tip:</b> Hissing or surging at the liquid line near the evaporator, or bubbles in the sight glass, means check subcool at the condenser first &mdash; that single reading tells you whether you're chasing a restriction or a charge problem.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/flash-gas/\" target=\"_blank\">Flash Gas &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "fund-101",
       "title": "Wet bulb & enthalpy",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Dry-bulb temperature (a regular thermometer reading) doesn't account for the actual heat content of air or its evaporative cooling potential &mdash; wet-bulb and enthalpy fill that gap.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">What wet-bulb actually measures</div><div class=\"fval\">The temperature a damp thermometer bulb reads in a 900 FPM air stream &mdash; exactly what a sling psychrometer measures. The bigger the gap between wet-bulb and dry-bulb (wet-bulb depression), the lower the RH and the greater the evaporative cooling effect available</div></div><div class=\"frow\"><div class=\"flabel\">At 100% RH</div><div class=\"fval\">Dry-bulb, wet-bulb, and dew point are all the same &mdash; air is fully saturated, zero evaporative effect available</div></div><div class=\"frow\"><div class=\"flabel\">Enthalpy</div><div class=\"fval\">Total heat content of the air, in BTUs per lb. Converting lbs of air to CFM lets you calculate a coil's actual heat-moving capacity, or BTU gain/loss over a duct run</div></div><div class=\"frow\"><div class=\"flabel\">Wet-bulb and enthalpy are linked</div><div class=\"fval\">On a psychrometric chart, wet-bulb and enthalpy lines run together (at 14.7 PSIA) &mdash; a given wet-bulb temp corresponds to a specific enthalpy value. Reading this accurately matters: a difference of 28.4 vs 28.6 BTU/lb adds up fast multiplied across a large air mass</div></div></div><div class=\"tip\"><b>Field tip:</b> This is the concept behind the cooling tower approach/wet-bulb numbers elsewhere in this reference &mdash; see \"How a cooling tower actually works\" under Cooling Towers for the applied version.</div><div class=\"reflink\">Full reference (full WB/enthalpy calculator link): <a href=\"https://www.hvacrschool.com/wet-bulb-enthalpy-left-side-chart/\" target=\"_blank\">Wet Bulb and Enthalpy &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "fund-106",
       "title": "Refrigerant charging basics",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Always read the manufacturer's charging spec for the model first when possible. \"What should my pressures be?\" is not how you charge a system &mdash; charts and rules of thumb fill the gap only when factory data isn't available.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Which method for which metering device</div><div class=\"fval\">Fixed orifice/piston systems: primarily superheat method. TXV/EEV systems: primarily subcool method. Always charge in cool mode when possible regardless of which mode you'll verify in later</div></div><div class=\"frow\"><div class=\"flabel\">Stop-and-investigate triggers</div><div class=\"fval\">Suction saturation below 32&deg;F with both indoor/outdoor temps above 68&deg;F needs more diagnosis, even if SH/SC look correct. Liquid line pressure more than 30&deg; saturation above outdoor temp (e.g. 440 PSI liquid on R-410A at 90&deg;F) means stop and address high head before proceeding, regardless of SH/SC readings</div></div><div class=\"frow\"><div class=\"flabel\">Charging technique</div><div class=\"fval\">Always purge hoses first. Charge in liquid phase (tank upside down), add slowly, watch the sight glass or use a liquid-preventing adapter to avoid flooding/slugging the compressor</div></div><div class=\"frow\"><div class=\"flabel\">Superheat charging</div><div class=\"fval\">Monitor actual suction line temp vs low-side saturation temp, plus indoor/outdoor entering temps to calculate target SH from a manufacturer chart or calculator. Adding charge decreases superheat; recovering increases it</div></div><div class=\"frow\"><div class=\"flabel\">Subcool charging</div><div class=\"fval\">Monitor liquid line temp vs high-side saturation temp. No entering-temp data needed. If no manufacturer spec is available, 10&ndash;12&deg; subcool is a relatively safe residential default. Adding charge increases subcool; recovering decreases it</div></div><div class=\"frow\"><div class=\"flabel\">Approach method (Lennox TXV systems)</div><div class=\"fval\">Approach = liquid line temp minus outdoor ambient (measured in shade, away from condenser discharge air). Get to at least 6&deg; subcool before calculating approach. Remove charge to increase approach differential, add to decrease it</div></div><div class=\"frow\"><div class=\"flabel\">Heat pump heat mode charging</div><div class=\"fval\">Switch hoses so suction gauge reads off common suction (between compressor and reversing valve). Rule of thumb only: discharge line temp 100&deg; above outdoor ambient, or 20&ndash;25&deg; suction saturation below outdoor ambient. Colder outside = lower suction pressure; hotter inside = higher head pressure, since the coil roles are reversed</div></div><div class=\"frow\"><div class=\"flabel\">Before touching charge</div><div class=\"fval\">Full visual inspection first: filter, blower wheel, evaporator coil, condenser coil cleanliness, correct wiring/mode</div></div></div><div class=\"tip\"><b>Field tip:</b> Test everything, not just the one number you're chasing &mdash; airflow, delta T, SH, SC, suction pressure, head pressure, amps, and incoming voltage all need to check out together before you call a charge correct.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/refrigerant-charging-basics-for-air-conditioning-heat-pump-systems/\" target=\"_blank\">Refrigerant Charging Basics &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "fund-116",
       "title": "Relative vs absolute humidity",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">The same amount of moisture in the air can read as a very different relative humidity depending on temperature &mdash; understanding why explains a lot of \"confusing\" RH readings in the field, including a supply air RH that reads near 100% on a properly dehumidifying system.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Relative humidity (RH)</div><div class=\"fval\">The ratio of moisture actually in the air to the maximum moisture the air could hold at that temperature. NOT the total amount of moisture present</div></div><div class=\"frow\"><div class=\"flabel\">Absolute humidity</div><div class=\"fval\">The true total amount of moisture in the air, measured in grains. Read off a psychrometric chart using dry-bulb temp and RH. Useful for exact moisture content, but doesn't tell you how close the air is to its dew point the way RH does</div></div><div class=\"frow\"><div class=\"flabel\">Why warmer air reads lower RH for the same moisture</div><div class=\"fval\">Air can hold more moisture when it's warmer and less when it's colder &mdash; the same grains of moisture read as a much higher RH in cold air than in warm air, since cold air's maximum capacity is lower</div></div><div class=\"frow\"><div class=\"flabel\">Why supply air RH often reads near 100%</div><div class=\"fval\">Cooling air at the coil lowers how much moisture it can hold, so moisture condenses out and drains away. The remaining air leaving the coil is close to fully saturated (near 100% RH) even though its total moisture content (grains) is much lower than the return air &mdash; this is normal, not a sign of poor dehumidification</div></div><div class=\"frow\"><div class=\"flabel\">Why space RH drops well below supply RH</div><div class=\"fval\">As the cold, near-saturated supply air moves through ductwork and mixes with the warmer space air, it reheats. Warmer air can hold more moisture, so RH drops significantly on the way to the space &mdash; without any additional moisture being removed</div></div><div class=\"frow\"><div class=\"flabel\">Dehumidifiers use the same principle</div><div class=\"fval\">An evaporator and condensing coil in one box &mdash; the evaporator pulls moisture out while cooling the air, and the condensing coil reheats it, trading some sensible cooling capacity for latent (moisture) capacity</div></div><div class=\"frow\"><div class=\"flabel\">Target indoor RH</div><div class=\"fval\">30&ndash;60% is the generally recommended range for IAQ purposes</div></div><div class=\"frow\"><div class=\"flabel\">Best-practice dehumidification airflow</div><div class=\"fval\">Longer runtimes and slower fan speeds give the coil more contact time with the air, improving moisture removal</div></div></div><div class=\"tip\"><b>Field tip:</b> A high RH reading right at the supply register is not by itself evidence of a dehumidification problem &mdash; check total moisture removal (grains, or space RH) before condemning the coil or charge.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/its-all-relative-humidity/\" target=\"_blank\">It's All Relative&hellip; Humidity &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "fund-122",
       "title": "Wet-bulb & dry-bulb in practice",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Companion to the wet-bulb & enthalpy card elsewhere in this tab &mdash; this one covers where the terms come from and how they're actually used on a charging chart or service call.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Where the terms come from</div><div class=\"fval\">A bare mercury thermometer bulb gives the dry-bulb (sensible-only) reading. Wrap the bulb in a wet cloth and expose it to airflow, and evaporative cooling from the cloth pulls the reading down &mdash; that's the wet-bulb temperature, which accounts for latent heat/humidity</div></div><div class=\"frow\"><div class=\"flabel\">Why superheat charging charts need both</div><div class=\"fval\">Indoor wet-bulb temp is taken at the evaporator coil, since it captures the full heat (sensible + latent) moving over the coil &mdash; latent BTUs take a lot more energy to move than sensible ones. Outdoor dry-bulb temp is taken at the condenser. Return DB and WB are also needed to find target delta T</div></div><div class=\"frow\"><div class=\"flabel\">When WB and DB match</div><div class=\"fval\">Only at 100% RH (the dew point) &mdash; anywhere below full saturation, the two readings will differ at the same location</div></div><div class=\"frow\"><div class=\"flabel\">Tools</div><div class=\"fval\">Modern psychrometric probes replace the older sling psychrometer. Cheaper tools are more prone to sensor inaccuracy &mdash; paying for quality matters more here than on some other tools</div></div><div class=\"frow\"><div class=\"flabel\">Tool maintenance</div><div class=\"fval\">Psychrometric sensors get dirty with regular use and batteries need replacing. Keep more than one probe and calibrate them against each other periodically to catch drift before it affects a diagnosis</div></div></div><div class=\"tip\"><b>Field tip:</b> If two psychrometric probes on the truck start disagreeing with each other, that's your cue to calibrate &mdash; don't assume the newer or more expensive one is automatically the accurate one.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/wet-bulb-and-dry-bulb-temps-in-hvac-service/\" target=\"_blank\">Wet-Bulb and Dry-Bulb Temps in HVAC Service &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "fund-132",
       "title": "One way to picture superheat & subcool",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Not a technical deep-dive &mdash; just a mental model for what SH/SC readings are actually telling you, useful for building intuition rather than memorizing formulas.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">What SH/SC actually answer</div><div class=\"fval\">Three questions: Is there enough refrigerant in the system? Is heat transferring properly between the air and the refrigerant? Is something restricting the flow of refrigerant?</div></div><div class=\"frow\"><div class=\"flabel\">Why the gauge-vs-clamp gap matters</div><div class=\"fval\">Gauges read a pressure that correlates to a saturation temperature; a clamp reads actual line temperature directly. The gap between those two readings tells you something about what's happening inside the system that you can't see directly</div></div><div class=\"frow\"><div class=\"flabel\">The garden hose picture</div><div class=\"fval\">Imagine 70&deg;F water flowing through a hose that's been sitting in the sun at 110&deg;F. How fast the hose wall cools to match the water temperature depends on flow rate &mdash; low flow (or a kink) means the hose wall takes longer to reflect the water's actual temperature</div></div><div class=\"frow\"><div class=\"flabel\">Applied to low charge</div><div class=\"fval\">Less refrigerant flowing through the system means the suction line takes longer to cool to match the refrigerant's actual temperature &mdash; this shows up as high superheat. But high superheat can also come from a restriction or high airflow, not just low charge, so it's one clue among several, not a standalone diagnosis</div></div><div class=\"frow\"><div class=\"flabel\">The same idea applied to pressure</div><div class=\"fval\">A kink or restriction drops both flow volume and pressure downstream &mdash; the same principle behind how a TXV or fixed orifice creates a deliberate pressure drop, and why a loss of charge or a metering device change affects system pressure</div></div></div><div class=\"tip\"><b>Field tip:</b> High superheat by itself doesn't tell you which of low charge, a restriction, or high airflow is the cause &mdash; treat it as a prompt to check all three, not a final answer.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/one-way-to-picture-superheat-and-subcool/\" target=\"_blank\">One Way to Picture Superheat and Subcool &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-63",
     "title": "HVAC Fundamentals &mdash; Systems & Components",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "fund-104",
       "title": "HVAC/R refrigerant cycle basics",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">The order: Compressor &rarr; Discharge line &rarr; Condenser &rarr; Liquid Line &rarr; Metering Device &rarr; Expansion Line &rarr; Evaporator &rarr; Suction line &rarr; back to Compressor. Everything else in this reference assumes you have this sequence memorized cold.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Compressor</div><div class=\"fval\">The only mechanical component in a basic system. Creates the pressure differential &mdash; high side (discharge/condenser/liquid line) vs low side (suction/evaporator/expansion line). Compressing a gas raises its temperature; this is why discharge gas is hot</div></div><div class=\"frow\"><div class=\"flabel\">Condenser &mdash; three jobs, in order</div><div class=\"fval\">1) Desuperheat (drop hot discharge gas down to condensing temp) 2) Condense (reject heat until it's fully liquid) 3) Subcool (drop the liquid's temp further below condensing temp). It must fully condense to liquid, or there's nothing for the metering device to meter</div></div><div class=\"frow\"><div class=\"flabel\">Metering device</div><div class=\"fval\">Creates a pressure drop between the liquid line and evaporator. The pressure drop lowers saturation temp below the surrounding air temp, causing the refrigerant to start boiling (flashing) &mdash; a portion of it flashes to vapor immediately on the drop, before it even reaches the coil</div></div><div class=\"frow\"><div class=\"flabel\">Evaporator</div><div class=\"fval\">Refrigerant boils at a constant temp (saturation) while absorbing heat. Once fully boiled to vapor, further heat absorption raises its temp above saturation &mdash; that rise is superheat</div></div><div class=\"frow\"><div class=\"flabel\">Suction line</div><div class=\"fval\">Evaporator to compressor. Low-pressure superheated vapor &mdash; cool to the touch on A/C, cold on refrigeration</div></div><div class=\"frow\"><div class=\"flabel\">Discharge line</div><div class=\"fval\">Compressor to condenser. High-temp, high-pressure superheated vapor</div></div><div class=\"frow\"><div class=\"flabel\">Liquid line</div><div class=\"fval\">Condenser to metering device. High-pressure subcooled liquid, slightly above outdoor temp</div></div><div class=\"frow\"><div class=\"flabel\">Expansion line</div><div class=\"fval\">Metering device to evaporator, when the two are physically separated (common on ductless mini-splits with the metering device in the outdoor unit). Full of mixed liquid/vapor flash gas</div></div><div class=\"frow\"><div class=\"flabel\">Superheat vs subcool vs saturation, in one line</div><div class=\"fval\">Fully liquid = subcooled. Fully vapor = superheated. Actively changing state (boiling or condensing) = at saturation</div></div><div class=\"frow\"><div class=\"flabel\">Terminology note</div><div class=\"fval\">The \"condenser\" commonly refers to the whole outdoor unit, which actually contains the condenser, compressor, and other parts &mdash; \"condensing unit\" or \"outside unit\" is the more precise term</div></div></div><div class=\"tip\"><b>Field tip:</b> Heat and cooling are never created, only moved or changed in form &mdash; every diagnostic question ultimately comes back to \"where is the heat coming from, and where is it going.\"</div><div class=\"reflink\">Full reference (full diagrams and animations for every component and line): <a href=\"https://www.hvacrschool.com/hvacr-refrigerant-cycle-basics/\" target=\"_blank\">HVAC/R Refrigerant Cycle Basics &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "fund-37",
       "title": "Air-cooled vs water-cooled systems",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Heat rejection</div><div class=\"fval\">Air-cooled: direct to outdoor air via coils/fans. Water-cooled: to a water loop, cooled by tower/fluid cooler</div></div><div class=\"frow\"><div class=\"flabel\">Efficiency</div><div class=\"fval\">Air-cooled drops in hot weather. Water-cooled is higher efficiency, more stable, especially at scale</div></div><div class=\"frow\"><div class=\"flabel\">Maintenance</div><div class=\"fval\">Air-cooled: coil cleaning, fan motors. Water-cooled: water treatment, basin cleaning, pump seals, tube cleaning</div></div><div class=\"frow\"><div class=\"flabel\">Common applications</div><div class=\"fval\">Air-cooled: small-medium RTUs, splits, VRF. Water-cooled: large commercial/industrial, process cooling, data centers</div></div></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "fund-38",
       "title": "DX vs chilled water cooling",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Cooling method</div><div class=\"fval\">DX: refrigerant absorbs heat directly at the evaporator coil. Chilled water: water cooled by a chiller, circulated to AHU coils</div></div><div class=\"frow\"><div class=\"flabel\">System type</div><div class=\"fval\">DX: closed refrigerant circuit, self-contained per unit. Chilled water: central plant, multiple AHUs share one loop</div></div><div class=\"frow\"><div class=\"flabel\">Chilled water supply/return</div><div class=\"fval\">Typically 42–45°F supply, 55–58°F return</div></div><div class=\"frow\"><div class=\"flabel\">Applications</div><div class=\"fval\">DX: small-medium buildings, RTUs, splits, VRF. Chilled water: large commercial, industrial, hospital, campus</div></div></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "fund-39",
       "title": "Heat pump vs straight AC",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Key component</div><div class=\"fval\">Heat pump has a reversing valve to switch heating/cooling. Straight AC has none — fixed refrigerant flow direction</div></div><div class=\"frow\"><div class=\"flabel\">Heating method</div><div class=\"fval\">Heat pump extracts heat from outdoor air. Straight AC relies on a separate furnace or electric heat</div></div><div class=\"frow\"><div class=\"flabel\">Control wiring</div><div class=\"fval\">Heat pump includes O/B terminal for reversing valve + aux heat. Straight AC has no O/B terminal</div></div><div class=\"frow\"><div class=\"flabel\">Defrost</div><div class=\"fval\">Heat pumps need an automatic defrost cycle. Straight AC doesn't.</div></div></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "fund-40",
       "title": "TXV vs fixed orifice vs EEV",
       "level": "sub",
       "tags": [
        "txv"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Control type</div><div class=\"fval\">TXV: mechanical, sensing bulb pressure. Fixed orifice: fixed hole size, flow varies with pressure. EEV: electronic, stepper motor/solenoid via board feedback</div></div><div class=\"frow\"><div class=\"flabel\">Superheat control</div><div class=\"fval\">TXV: maintains constant SH at evap outlet. Fixed orifice: no control, SH varies widely. EEV: precisely maintains target SH electronically</div></div><div class=\"frow\"><div class=\"flabel\">Responsiveness</div><div class=\"fval\">TXV: moderate (mechanical delay). Fixed orifice: slow. EEV: fast and accurate</div></div><div class=\"frow\"><div class=\"flabel\">Typical applications</div><div class=\"fval\">TXV: standard splits/commercial. Fixed orifice: budget/residential. EEV: VRF/VRV, chillers, modern inverter-driven systems</div></div></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "fund-42",
       "title": "Scroll vs recip vs screw compressors",
       "level": "sub",
       "tags": [
        "compressor"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Scroll</div><div class=\"fval\">Small-medium tonnage, high efficiency, very quiet. Common failures: scroll separation, flooded starts, liquid slugging damage</div></div><div class=\"frow\"><div class=\"flabel\">Reciprocating</div><div class=\"fval\">Small-medium tonnage, older/budget units. More moving parts (valves, pistons, rods), more wear points, noisier</div></div><div class=\"frow\"><div class=\"flabel\">Screw</div><div class=\"fval\">Medium-large tonnage, big RTUs/chillers/industrial. Excellent modulation via slide valve or VFD, but higher maintenance (oil management)</div></div></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "fund-146",
       "title": "Conduction, convection & radiation",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">The three heat transfer mechanisms behind everything HVAC does &mdash; understanding which one dominates in a given situation explains a lot of \"why\" behind system design and behavior.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Conduction</div><div class=\"fval\">Heat transfer through direct contact &mdash; energized particles of a warmer object transfer heat to an adjacent colder one. This is why insulation works: conductive heat has to physically pass through the insulation material before reaching the room side</div></div><div class=\"frow\"><div class=\"flabel\">R-value</div><div class=\"fval\">Measures a barrier's resistance to conductive heat transfer &mdash; higher R-value means heat takes longer to pass through. Example: adding 1.5\" of fiberglass batt can nearly double an uninsulated 2x4 wall's R-value, roughly 4.6 to 9</div></div><div class=\"frow\"><div class=\"flabel\">Convection</div><div class=\"fval\">Heat transfer via a moving fluid (air or liquid) carrying its heat energy along with it &mdash; no direct contact required. Example: outdoor heat entering through a leaky window via infiltrating air</div></div><div class=\"frow\"><div class=\"flabel\">Why \"heat rises\"</div><div class=\"fval\">Really a density effect &mdash; warmer fluid is less dense and floats above colder, denser fluid. Same reason a swimming pool is cooler at the bottom than the surface</div></div><div class=\"frow\"><div class=\"flabel\">Forced convection (ceiling fans)</div><div class=\"fval\">Clockwise rotation draws cooler air up to mix with warm air pooled near the ceiling, creating a net warming effect. Counterclockwise rotation creates a downdraft with a wind-chill cooling effect</div></div><div class=\"frow\"><div class=\"flabel\">Radiation</div><div class=\"fval\">Heat transfer via electromagnetic waves &mdash; no contact or fluid medium needed, works even through a vacuum. Every object emits some radiation; body heat shows up as infrared, visible on thermal imaging</div></div><div class=\"frow\"><div class=\"flabel\">Emissivity</div><div class=\"fval\">An object's ability to emit thermal radiation, on a scale from 0 (perfect reflector) to 1 (\"perfect black body\" that absorbs/emits at high rates). Shiny surfaces sit closer to 0; darker surfaces sit closer to 1 &mdash; asphalt in direct sun gets far hotter than aluminum foil next to it for exactly this reason</div></div></div><div class=\"tip\"><b>Field tip:</b> When a customer asks why a sunny-side room runs hotter despite good insulation, radiation (through windows) rather than conduction is usually the bigger factor &mdash; window treatments or low-E glass address a different problem than adding wall insulation would.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/conduction-convection-and-radiation/\" target=\"_blank\">Conduction, Convection, and Radiation &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-59",
     "title": "Motor & Drive Reference",
     "level": "top",
     "tags": [],
     "content": [
      {
       "id": "mot-32",
       "title": "NEMA frame quick reference (Baldor)",
       "level": "sub",
       "tags": [
        "nema"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Common frame dimensions for standard TEFC general purpose motors. Refer to manufacturer data for exact specs on a given model &mdash; these are reference only.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Frame 143T/145T</div><div class=\"fval\">D 3&frac12;\", 2F 4\", shaft U 7/8\", keyseat 3/16\"</div></div><div class=\"frow\"><div class=\"flabel\">Frame 182T/184T</div><div class=\"fval\">D 4&frac12;\", 2F 5&frac12;\"&ndash;5&frac12;\", shaft U 1&#8531;\", keyseat 1/4\"</div></div><div class=\"frow\"><div class=\"flabel\">Frame 213T/215T</div><div class=\"fval\">D 5&frac12;\", shaft U 1&#8539;\", keyseat 5/16\"</div></div><div class=\"frow\"><div class=\"flabel\">Frame 254T/256T</div><div class=\"fval\">D 6&#188;\", shaft U 1&#8541;\", keyseat 3/8\"</div></div><div class=\"frow\"><div class=\"flabel\">Frame 284T/286T</div><div class=\"fval\">D 7\", shaft U 1&#8542;\", keyseat 1/2\"</div></div><div class=\"frow\"><div class=\"flabel\">NEMA C-Face BA dimensions</div><div class=\"fval\">143-5TC = 2&#190;\" &middot; 182-4TC = 3&#189;\" &middot; 213-5TC = 4&#188;\" &middot; 254-6TC = 4&#190;\"</div></div></div><div class=\"tip\"><b>Field tip:</b> Contact the local Baldor office (or equivalent) for exact \"C\" dimensions on face-mount replacements &mdash; the quick chart is for identifying frame size, not for final fitment.</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div><div class=\"reflink\">Full reference (complete frame chart): <a href=\"https://www.baldor.com/Shared/pdf/nema_chart_04.pdf\" target=\"_blank\">Baldor NEMA frame chart PDF</a></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "mot-67",
       "title": "NEMA motor mounting arrangements & conduit box orientation",
       "level": "sub",
       "tags": [
        "nema"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Reference chart (Baldor BEC-402) for standard NEMA mounting arrangements and conduit box orientation on general purpose motors. Chart is primarily diagrams &mdash; use the full PDF to identify the specific arrangement for a given motor.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Governing standard</div><div class=\"fval\">NEMA MG 1-2009 covers all standard NEMA mounting configurations</div></div><div class=\"frow\"><div class=\"flabel\">Why it matters</div><div class=\"fval\">Conduit box position and mounting orientation affect wiring access and installation clearance &mdash; confirm the arrangement before final mounting, not after</div></div></div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div><div class=\"reflink\">Full reference (mounting arrangement diagrams): <a href=\"refs/nema-conduit-box-orientation.pdf\" target=\"_blank\">NEMA conduit box orientation PDF</a></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "mot-33",
       "title": "Proper belt tensioning",
       "level": "sub",
       "tags": [
        "bearing-belt"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Why it matters</div><div class=\"fval\">Too little tension = slippage, excess heat, premature belt/pulley wear. Too much = excess stress on belts, bearings, shafts</div></div><div class=\"frow\"><div class=\"flabel\">Feel method accuracy</div><div class=\"fval\">Only 1% of experienced techs tension a belt correctly by feel in controlled testing &mdash; most land at 7&ndash;50% of correct tension</div></div><div class=\"frow\"><div class=\"flabel\">Force-deflection method</div><div class=\"fval\">Measure span length P. Apply force F perpendicular to the span, enough to deflect 1/64\" per inch of span. For a 32\" span, deflect 1/2\". Force value is per belt/rib &mdash; multiply by rib count for multi-rib belts.</div></div><div class=\"frow\"><div class=\"flabel\">Minimum pulley diameters (examples)</div><div class=\"fval\">Belt type A: 3.00\" pitch dia. &middot; B: 5.40\" &middot; 3V: 2.65\" &middot; 5V: 7.10\". Undersized pulleys dramatically increase belt tension and shorten belt life.</div></div><div class=\"frow\"><div class=\"flabel\">Installation method</div><div class=\"fval\">Rolling a belt on causes low tension (slip, heat). Prying damages internal cables. Neither method should be used &mdash; use proper tensioning tools.</div></div></div><div class=\"tip\"><b>Field tip:</b> Belts lose tension over time even when correctly installed &mdash; high-quality belts still lose nearly 50% of installed tension over their life. Re-check tension during PMs, don't assume it holds.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "mot-34",
       "title": "Yaskawa VFD start-up (Z1000/V1000)",
       "level": "sub",
       "tags": [
        "vfd"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Modified Constants menu</div><div class=\"fval\">Shows which parameters have been changed from factory defaults &mdash; check this first on an unfamiliar drive</div></div><div class=\"frow\"><div class=\"flabel\">Start command wiring</div><div class=\"fval\">Z1000: terminals S1 and SN. V1000: terminals S1 and SC</div></div><div class=\"frow\"><div class=\"flabel\">Speed reference wiring</div><div class=\"fval\">Both models: 0&ndash;10VDC on terminal A1/AC, or 4&ndash;20mA on terminal A2/AC</div></div><div class=\"frow\"><div class=\"flabel\">Auto tuning</div><div class=\"fval\">Required after changing \"B\" parameters. Drive must be powered but stopped. From main menu: down arrow &rarr; Auto Tune &rarr; Enter &rarr; Terminal Resistance &rarr; Enter &rarr; enter motor kW (motor HP &times; 0.75) &rarr; Accept. Tunes in 10 seconds or less.</div></div></div><div class=\"tip\"><b>Field tip:</b> Motor kW for auto-tune = motor HP &times; 0.75 (example: 40 HP &times; 0.75 = 30 kW).</div><div class=\"unitnote\">Unit-specific &mdash; confirm with current manufacturer service manual for the exact model.</div><div class=\"reflink\">Full reference (full parameter list, wiring diagrams, fault codes): <a href=\"refs/yaskawa-v1000-manual.pdf\" target=\"_blank\">Yaskawa V1000 AC drive manual PDF</a></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "mot-35",
       "title": "VFD basics & troubleshooting (general)",
       "level": "sub",
       "tags": [
        "vfd"
       ],
       "content": [
        {
         "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Main sections</div><div class=\"fval\">Rectifier (AC&rarr;DC) &rarr; DC bus (filters/stabilizes) &rarr; inverter (DC&rarr;variable frequency AC)</div></div><div class=\"frow\"><div class=\"flabel\">Frequency vs speed</div><div class=\"fval\">Motor RPM &asymp; (frequency &times; 120) &divide; number of poles. 60 Hz = full speed, 30 Hz = half speed</div></div><div class=\"frow\"><div class=\"flabel\">Input power check</div><div class=\"fval\">Measure L1-L2-L3, should match drive rating &plusmn;10%. Unbalanced input >2% causes DC bus ripple and trips</div></div><div class=\"frow\"><div class=\"flabel\">Motor testing</div><div class=\"fval\">Megger insulation, should read >1M&Omega;. If drive trips instantly on run, disconnect motor leads &mdash; if trip clears, motor is shorted</div></div><div class=\"frow\"><div class=\"flabel\">Common fault codes</div><div class=\"fval\">Overcurrent (mechanical jam or short), overvoltage (regen during decel or bad DC bus cap), undervoltage, ground fault, overtemperature, comm loss</div></div><div class=\"frow\"><div class=\"flabel\">Environmental</div><div class=\"fval\">Drives derate above 104&deg;F (40&deg;C) &mdash; heat is a major cause of drive failure. Keep cooling fans/filters clean</div></div></div><div class=\"tip\"><b>Field tip:</b> If unsure whether the drive or motor is bad: disconnect the motor and run the drive unloaded. Still trips = drive fault. Runs normally = inspect motor and wiring.</div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "mot-66",
       "title": "Mounted bearing lubrication",
       "level": "sub",
       "tags": [
        "bearing-belt"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Applies to pillow block/flange block bearings on pumps, fans, and blower shafts. Oil film within the grease (often thinner than 0.0001\") is what actually prevents metal-to-metal contact &mdash; it's not just \"packing grease in.\"</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Before relubricating</div><div class=\"fval\">Check the manual for the specific grease type, fill level, and interval &mdash; wrong or incompatible grease causes problems down the line</div></div><div class=\"frow\"><div class=\"flabel\">Prep</div><div class=\"fval\">Clean the grease fitting, surrounding area, and gun nozzle before greasing &mdash; contamination is a leading cause of premature bearing failure</div></div><div class=\"frow\"><div class=\"flabel\">Best practice</div><div class=\"fval\">Relubricate with the bearing in motion when possible &mdash; rotation helps distribute grease through the cavity and reduces the risk of blowing a seal on hard start after overfilling</div></div><div class=\"frow\"><div class=\"flabel\">Overfilling risk</div><div class=\"fval\">Grease concentrated in one spot + hard start = rapid internal pressure spike = failed seal</div></div><div class=\"frow\"><div class=\"flabel\">Temporary heat rise</div><div class=\"fval\">Normal and expected right after relubrication, even though lubrication's purpose is reducing heat &mdash; not a fault by itself</div></div><div class=\"frow\"><div class=\"flabel\">Hard-to-reach bearings</div><div class=\"fval\">Single-point lubricators or solid/polymer (permanent) lubrication are options when manual greasing isn't practical</div></div></div><div class=\"tip\"><b>Field tip:</b> Low grease levels don't just risk failure eventually &mdash; they guarantee excessive wear happening right now. Get a schedule on the calendar rather than relubricating reactively.</div><div class=\"reflink\">Full reference (relubrication interval tables, lubricator options): <a href=\"https://baartgroup.com/how-to-lubricate-a-mounted-bearing/\" target=\"_blank\">Baart Group mounted bearing lubrication guide</a></div>"
        }
       ],
       "updated": "2026-08-13"
      },
      {
       "id": "mot-95",
       "title": "Motor overheating diagnosis",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Ambient temperature rating refers to the air around the motor, not the motor's own shell temp or outdoor air temp &mdash; the motor often sits in a condenser air stream that's hotter than ambient.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Typical ambient ratings</div><div class=\"fval\">Condensing fan motors: 60&deg;C (140&deg;F), 70&deg;C (158&deg;F), or 80&deg;C (176&deg;F). Blower motors: commonly 40&deg;C (104&deg;F)</div></div><div class=\"frow\"><div class=\"flabel\">Normal shell temp</div><div class=\"fval\">Commonly 30&ndash;60&deg;F warmer than outdoor temp during normal operation, depending on sun exposure, motor efficiency, and runtime</div></div><div class=\"frow\"><div class=\"flabel\">Common overheating pattern</div><div class=\"fval\">Condensing fan motor overheats and trips on internal thermal overload during peak heat, which drives head pressure up until the compressor also trips &mdash; system may cool overnight and run fine when the tech arrives, causing a frustrating nuisance-intermittent callback</div></div><div class=\"frow\"><div class=\"flabel\">High condensing temperature</div><div class=\"fval\">Dirty condenser or overcharge heats the air around the motor, which heats the motor</div></div><div class=\"frow\"><div class=\"flabel\">Direct sun</div><div class=\"fval\">Radiant heat directly on the motor housing raises shell temp independent of ambient air</div></div><div class=\"frow\"><div class=\"flabel\">Voltage</div><div class=\"fval\">Check motor voltage is in proper range while running under load, not just at idle</div></div><div class=\"frow\"><div class=\"flabel\">Capacitor</div><div class=\"fval\">Both undersized and oversized capacitors can cause motor overheating &mdash; confirm correct sizing, don't just confirm it's \"close enough\"</div></div><div class=\"frow\"><div class=\"flabel\">Bearing issues</div><div class=\"fval\">Failing bearings often show increased noise or side-to-side shaft play, but not always &mdash; don't rule bearings out just because the motor spins quietly</div></div></div><div class=\"tip\"><b>Field tip:</b> A thermal camera is best used to compare a suspect motor against a similar unit running under similar conditions nearby, not as a single pass/fail reading &mdash; emissivity varies by surface and throws off absolute accuracy.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/motor-overheating/\" target=\"_blank\">Motor Overheating &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "mot-111",
       "title": "3-phase motors &mdash; the basics",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">Three-phase AC motors are mechanically about as simple as a motor gets &mdash; the utility spins magnets to produce three phases 120&deg; apart at 60Hz, and the motor's electromagnets follow that rotation.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Sizing</div><div class=\"fval\">Motor must physically fit, match voltage, and be rated for the job. An oversized motor is occasionally acceptable if it fits and conductors/overloads are sized to match &mdash; an undersized motor is not</div></div><div class=\"frow\"><div class=\"flabel\">Overload protection</div><div class=\"fval\">Many motors have internal overload protection. Others rely on an external overload, most commonly built into the starter (a contactor plus overload relay combined)</div></div><div class=\"frow\"><div class=\"flabel\">Rotation</div><div class=\"fval\">Swapping any two phases reverses rotation. Blower motors and scroll compressors are the worst offenders for running backward when miswired &mdash; always confirm correct rotation before leaving a job. Note: if a blower is on a VFD and the compressor isn't, the VFD can correct blower rotation independently, which can mask a compressor wired in reverse</div></div><div class=\"frow\"><div class=\"flabel\">Voltage/current imbalance</div><div class=\"fval\">A motor killer &mdash; increases winding heat and degrades performance. Check phase-to-phase (not phase-to-ground) with the motor running: average the three readings, then find the % deviation of the reading furthest from that average</div></div><div class=\"frow\"><div class=\"flabel\">Imbalance targets</div><div class=\"fval\">DOE recommends &le;1% imbalance; other industry sources allow up to 4%. Keep it under 4% and work to correct anything over 1%. Current should track the same pattern as voltage since all three windings share equal resistance &mdash; investigate major current variation the same way</div></div><div class=\"frow\"><div class=\"flabel\">No run/start capacitors</div><div class=\"fval\">Three-phase motors don't need run or start capacitors the way single-phase PSC motors do. They may use part-winding or other soft-start strategies, and may have power-factor-correction capacitors, but neither is the same thing as a single-phase run cap</div></div></div><div class=\"tip\"><b>Field tip:</b> Always verify rotation direction on a 3-phase blower and compressor independently before leaving a job &mdash; a VFD-driven blower correcting its own rotation can hide a compressor that's still wired backward.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/3-phase-motors-the-basics/\" target=\"_blank\">3-Phase Motors&mdash;The Basics &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "mot-117",
       "title": "Voltage imbalance &mdash; causes & troubleshooting",
       "level": "sub",
       "tags": [
        "nema"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Builds on the imbalance measurement method under 3-phase motors basics &mdash; this card covers why imbalance happens and how to track it down.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Phase rotation importance varies</div><div class=\"fval\">Doesn't matter for reciprocating compressors. Matters for condenser fans and blowers. Is absolutely critical for scroll and screw compressors &mdash; wrong rotation can damage them quickly</div></div><div class=\"frow\"><div class=\"flabel\">Confirming rotation</div><div class=\"fval\">When replacing parts/equipment, keep phase connections the same as the original. Use a phase rotation indicator to confirm (clockwise is common but confirm for the specific equipment), or disconnect the compressor and verify blower rotation first before bringing the compressor online</div></div><div class=\"frow\"><div class=\"flabel\">VFD caveat</div><div class=\"fval\">A motor on a VFD automatically corrects its own rotation regardless of incoming phase order &mdash; this makes a VFD-driven motor an unreliable way to test source phase rotation for other equipment on the same feed</div></div><div class=\"frow\"><div class=\"flabel\">Why imbalance happens</div><div class=\"fval\">Electricians balance single-phase 120V and 208V loads across all three legs of a panel. Uneven loading &mdash; like a bunch of space heaters concentrated on one leg &mdash; leaves the lighter-loaded phase carrying less current and reading higher voltage, which is a real-world source of imbalance beyond the utility feed itself</div></div><div class=\"frow\"><div class=\"flabel\">Troubleshooting steps</div><div class=\"fval\">Look for the obvious first: melted wires, loose terminals/lugs, undersized wire, pitted contacts, poor disconnect/fuse contact</div></div><div class=\"frow\"><div class=\"flabel\">Where to measure</div><div class=\"fval\">Check voltage as close to the motor as possible first &mdash; that's the actual voltage the motor sees. Then work back toward the distribution point; a big voltage jump as you move toward the source pinpoints where the voltage drop is happening</div></div><div class=\"frow\"><div class=\"flabel\">Severity threshold</div><div class=\"fval\">Over 4% imbalance, don't leave the motor running &mdash; the risk of damage and an expensive repair is real</div></div></div><div class=\"tip\"><b>Field tip:</b> If several small single-phase loads and a large 3-phase RTU share the same panel, an uneven mix of on/off single-phase loads can itself be the source of an intermittent voltage imbalance &mdash; not just a utility-side issue.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/3-phase-power-voltage-imbalance/\" target=\"_blank\">Three-Phase Voltage Imbalance &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      },
      {
       "id": "mot-124",
       "title": "Diagnosing ECM & X13 motors",
       "level": "sub",
       "tags": [],
       "content": [
        {
         "html": "<p class=\"ptext\">General process-of-elimination approach for an ECM/X13 motor that isn't running. Most of the best practices and diagnostic tools for these come from Regal/Genteq's Dealer Toolbox resources and their TECInspect diagnostic tool.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">1. Confirm power</div><div class=\"fval\">Proper line voltage and 24V calls to the correct terminals in the equipment</div></div><div class=\"frow\"><div class=\"flabel\">2. Confirm control signal</div><div class=\"fval\">Proper control signal reaching the motor from the 24V field wiring/board. Fan speed selection and programming vary by manufacturer &mdash; a dedicated tool like TECInspect helps verify this input signal is actually correct</div></div><div class=\"frow\"><div class=\"flabel\">3&ndash;4. Mechanical check</div><div class=\"fval\">Power off, remove the blower housing, check for abnormal sounds and side-to-side bearing play. These motors have a permanent-magnet rotor, so they won't spin freely by hand like a standard motor &mdash; expect an \"indexing\" feel as you turn the shaft, not free rotation</div></div><div class=\"frow\"><div class=\"flabel\">5. Visual check</div><div class=\"fval\">Look for signs of overheating, burned spots, or other visible damage</div></div><div class=\"frow\"><div class=\"flabel\">6. Isolate the motor</div><div class=\"fval\">Remove the module from the motor and disconnect the plug connecting the motor to the module</div></div><div class=\"frow\"><div class=\"flabel\">7. Winding-to-winding (phase-to-phase)</div><div class=\"fval\">Measure at the plug feeding the motor. Should read less than 20&Omega; and be nearly equal across all windings</div></div><div class=\"frow\"><div class=\"flabel\">8. Winding-to-ground</div><div class=\"fval\">Measure from each winding to the casing/ground. Should read no less than 100k ohms</div></div><div class=\"frow\"><div class=\"flabel\">9. If motor and signal both check out</div><div class=\"fval\">The module itself is the failed part and needs replacement</div></div></div><div class=\"tip\"><b>Field tip:</b> Don't skip step 2 (confirming the control signal) before condemning the motor &mdash; a motor that tests electrically fine but isn't receiving a proper input signal will never run no matter how good the windings are.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/diagnosing-ecm-x13-motors/\" target=\"_blank\">Diagnosing ECM & X13 Motors &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21",
       "quickCheck": [
        {
         "label": "1. Confirm power",
         "text": "Proper line voltage and 24V calls to the correct terminals in the equipment"
        },
        {
         "label": "2. Confirm control signal",
         "text": "Proper control signal reaching the motor from the 24V field wiring/board."
        }
       ]
      }
     ]
    },
    {
     "id": "eq-57",
     "title": "SH / SC Target Ranges",
     "level": "top",
     "tags": [
      "sh-sc"
     ],
     "content": [
      {
       "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Subcooling &mdash; where measured</div><div class=\"fval\">Liquid line leaving the condenser (high side)</div></div><div class=\"frow\"><div class=\"flabel\">Evaporator superheat &mdash; where measured</div><div class=\"fval\">Suction line at or near the evaporator coil outlet (low side)</div></div><div class=\"frow\"><div class=\"flabel\">Compressor / total superheat &mdash; where measured</div><div class=\"fval\">Suction line at the compressor suction service valve &mdash; includes any heat gain along the suction line beyond the evaporator</div></div><div class=\"frow\"><div class=\"flabel\">SC normal range</div><div class=\"fval\">TXV system 8&ndash;15&deg;F typical, piston system 10&ndash;20&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Evaporator SH normal range (coil outlet)</div><div class=\"fval\">TXV system 8&ndash;12&deg;F typical, piston system 15&ndash;25&deg;F</div></div><div class=\"frow\"><div class=\"flabel\">Compressor / total SH normal range</div><div class=\"fval\">17&ndash;22&deg;F typical, measured at compressor suction</div></div><div class=\"frow\"><div class=\"flabel\">High SC means</div><div class=\"fval\">Overcharge, restricted liquid line, dirty condenser, or low airflow</div></div><div class=\"frow\"><div class=\"flabel\">Low SC means</div><div class=\"fval\">Undercharge, weak compressor, low head pressure, or undersized metering device</div></div><div class=\"frow\"><div class=\"flabel\">High evaporator SH means</div><div class=\"fval\">Undercharge, low evaporator load, or restriction before the metering device</div></div><div class=\"frow\"><div class=\"flabel\">Low evaporator SH means</div><div class=\"fval\">Overcharge, TXV stuck open, or poor airflow</div></div></div><div class=\"tip\"><b>Field tip:</b> The 8&ndash;12&deg;F figure is <b>evaporator</b> SH, taken right at the coil outlet, and reflects evaporator performance and metering device operation. The 17&ndash;22&deg;F figure is <b>compressor/total</b> SH, taken at the compressor suction valve, and includes suction line superheat gain. The two are not interchangeable &mdash; a normal evaporator SH alongside an abnormally high compressor SH points to the suction line (undersized, poorly insulated, excess length) rather than the metering device. SC checks the condenser and charge on the high side; SH checks the evaporator and metering device on the low side. If both SC and evaporator SH are low, the system is undercharged or underloaded; if both are high, suspect restriction or non-condensables.</div>"
      }
     ],
     "updated": "2026-08-13"
    },
    {
     "id": "eq-102",
     "title": "Solving Delta T (Temperature Split)",
     "level": "top",
     "tags": [],
     "content": [
      {
       "html": "<p class=\"ptext\">Delta T is one piece of the diagnostic puzzle &mdash; not a standalone verdict. The 20&deg;F rule of thumb is a starting point, not a target to force a system into.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Formula</div><div class=\"fval\">&Delta;T = T2 &minus; T1, measured across the evaporator (return air temp minus supply air temp)</div></div><div class=\"frow\"><div class=\"flabel\">Probe placement is critical</div><div class=\"fval\">Take the supply reading just above the air handler, not at a register &mdash; leaky, torn, or poorly insulated ducts add unwanted gains between the coil and the register that corrupt the reading. Return reading should be equally representative, not right next to a leak</div></div><div class=\"frow\"><div class=\"flabel\">20&deg;F is a rule of thumb, not universal</div><div class=\"fval\">Most equipment falls in the 16&ndash;20&deg;F range at 400 CFM/ton, but manufacturers vary target delta T by equipment design. Chasing 20&deg;F on a system designed for 15&deg;F just makes things worse</div></div><div class=\"frow\"><div class=\"flabel\">Airflow effect</div><div class=\"fval\">System capacity (BTU absorption) doesn't change with fan speed &mdash; only how much air passes through the coil does. Decreased airflow = high split. Increased airflow = low split. This is predictable and gives you a logical starting point when delta T is off</div></div><div class=\"frow\"><div class=\"flabel\">Humidity effect</div><div class=\"fval\">High humidity air is less dense (water vapor molecules are lighter than air), meaning less sensible heat capacity per cubic foot, plus latent heat removal (condensing moisture) draws energy away from the sensible heat exchange &mdash; both push delta T lower on humid days, even on a correctly operating system</div></div><div class=\"frow\"><div class=\"flabel\">Refrigerant charge</div><div class=\"fval\">Delta T is NOT a reliable charge-verification test on its own &mdash; you can read 20&deg;F on a badly charged system and 12&deg;F on a properly charged one just as easily. Use it alongside suction/head pressure, superheat, and subcool, not instead of them</div></div><div class=\"frow\"><div class=\"flabel\">350 vs 400 CFM/ton systems</div><div class=\"fval\">In humid climates, some systems are deliberately set to 350 CFM/ton to extract more moisture &mdash; this makes standard delta T charts/calculators inapplicable, since the slower airflow allows more heat absorption and reads higher than the standard chart expects</div></div></div><div class=\"tip\"><b>Field tip:</b> If you're only checking delta T at the return grille and a random supply register, you're not really measuring delta T &mdash; you're measuring duct leakage plus delta T. Get the supply probe right at the air handler outlet.</div><div class=\"reflink\">Full reference (probe placement diagrams, target delta T sheet by wet/dry bulb): <a href=\"https://www.hvacrschool.com/solving-delta-t/\" target=\"_blank\">Solving Delta T &mdash; HVAC School</a></div>"
      }
     ],
     "updated": "2026-08-20"
    },
    {
     "id": "eq-112",
     "title": "Solving Subcool",
     "level": "top",
     "tags": [
      "sh-sc"
     ],
     "content": [
      {
       "html": "<p class=\"ptext\">A worksheet-style approach to finding subcooling by hand, useful for building the underlying visualization before relying on digital gauges that just spit out the number.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Definition</div><div class=\"fval\">Subcooling is the number of degrees a liquid's temperature sits below its saturation (mixed liquid/vapor) temperature at the pressure it's measured at</div></div><div class=\"frow\"><div class=\"flabel\">Why it matters</div><div class=\"fval\">Refrigerant must fully condense to liquid before the metering device to have a full column to feed. Too much subcooling (\"flooded condenser\") risks high head pressure and overcharge; too little (\"starving condenser\") risks inadequately feeding the metering device</div></div><div class=\"frow\"><div class=\"flabel\">Step 1 &mdash; actual liquid line temp</div><div class=\"fval\">Clamp a temperature probe to the liquid line to get the actual liquid line temperature</div></div><div class=\"frow\"><div class=\"flabel\">Step 2 &mdash; liquid saturation temp</div><div class=\"fval\">Attach a pressure manifold to the liquid line service port, then convert that pressure to a saturation temperature using a PT chart for the refrigerant in use</div></div><div class=\"frow\"><div class=\"flabel\">Step 3 &mdash; subtract</div><div class=\"fval\">Subcool = liquid saturation temp &minus; actual liquid line temp</div></div><div class=\"frow\"><div class=\"flabel\">Worked example (R-22)</div><div class=\"fval\">115&deg;F actual liquid line temp. 278 psig liquid line pressure corresponds to 125&deg;F saturation temp. 125 &minus; 115 = 10&deg;F subcooling</div></div></div><div class=\"tip\"><b>Field tip:</b> See SH/SC Target Ranges elsewhere in this tab for normal subcool ranges by metering device type once you've calculated the actual number.</div><div class=\"reflink\">Full reference (visual worksheet download): <a href=\"https://www.hvacrschool.com/solving-subcool/\" target=\"_blank\">Solving Subcool &mdash; HVAC School</a></div>"
      }
     ],
     "updated": "2026-08-20"
    },
    {
     "id": "eq-62",
     "title": "Vendor & Parts Sourcing",
     "level": "top",
     "tags": [
      "vendor"
     ],
     "content": [
      {
       "html": "<div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Sg Torrice</div><div class=\"fval\">American Standard / Trane light commercial, custom duct work</div></div><div class=\"frow\"><div class=\"flabel\">DCNE</div><div class=\"fval\">Carrier / Payne / Bryant</div></div><div class=\"frow\"><div class=\"flabel\">Homans</div><div class=\"fval\">Mitsubishi / Bryant, duct work</div></div><div class=\"frow\"><div class=\"flabel\">RP O'Connell</div><div class=\"fval\">McQuay / Daikin</div></div><div class=\"frow\"><div class=\"flabel\">APA of NH</div><div class=\"fval\">Rheem</div></div><div class=\"frow\"><div class=\"flabel\">First Electric</div><div class=\"fval\">Pumps / motors / bearings / Yaskawa</div></div><div class=\"frow\"><div class=\"flabel\">Interstate HVAC</div><div class=\"fval\">Honeywell / Belimo / controls</div></div><div class=\"frow\"><div class=\"flabel\">Boston Air Controls</div><div class=\"fval\">Honeywell / Belimo / pneumatic</div></div><div class=\"frow\"><div class=\"flabel\">RT Forbes</div><div class=\"fval\">Marley</div></div><div class=\"frow\"><div class=\"flabel\">Mr. Good Tower</div><div class=\"fval\">Evapco</div></div><div class=\"frow\"><div class=\"flabel\">Trane</div><div class=\"fval\">Trane / American Standard / Mitsubishi</div></div><div class=\"frow\"><div class=\"flabel\">United Refrigeration</div><div class=\"fval\">Refrigeration / controls / gas stock</div></div><div class=\"frow\"><div class=\"flabel\">FW Webb</div><div class=\"fval\">Plumbing / heating / gas stock / York</div></div><div class=\"frow\"><div class=\"flabel\">JS Fleming</div><div class=\"fval\">Liebert</div></div><div class=\"frow\"><div class=\"flabel\">Buckley Associates</div><div class=\"fval\">Greenheck / exhaust / duct work</div></div><div class=\"frow\"><div class=\"flabel\">ADC</div><div class=\"fval\">Indeeco / electric heaters</div></div><div class=\"frow\"><div class=\"flabel\">Central Fan</div><div class=\"fval\">Exhaust / motors</div></div><div class=\"frow\"><div class=\"flabel\">APA</div><div class=\"fval\">Mammoth</div></div><div class=\"frow\"><div class=\"flabel\">Motion Industries</div><div class=\"fval\">Bearings / pulleys / belts</div></div><div class=\"frow\"><div class=\"flabel\">TCA</div><div class=\"fval\">Aaon</div></div><div class=\"frow\"><div class=\"flabel\">Control Consultants</div><div class=\"fval\">Honeywell / controls / VFDs</div></div><div class=\"frow\"><div class=\"flabel\">Ferguson / Granite City / Graybar / Pipe Supply / Met Pipe / Independent Concord / Plumbers Supply</div><div class=\"fval\">General plumbing, electrical, and pipe supply</div></div></div><div class=\"subhead2\">Manufacturer tech support</div><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">AAON</div><div class=\"fval\">918-382-6450</div></div><div class=\"frow\"><div class=\"flabel\">AAON Controls / Wattmaster</div><div class=\"fval\">866-918-1100</div></div><div class=\"frow\"><div class=\"flabel\">Carrier</div><div class=\"fval\">800-379-6484</div></div><div class=\"frow\"><div class=\"flabel\">Daikin-McQuay</div><div class=\"fval\">866-432-4546</div></div><div class=\"frow\"><div class=\"flabel\">Grundfos</div><div class=\"fval\">913-227-3400</div></div><div class=\"frow\"><div class=\"flabel\">Liebert</div><div class=\"fval\">800-543-2378</div></div><div class=\"frow\"><div class=\"flabel\">Mitsubishi</div><div class=\"fval\">800-433-4822</div></div><div class=\"frow\"><div class=\"flabel\">Modine</div><div class=\"fval\">800-828-4328</div></div><div class=\"frow\"><div class=\"flabel\">Daikin technical support (ABCO)</div><div class=\"fval\">National support line 1-855-324-5461. Territory reps and field tech support contacts on file &mdash; confirm current before relying on it, list dated 2022.</div></div><div class=\"frow\"><div class=\"flabel\">Reznor</div><div class=\"fval\">800-695-1901</div></div><div class=\"frow\"><div class=\"flabel\">Yaskawa</div><div class=\"fval\">800-927-5292</div></div><div class=\"frow\"><div class=\"flabel\">York</div><div class=\"fval\">844-873-4445</div></div></div><div class=\"reflink\">Full contact sheet (names, direct/cell numbers by specialty): <a href=\"refs/daikin-tech-support-contacts-2022.pdf\" target=\"_blank\">Daikin technical support contacts PDF</a></div>"
      }
     ],
     "updated": "2026-08-13"
    },
    {
     "id": "eq-58",
     "title": "Wiring & Electrical Reference",
     "level": "top",
     "tags": [
      "wiring"
     ],
     "content": [
      {
       "id": "wire-81",
       "title": "Types of wiring diagrams & reading them",
       "level": "sub",
       "tags": [
        "wiring"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Every schematic has five basic components: a power supply, a path for the power, a load, a switch/component that interrupts power to the load, and a legend explaining the symbols used.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Ladder / schematic diagram</div><div class=\"fval\">Most common type &mdash; symbols on rungs like a ladder, shows how the circuit functions rather than how it looks</div></div><div class=\"frow\"><div class=\"flabel\">Line diagram</div><div class=\"fval\">Drawings resemble the actual components rather than symbols</div></div><div class=\"frow\"><div class=\"flabel\">Installation diagram</div><div class=\"fval\">Used by installing contractors &mdash; shows terminal board connections only, rarely internal wiring</div></div><div class=\"frow\"><div class=\"flabel\">Reading junctions</div><div class=\"fval\">A dot (solid black circle) = wires connected. No dot at a crossing = wires cross without connecting. Some manufacturers use loops/jumps for crossovers instead &mdash; check the legend.</div></div><div class=\"frow\"><div class=\"flabel\">Configuration &mdash; side by side</div><div class=\"fval\">Loads/motors on the right (\"load side\"), switches/controllers on the left (\"line side\")</div></div><div class=\"frow\"><div class=\"flabel\">Configuration &mdash; up and down</div><div class=\"fval\">High-voltage section on top, low-voltage on bottom. The transformer is usually the dividing line.</div></div><div class=\"frow\"><div class=\"flabel\">Line locators</div><div class=\"fval\">Numbers along the left edge mark line location. Underlined number = normally closed contact. Non-underlined = normally open.</div></div><div class=\"frow\"><div class=\"flabel\">Common legend abbreviations</div><div class=\"fval\">C1 = compressor contactor coil &middot; CAP = run capacitor &middot; CC HTR = crankcase heater &middot; COMP = compressor &middot; HPS/LPS = high/low pressure switch &middot; IFR/IFM = indoor fan relay/motor &middot; TRSF = transformer</div></div></div><div class=\"tip\"><b>Field tip:</b> Always read the notes and legend first before tracing a schematic &mdash; not all manufacturers use the same conventions for dots, crossovers, or line weights.</div><div class=\"reflink\">Full reference (RSES Understanding Electrical Schematics Part 1, full figures): <a href=\"refs/understanding-electrical-schematics.pdf\" target=\"_blank\">Understanding Electrical Schematics PDF</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "wire-82",
       "title": "Systematic troubleshooting workflow",
       "level": "sub",
       "tags": [
        "wiring"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">Follow the power, don't hopscotch around the unit. This is the same discipline whether it's a residential split system or a commercial RTU.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Safety first</div><div class=\"fval\">LOTO whenever working in a commercial setting or out of sight of the disconnect. Never trust a disconnect blade &mdash; verify 0V between L1-L2, L1-Ground, and L2-Ground before touching anything</div></div><div class=\"frow\"><div class=\"flabel\">The schematic is your map</div><div class=\"fval\">Trace the circuit mentally before your meter leads touch a terminal. If you don't know the sequence of operation, you're guessing, not troubleshooting</div></div><div class=\"frow\"><div class=\"flabel\">Diagnostic toolkit</div><div class=\"fval\">True RMS multimeter (required for accurate readings on VFDs/ECM motors), amp clamp, fused jumper wires (3&ndash;5A, for safely bypassing controls to isolate circuits), megohmmeter for compressor winding-to-ground checks</div></div><div class=\"frow\"><div class=\"flabel\">Step 1 &mdash; high voltage</div><div class=\"fval\">Measure at the disconnect, then line side of the contactor, then load side (T1/T2) if pulled in. 240V in but 200V out = pitted contacts creating resistance &mdash; replace the contactor</div></div><div class=\"frow\"><div class=\"flabel\">Step 2 &mdash; low voltage</div><div class=\"fval\">If high voltage is present but the unit won't run, check R to C at the transformer secondary for 24V. Then check Y to C on a cooling call &mdash; 24V there means the thermostat is doing its job and the problem is downstream</div></div><div class=\"frow\"><div class=\"flabel\">Step 3 &mdash; isolating a dead short</div><div class=\"fval\">If the low-voltage fuse blows immediately on a call, stop wasting fuses. Disconnect the Y wire going outside and restore power. Fuse holds &rarr; short is in the outdoor low-voltage wiring or contactor coil. Fuse still blows &rarr; short is inside (board, rubbed thermostat wire, bad transformer) &mdash; break the circuit down component by component</div></div></div><div class=\"tip\"><b>Field tip:</b> If you're not sure where to start, start at the source and work toward the load &mdash; every step you skip is a guess you'll have to walk back later.</div><div class=\"reflink\">Full reference (complete guide with diagnostic toolkit detail): <a href=\"https://www.hvacreaper.com/blog/hvac-electrical-troubleshooting-technician-guide\" target=\"_blank\">HVAC Electrical Troubleshooting Guide &mdash; HVAC Reaper</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "wire-83",
       "title": "Capacitor & contactor testing",
       "level": "sub",
       "tags": [
        "wiring"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">A capacitor can test good cold on the bench and still fail once it's hot and under load &mdash; a bench MFD test alone isn't the full picture.</p><img class=\"cardimg\" src=\"refs/capacitor-load-test-guide.jpg\" alt=\"How to test a run capacitor under load - amp clamp on start winding and voltmeter across capacitor terminals - HVAC School diagram\"><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Capacitor load test</div><div class=\"fval\">With the system running, measure amps on the start wire (common/HERM to compressor S terminal) and voltage across the capacitor (C to HERM)</div></div><div class=\"frow\"><div class=\"flabel\">Formula</div><div class=\"fval\">&micro;F = (Amps &times; 2652) &divide; Voltage. The constant 2652 is specific to 60Hz power</div></div><div class=\"frow\"><div class=\"flabel\">Tolerance</div><div class=\"fval\">If the running result is outside &plusmn;6% or &plusmn;10% of the label rating (check which tolerance applies to that cap), replace it &mdash; even if it looks physically fine</div></div><div class=\"frow\"><div class=\"flabel\">Contactor voltage drop test</div><div class=\"fval\">With the system running (contactor closed), measure voltage across each pole: L1 to T1, then L2 to T2</div></div><div class=\"frow\"><div class=\"flabel\">Contactor pass/fail</div><div class=\"fval\">Good contacts read near 0V, ideally <0.1V. More than 0.5V across closed contacts means that resistance is generating heat and starving the compressor of voltage &mdash; replace it. A visual check alone (ants, light burns) isn't definitive</div></div></div><div class=\"tip\"><b>Field tip:</b> If you find a failed capacitor, don't just swap it and move on &mdash; check condenser coil cleanliness and fan amp draw. Excess heat is a leading cause of capacitor failure, and a fresh cap on a dirty coil just buys time before the next one fails too.</div>"
        }
       ],
       "updated": "2026-10-29"
      },
      {
       "id": "wire-84",
       "title": "Compressor electrical diagnostics",
       "level": "sub",
       "tags": [
        "wiring",
        "compressor"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">When a compressor won't start, don't assume it's dead &mdash; distinguish the actual failure mode before condemning it.</p><img class=\"cardimg\" src=\"refs/emerson-compressor-not-running-flowchart.jpg\" alt=\"Emerson/Copeland troubleshooting guide flowchart for compressor not starting or running, and instantly blown fuses\"><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Winding resistance check &mdash; single-phase (PSC)</div><div class=\"fval\">Applies to single-phase compressors with Common/Run/Start terminals &mdash; most residential/light commercial reciprocating and single-phase scroll compressors. Measure resistance between C-R, C-S, and S-R. On a healthy compressor: R(C-R) + R(C-S) &asymp; R(S-R)</div></div><div class=\"frow\"><div class=\"flabel\">Winding resistance check &mdash; three-phase (scroll / semi-hermetic)</div><div class=\"fval\">Three-phase compressors don't have a common/run/start configuration &mdash; they have three separate windings. Measure across all three terminal pairs (T1-T2, T2-T3, T1-T3). On a healthy compressor, all three readings should be roughly equal to each other, not summed. A significantly unequal reading among the three points to a winding fault.</div></div><div class=\"frow\"><div class=\"flabel\">Ground check</div><div class=\"fval\">Meter on the highest ohm scale (or a megger) from each terminal to clean copper ground. Any reading other than OL (infinite) indicates winding insulation breakdown</div></div><div class=\"frow\"><div class=\"flabel\">Locked rotor vs mechanical seize</div><div class=\"fval\">Check LRA on the data plate. Pulls LRA and trips the breaker instantly &rarr; mechanically seized. Pulls significantly less than LRA but hums and trips on thermal overload &rarr; possible single-phasing or a loose connection, not a seized compressor</div></div></div><div class=\"tip\"><b>Field tip:</b> Don't skip the ground check even when winding resistance looks fine &mdash; a compressor can have good winding-to-winding resistance and still be shorted to the shell.</div><div class=\"unitnote\">Source: Emerson/Copeland flowchart 2004ECT-126.</div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "wire-85",
       "title": "Phantom & intermittent electrical faults",
       "level": "sub",
       "tags": [
        "wiring"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">The hardest calls are the ones that work when you arrive and fail when you leave. These patterns explain a lot of them.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Ghost voltage</div><div class=\"fval\">Reading 40&ndash;80V on a disconnected wire is often induced voltage from adjacent live wires, not a real short. Switch the meter to Low-Z (Low Impedance) mode &mdash; if the voltage drops to zero, it's a ghost. If it holds, it's a live short</div></div><div class=\"frow\"><div class=\"flabel\">The rub-out</div><div class=\"fval\">Check the low-voltage wire bundle where it enters the outdoor unit cabinet. Vibration rubs insulation raw against the refrigerant line or sheet metal, causing a short that only happens when the unit vibrates &mdash; won't show up sitting still</div></div><div class=\"frow\"><div class=\"flabel\">Loose neutrals</div><div class=\"fval\">In the air handler, check the white neutral wire bundle. A loose neutral can cause bizarre voltage readings (like 60V showing on a 120V circuit) and erratic motor behavior that looks unrelated to the actual cause</div></div></div><div class=\"tip\"><b>Field tip:</b> If a fault only shows up under vibration or load, don't just re-torque connections and call it fixed &mdash; flex the harness by hand while metering to try to reproduce the fault before you leave.</div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "wire-91",
       "title": "Parallel circuit resistance",
       "level": "sub",
       "tags": [
        "wiring"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">In a series circuit, total resistance is just the sum of every load's resistance. In parallel, it's trickier &mdash; and it goes down, not up, as you add more loads.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Formula</div><div class=\"fval\">1&divide;Rt = 1&divide;R1 + 1&divide;R2 + 1&divide;R3 (add as many loads as are actually in parallel)</div></div><div class=\"frow\"><div class=\"flabel\">Worked example</div><div class=\"fval\">R1=120&Omega;, R2=45&Omega;, R3=360&Omega;. 1&divide;120=0.0083, 1&divide;45=0.022, 1&divide;360=0.0028. Sum = 0.0331. 1&divide;0.0331 = 30.21&Omega; total &mdash; less than the lowest individual resistance in the circuit</div></div><div class=\"frow\"><div class=\"flabel\">Why total resistance drops</div><div class=\"fval\">Each additional parallel path gives current another way through &mdash; more paths means less overall resistance, which by Ohm's law means higher total amperage</div></div><div class=\"frow\"><div class=\"flabel\">Real-world example</div><div class=\"fval\">Compressor amps + condenser fan amps = total condenser circuit amps. This is parallel circuit behavior you already measure every day</div></div><div class=\"frow\"><div class=\"flabel\">Myth to drop</div><div class=\"fval\">Electricity doesn't only take the path of least resistance &mdash; it takes all available paths. Every additional parallel path just lowers the overall resistance between the two points, which is why a breaker trips when you add another load to an already-loaded circuit</div></div></div><div class=\"tip\"><b>Field tip:</b> If you need the resistance of just two loads in parallel, there's a shortcut: (R1 &times; R2) &divide; (R1 + R2) &mdash; same answer as the full formula, less arithmetic.</div><div class=\"reflink\">Full reference (diagrams, related series-circuit article): <a href=\"https://www.hvacrschool.com/parallel-circuit-resistance/\" target=\"_blank\">Parallel Circuit Resistance &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "wire-92",
       "title": "Start winding inrush &mdash; what the meter actually shows",
       "level": "sub",
       "tags": [
        "wiring",
        "compressor"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">A single-phase motor has three terminals (common, start, run) but only two windings. Common is just the shared point between them &mdash; which is why amperage is always measured on common, since that reads the combined current of both windings.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Why Ohm's law doesn't apply cleanly here</div><div class=\"fval\">AC voltage/amperage isn't fixed (we measure RMS, not peak), and impedance in an inductive load isn't fixed either &mdash; it combines static winding resistance with inductive reactance that builds as the magnetic field expands/collapses and back EMF as the motor spins</div></div><div class=\"frow\"><div class=\"flabel\">Winding ohm readings are nearly meaningless</div><div class=\"fval\">Static resistance readings are so low that meter inaccuracy becomes a real factor. The real resistance (impedance) only shows up once the motor is energized with AC and the magnetic fields are interacting</div></div><div class=\"frow\"><div class=\"flabel\">The run winding</div><div class=\"fval\">Connected directly across the line. Current is high at start (low impedance) and drops as the motor spins up and impedance increases &mdash; this is where essentially ALL the true inrush current occurs</div></div><div class=\"frow\"><div class=\"flabel\">The start winding</div><div class=\"fval\">Connected through the run capacitor, not directly across the line. Its current is capped by the capacitor's capacitance &mdash; it literally cannot draw more current than the capacitor allows, regardless of winding impedance</div></div><div class=\"frow\"><div class=\"flabel\">What this means for inrush readings</div><div class=\"fval\">Nearly all inrush happens on the run winding, not the start winding. Start winding current doesn't rise until run winding current is already coming back down</div></div><div class=\"frow\"><div class=\"flabel\">Testing it yourself</div><div class=\"fval\">Measure running amps on the start wire with a capacitor slightly oversized, slightly undersized, and removed entirely &mdash; you'll see higher amps, lower amps, then none. That's the capacitor acting as a current ceiling, not the winding</div></div></div><div class=\"tip\"><b>Field tip:</b> Don't try to explain start winding amperage with static ohm readings and Ohm's law alone &mdash; the capacitor is doing the current-limiting, not the winding resistance.</div><div class=\"reflink\">Full reference (oscilloscope traces showing run vs start winding current): <a href=\"https://www.hvacrschool.com/what-you-know-about-start-winding-inrush-might-be-wrong/\" target=\"_blank\">What You Know About Start Winding Inrush Might Be Wrong &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "wire-108",
       "title": "Short circuits &mdash; what the word actually means",
       "level": "sub",
       "tags": [
        "wiring"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">\"Short\" gets used loosely to mean \"anything electrically wrong.\" In technical terms, it refers to one of two specific faults.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">Type 1 &mdash; two circuits connected in an undesigned manner</div><div class=\"fval\">Example: a Y and G wire shorted together from abrasion in a thermostat cable &mdash; result: the condenser runs whenever the blower is energized</div></div><div class=\"frow\"><div class=\"flabel\">Type 2 &mdash; a no-load path between two points of differing charge</div><div class=\"fval\">A traditional short to ground, a hot-to-common connection, or a connection between power legs without going through a load of appropriate resistance first</div></div><div class=\"frow\"><div class=\"flabel\">What both types cause</div><div class=\"fval\">Something energizes when it shouldn't, or fuses/breakers trip/blow, damaging components</div></div><div class=\"frow\"><div class=\"flabel\">Short vs open</div><div class=\"fval\">Open circuit = no path at all, power applied but nothing happens. Short circuit = fuses/breakers trip, or something energizes at the wrong time. Don't conflate the two when describing a fault</div></div><div class=\"frow\"><div class=\"flabel\">Finding a low-voltage short</div><div class=\"fval\">A resettable fuse device works well. An ohmmeter is also commonly used, but process-of-elimination with the 24V circuit live is often faster for most techs than isolating with an ohmmeter</div></div></div><div class=\"tip\"><b>Field tip:</b> Before calling something \"shorted,\" identify which of the two technical definitions actually applies &mdash; it changes where you should be looking for the fault.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/short-circuits/\" target=\"_blank\">Short Circuits &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-20"
      },
      {
       "id": "wire-115",
       "title": "Isolation diagnosis method",
       "level": "sub",
       "tags": [
        "wiring"
       ],
       "content": [
        {
         "html": "<p class=\"ptext\">A general-purpose diagnostic approach: form a hypothesis, then test it one component or conductor at a time using process of elimination, rather than tearing the whole system apart at once.</p><div class=\"ftable\"><div class=\"frow\"><div class=\"flabel\">First, before isolating</div><div class=\"fval\">Visually check common failure points: rub-out points on low-voltage wires, the safeties, and control wire routing both inside and outside the condensing unit &mdash; especially anywhere wires cross refrigerant tubing. Check the thermostat wiring for exposed copper too. Don't just replace a blown fuse without looking &mdash; fuses don't fail open on their own</div></div><div class=\"frow\"><div class=\"flabel\">Low-voltage short isolation</div><div class=\"fval\">Replace the blown fuse with a resettable fuse/breaker, thermostat off in all modes. Close the door switch first to confirm there's no continuous short in R. Then jumper each switch leg (G, Y, W, O, W2, Y2, etc.) to R one at a time &mdash; it's 24V, it won't hurt you &mdash; and watch for the one that blows the fuse or throws a spark</div></div><div class=\"frow\"><div class=\"flabel\">Narrowing further</div><div class=\"fval\">Once you've found the offending leg, separate the two ends of that circuit (e.g. the wire going to the thermostat vs. the wire going to the condenser) and tap each one to R independently to localize the fault to a specific wire run or component</div></div><div class=\"frow\"><div class=\"flabel\">Shorted compressor &mdash; first move</div><div class=\"fval\">Never just reset a tripped breaker on a condensing unit without investigating first. It tripped for a reason, and every reset risks a major arc &mdash; if the short is inside the compressor, that arc adds carbon and acid to the refrigerant</div></div><div class=\"frow\"><div class=\"flabel\">Visual inspection first</div><div class=\"fval\">Full visual of all high-voltage wiring, terminals, the contactor, capacitor, crankcase heater, and the breaker itself before pulling the top to inspect compressor terminals. Wear gloves and safety glasses before handling compressor terminals or the plug &mdash; a terminal can blow out of the fusite under pressure</div></div><div class=\"frow\"><div class=\"flabel\">Ground resistance test</div><div class=\"fval\">Measure resistance to ground from each compressor terminal. Manufacturers may still call a compressor good down to 0.5 megohms, while some meters flag \"bad\" as high as 20 megohms &mdash; know which standard applies before condemning a compressor on a borderline reading</div></div><div class=\"frow\"><div class=\"flabel\">Final confirmation</div><div class=\"fval\">Tape/strap the compressor terminals so nothing can touch, reassemble, and reset the breaker. Doesn't trip and everything else runs normally &mdash; diagnosis confirmed. Trips again &mdash; back to the drawing board</div></div><div class=\"frow\"><div class=\"flabel\">Other uses</div><div class=\"fval\">Same principle works for isolating system noises, or for confirming whether a communicating controller or its wire run is at fault by wiring the controller directly to the board with no wire run between them</div></div></div><div class=\"tip\"><b>Field tip:</b> A fuse that keeps blowing and just gets replaced without investigation is a callback waiting to happen &mdash; fuses don't fail open on their own.</div><div class=\"reflink\">Full reference: <a href=\"https://www.hvacrschool.com/isolation-diagnosis/\" target=\"_blank\">Isolation Diagnosis &mdash; HVAC School</a></div>"
        }
       ],
       "updated": "2026-08-21"
      }
     ]
    },
    {
     "id": "eq-56",
     "title": "P-T Charts by Refrigerant",
     "level": "top",
     "tags": [],
     "content": [
      {
       "html": "<div class=\"placeholder\">Add content here</div>"
      }
     ],
     "updated": "2026-08-13"
    }
   ]
  },
  {
   "key": "tests",
   "label": "Tests",
   "icon": "&#128203;",
   "content": [
    {
     "html": "<div class=\"placeholder\">Add content here</div>"
    }
   ]
  }
 ],
 "searchIntro": "Tap a keyword below to filter every tab down to matching cards. Tap \"Clear / Show All\" to go back to normal browsing."
};
