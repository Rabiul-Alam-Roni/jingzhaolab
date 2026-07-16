---
layout: page
title: Current Projects
permalink: /projects/
subtitle: Active projects in the Zhao Food Science Lab. Full descriptions are being added.
---

<div class="grid grid--4">
  {% assign active_projects = site.data.projects | where: "status", "active" %}
  {% for project in active_projects %}
    {% include project-tile.html project=project index=forloop.index0 %}
  {% endfor %}
</div>

{% assign forming_projects = site.data.projects | where: "status", "forming" %}
{% if forming_projects.size > 0 %}
  <h2 class="section-subhead">Forming</h2>
  <div class="grid grid--4">
    {% for project in forming_projects %}
      {% include project-tile.html project=project index=forloop.index0 %}
    {% endfor %}
  </div>
{% endif %}

{% assign completed_projects = site.data.projects | where: "status", "completed" %}
{% if completed_projects.size > 0 %}
  <h2 class="section-subhead" id="previous">Previous Projects</h2>
  <div class="grid grid--4">
    {% for project in completed_projects %}
      {% include project-tile.html project=project index=forloop.index0 %}
    {% endfor %}
  </div>
{% endif %}
