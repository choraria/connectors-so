---
layout: default
title: Connectors
description: Superhuman (formerly Coda) connectors that sync the rest of the web into your docs. Built and maintained by Sourabh Choraria.
---

<div class="wrap">
<section class="block" markdown="1">

Hi <span aria-hidden="true">👋🏾</span> I'm **Sourabh** — a spreadsheet nerd based in Porto. By day I work with our Customer Success team; in my free time I build small **connectors** that sync the rest of the web into Superhuman (formerly Coda).
{:.bio}

</section>

<section class="block">
  <h2 class="h-section">Connectors</h2>
  <ul class="connectors">
    {% for c in site.data.connectors %}
      <li>
        <a class="item" href="/{{ c.slug }}/">
          <div class="name">
            {{ c.title }}{% if c.note %}<span class="status">— {{ c.note }}</span>{% endif %}
          </div>
          <div class="desc">{{ c.description }}</div>
        </a>
        {% if c.links %}
        <div class="meta">
          {% for link in c.links %}{% unless forloop.first %}<span class="sep">·</span>{% endunless %}<a href="/{{ c.slug }}/{{ link.slug }}/">{{ link.label }}</a>{% endfor %}
        </div>
        {% endif %}
      </li>
    {% endfor %}
    <li>
      <div class="empty">More connectors, soon.</div>
    </li>
  </ul>
</section>
</div>
