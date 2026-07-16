---
layout: page
title: Publications
permalink: /publications/
subtitle: Selected publications. For the complete and most current list, see Google Scholar.
---

<div class="scholar-cta">
  <a class="btn btn--primary" href="{{ site.scholar_url }}">View full publication list on Google Scholar →</a>
</div>

<h2 id="journal-articles" class="section-subhead">Selected Journal Articles</h2>

<ul class="pub-list">
  {% for pub in site.data.publications.journal_articles %}
    {% include publication-item.html pub=pub %}
  {% endfor %}
</ul>

<h2 id="books" class="section-subhead">Books &amp; Book Chapters</h2>

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
