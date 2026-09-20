---
layout: page
permalink: /blog/
title: My Life
description: Baking, small joys, and life beyond research.
nav: true
nav_order: 6
---

<div class="life-intro">
  <span class="eyebrow">Beyond the models</span>
  <h2>A little flour.<br>A slower afternoon.</h2>
  <p>A space for baking experiments and everyday moments outside research.</p>
</div>

## From my kitchen

{% if site.data.life.photos.size > 0 %}

<div class="life-gallery">
  {% for photo in site.data.life.photos %}
  <figure>
    <a href="{{ photo.image | relative_url }}" aria-label="{{ photo.alt | escape }}">
      <img src="{{ photo.image | relative_url }}" alt="{{ photo.alt | escape }}" loading="lazy" decoding="async">
    </a>
    <figcaption>{{ photo.caption | escape }}</figcaption>
  </figure>
  {% endfor %}
</div>
{% else %}
<p class="life-empty">Photos from my kitchen will be shared here soon.</p>
{% endif %}

{% if site.posts.size > 0 %}

<h2>Life lately</h2>
<div class="life-posts">
  {% for post in site.posts %}
  <article class="life-entry">
    {% if post.thumbnail %}
    <a href="{{ post.url | relative_url }}" tabindex="-1" aria-hidden="true"><img src="{{ post.thumbnail | relative_url }}" alt="" loading="lazy"></a>
    {% endif %}
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%B %d, %Y' }}</time>
    <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
    <p>{{ post.description | default: post.excerpt | strip_html | truncatewords: 35 }}</p>
  </article>
  {% endfor %}
</div>
{% endif %}
