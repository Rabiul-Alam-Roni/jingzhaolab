---
layout: page
title: Facilities
permalink: /facilities/
subtitle: Instrumentation and lab spaces supporting the lab's protein functionality, flavor chemistry, and sensory research.
---

<!-- ─────────────────────────────────────────────────────────────
     EQUIPMENT CARD GRID
     Each card = one photo (top) + name + short description (below),
     four across on desktop. To ADD a new piece of equipment:
       1. Put its photo in  assets/images/lab/  (e.g. my-machine.jpg)
       2. Copy ONE full <div class="equipment-card"> … </div> block
          below, paste it before the closing </div> of the grid,
          and change the image path, name, and description.
     A ready-to-copy blank template is in the comment at the very
     bottom of this file.
────────────────────────────────────────────────────────────── -->

<div class="grid grid--4">

  <div class="equipment-card">
    <div class="equipment-card__photo">
      <img src="{{ '/assets/images/lab/gc-ms-8890.jpg' | relative_url }}" alt="Agilent 8890 GC System with Gerstel olfactory detection port">
    </div>
    <div class="equipment-card__body">
      <p class="equipment-card__name">Gas Chromatography–Olfactometry (GC-O)</p>
      <p class="equipment-card__desc">Agilent 8890 GC + 5977C MSD with Gerstel ODP 4 olfactory detection port.</p>
    </div>
  </div>

  <div class="equipment-card">
    <div class="equipment-card__photo">
      <img src="{{ '/assets/images/lab/soxtec-st255.jpg' | relative_url }}" alt="FOSS Soxtec ST 255 fat extractor">
    </div>
    <div class="equipment-card__body">
      <p class="equipment-card__name">Soxtec Fat Extractor</p>
      <p class="equipment-card__desc">FOSS ST 255. Semi-automated solvent extraction for crude fat, total fat, and extractable matter.</p>
    </div>
  </div>

  <div class="equipment-card">
    <div class="equipment-card__photo">
      <img src="{{ '/assets/images/lab/amino-acid-analyzer-l8900.jpg' | relative_url }}" alt="Hitachi L-8900 amino acid analyzer">
    </div>
    <div class="equipment-card__body">
      <p class="equipment-card__name">Amino Acid Analyzer</p>
      <p class="equipment-card__desc">Hitachi L-8900. Analyzes amino acid composition of proteins and hydrolysates.</p>
    </div>
  </div>

  <div class="equipment-card">
    <div class="equipment-card__photo">
      <img src="{{ '/assets/images/lab/centrifuge-rt6000b.jpg' | relative_url }}" alt="Sorvall RT6000B refrigerated centrifuge">
    </div>
    <div class="equipment-card__body">
      <p class="equipment-card__name">Refrigerated Centrifuge</p>
      <p class="equipment-card__desc">Sorvall RT6000B refrigerated benchtop centrifuge.</p>
    </div>
  </div>

  <div class="equipment-card">
    <div class="equipment-card__photo">
      <img src="{{ '/assets/images/lab/centrifuge-5810r.jpg' | relative_url }}" alt="Eppendorf 5810 R centrifuge">
    </div>
    <div class="equipment-card__body">
      <p class="equipment-card__name">Benchtop Centrifuge</p>
      <p class="equipment-card__desc">Eppendorf 5810 R refrigerated benchtop centrifuge.</p>
    </div>
  </div>

  <div class="equipment-card">
    <div class="equipment-card__photo">
      <img src="{{ '/assets/images/lab/sensory-lab-psfa428.jpg' | relative_url }}" alt="Sensory evaluation booths in PSFA room 428">
    </div>
    <div class="equipment-card__body">
      <p class="equipment-card__name">Sensory Evaluation Booths</p>
      <p class="equipment-card__desc">Five booths in PSFA 428, each with a sink and serving hatch, plus an adjoining food-prep kitchen (PSFA 424).</p>
    </div>
  </div>

</div>

<div class="facility-section" style="margin-top: 56px;">
  <h2>Sensory Evaluation Laboratory</h2>
  <div class="facility-section__intro">
    <p>
      The sensory laboratory (PSFA 428) has five booths, each equipped
      with a sink and a serving hatch. A kitchen / food-preparation room
      (PSFA 424) on the other side of the serving hatch has
      refrigerators, freezers, stoves, blenders, and other supplies used
      to store and prepare food for sensory studies. SDSU maintains a
      trained sensory panel, and test setup and analysis use RedJade
      software.
    </p>
  </div>

  <table class="sensory-test-table">
    <thead>
      <tr>
        <th>Test type</th>
        <th>Used for</th>
        <th>Samples</th>
        <th>Panel</th>
        <th>Duration</th>
        <th>Approx. cost</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Discrimination<br>(triangle, duo-trio, paired comparison, TETRAD)</td>
        <td>Quality control</td>
        <td>2</td>
        <td>20–50 untrained participants</td>
        <td>1–2 days</td>
        <td>$200–400</td>
      </tr>
      <tr>
        <td>Descriptive<br>(QDA, sensory spectrum)</td>
        <td>Product characterization</td>
        <td>1–5</td>
        <td>6–10 trained panelists</td>
        <td>2–3 weeks</td>
        <td>$400–2,000</td>
      </tr>
      <tr>
        <td>Preference / consumer</td>
        <td>Consumer acceptance</td>
        <td>1–5</td>
        <td>100–200 target consumers</td>
        <td>1–2 weeks</td>
        <td>$500–1,500</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- ─────────────────────────────────────────────────────────────
     BLANK TEMPLATE — copy everything between the two dashed lines,
     paste it inside the <div class="grid grid--4"> above, then
     replace the image path, name, and description.

     <div class="equipment-card">
       <div class="equipment-card__photo">
         <img src="{{ '/assets/images/lab/YOUR-IMAGE.jpg' | relative_url }}" alt="DESCRIBE THE EQUIPMENT">
       </div>
       <div class="equipment-card__body">
         <p class="equipment-card__name">EQUIPMENT NAME</p>
         <p class="equipment-card__desc">Brand, model, and a short note about what it does.</p>
       </div>
     </div>
────────────────────────────────────────────────────────────── -->
