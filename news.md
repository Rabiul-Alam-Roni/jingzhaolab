---
layout: page
title: News
permalink: /news/
eyebrow: News
subtitle: Lab updates, presentations, and announcements.
---

<div class="grid grid--2">
  {% for item in site.data.news %}
    {% include news-item.html item=item %}
  {% endfor %}
</div>
