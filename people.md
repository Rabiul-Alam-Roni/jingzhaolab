---
layout: page
title: Lab Members
permalink: /people/
---

{% include photo-carousel.html photos=site.data.team_photos id="people-photos" %}

{% assign all_members = site.data.lab_members %}

{% assign pi_members = all_members | where: "group", "pi" %}
{% if pi_members.size > 0 %}
  <h2 class="section-subhead">Principal Investigator</h2>
  <div class="grid grid--3">
    {% for member in pi_members %}{% include member-card.html member=member index=forloop.index0 %}{% endfor %}
  </div>
{% endif %}

{% assign staff_members = all_members | where: "group", "staff" %}
{% if staff_members.size > 0 %}
  <h2 class="section-subhead">Research Staff</h2>
  <div class="grid grid--3">
    {% for member in staff_members %}{% include member-card.html member=member index=forloop.index0 %}{% endfor %}
  </div>
{% endif %}

{% assign collab_members = all_members | where: "group", "collaborator" %}
{% if collab_members.size > 0 %}
  <h2 class="section-subhead">Collaborators</h2>
  <div class="grid grid--3">
    {% for member in collab_members %}{% include member-card.html member=member index=forloop.index0 %}{% endfor %}
  </div>
{% endif %}

{% assign grad_members = all_members | where: "group", "grad" %}
{% if grad_members.size > 0 %}
  <h2 class="section-subhead">Graduate Students</h2>
  <div class="grid grid--3">
    {% for member in grad_members %}{% include member-card.html member=member index=forloop.index0 %}{% endfor %}
  </div>
{% endif %}

{% assign undergrad_members = all_members | where: "group", "undergrad" %}
{% if undergrad_members.size > 0 %}
  <h2 class="section-subhead">Undergraduate Researchers</h2>
  <div class="grid grid--3">
    {% for member in undergrad_members %}{% include member-card.html member=member index=forloop.index0 %}{% endfor %}
  </div>
{% endif %}

{% assign intern_members = all_members | where: "group", "intern" %}
{% if intern_members.size > 0 %}
  <h2 class="section-subhead">Interns</h2>
  <div class="grid grid--3">
    {% for member in intern_members %}{% include member-card.html member=member index=forloop.index0 %}{% endfor %}
  </div>
{% endif %}

{% assign alumni_members = all_members | where: "group", "alumni" %}
{% if alumni_members.size > 0 %}
  <h2 class="section-subhead">Lab Alumni</h2>
  <div class="grid grid--3">
    {% for member in alumni_members %}{% include member-card.html member=member index=forloop.index0 %}{% endfor %}
  </div>
{% endif %}
