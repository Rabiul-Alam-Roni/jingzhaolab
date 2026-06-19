---
layout: page
title: Research Areas
permalink: /research-areas/
eyebrow: Research
subtitle: Broad themes that organize the lab's work across protein chemistry, flavor, and alternative proteins.
---

<div class="grid grid--3">
  {% for area in site.data.research_areas %}
    {% include research-area-card.html area=area %}
  {% endfor %}
</div>

<p class="page-footnote">
  Areas marked <strong>To be confirmed</strong> are inferred from the current
  lab roster and have not yet been verified against Dr. Zhao's own framing —
  confirm and edit <code>_data/research_areas.yml</code> when ready.
</p>

<p class="section__more"><a href="{{ '/projects/' | relative_url }}">See how these areas map to current projects →</a></p>
