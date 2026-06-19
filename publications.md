---
layout: page
title: Publications
permalink: /publications/
eyebrow: Publications
subtitle: Selected publications. For the complete and most current list, see Google Scholar.
---

<div class="scholar-cta">
  <a class="btn btn--primary" href="{{ site.scholar_url }}">View full publication list on Google Scholar →</a>
  <p class="scholar-cta__note">Google Scholar cannot be auto-synced to this site, so this page is updated manually. 2023–2026 publications will be added here as they're confirmed.</p>
</div>

## Selected Journal Articles

<ul class="pub-list">
  {% for pub in site.data.publications.journal_articles %}
    {% include publication-item.html pub=pub %}
  {% endfor %}
</ul>

## Books & Book Chapters

<ul class="pub-list">
  {% for book in site.data.publications.books %}
    <li class="pub-item">
      <span class="pub-item__year">{{ book.year }}</span>
      <span class="pub-item__body">
        {{ book.authors }} ({{ book.year }}). <em>{{ book.title }}</em>. {{ book.details }}
        {% if book.doi %} <a href="https://doi.org/{{ book.doi }}" class="pub-item__doi">doi.org/{{ book.doi }}</a>{% endif %}
      </span>
    </li>
  {% endfor %}
</ul>
