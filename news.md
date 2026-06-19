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

<p class="page-footnote">
  These are placeholder entries. Replace them with real updates in
  <code>_data/news.yml</code> — newest item at the top of the file.
</p>
