---
layout: page
title: Contact
permalink: /contact/
subtitle: Get in touch with the Zhao Food Science Lab.
---

<div class="contact-grid">
  <div class="contact-card">
    <h2>Dr. Jing Zhao</h2>
    <p>Associate Professor</p>
    <p>{{ site.department }}<br>{{ site.institution }}</p>
  </div>

  <div class="contact-card">
    <h3>Email</h3>
    <p><a href="mailto:{{ site.contact_email }}">{{ site.contact_email }}</a></p>
    <h3>Phone</h3>
    <p>{{ site.contact_phone }}</p>
  </div>

  <div class="contact-card">
    <h3>Office</h3>
    <p>{{ site.contact_building }}</p>
    <h3>Mailing Address</h3>
    <p>{{ site.contact_address }}</p>
  </div>

  <div class="contact-card">
    <h3>Elsewhere</h3>
    <ul class="contact-card__links">
      <li><a href="{{ site.sdsu_profile_url }}">SDSU Faculty Profile</a></li>
      <li><a href="{{ site.scholar_url }}">Google Scholar</a></li>
    </ul>
  </div>
</div>
