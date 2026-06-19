---
layout: page
title: Current Projects
permalink: /projects/
subtitle: Full project descriptions are being added.
---

<div class="grid grid--3">
  {% assign active_projects = site.data.projects | where: "status", "active" %}
  {% for project in active_projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>

{% assign forming_projects = site.data.projects | where: "status", "forming" %}
{% if forming_projects.size > 0 %}
  <h2 class="section-subhead">Forming</h2>
  <div class="grid grid--3">
    {% for project in forming_projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
{% endif %}

{% assign completed_projects = site.data.projects | where: "status", "completed" %}
{% if completed_projects.size > 0 %}
  <h2 class="section-subhead">Completed</h2>
  <div class="grid grid--3">
    {% for project in completed_projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
{% endif %}
