---
title: "VIS2KNOW Lab - Professor"
layout: professor
excerpt: "VIS2KNOW Lab: Professor"
sitemap: false
permalink: /professor/
---

# Professor

{% assign p = site.data.professor %}

<div class="row">

<div class="col-sm-4 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ p.photo }}"
     alt="{{ p.name }} portrait"
     class="media-object img-thumbnail"
     style="width:220px; max-width:100%; margin-bottom:15px;">

<h3>{{ p.name }}</h3>

<p><em>{{ p.position }}</em></p>

<p>
{{ p.university }} <br>
{% if p.office %}Office: {{ p.office }} <br>{% endif %}
{% if p.email %}Email: <a href="mailto:{{ p.email }}">{{ p.email }}</a>{% endif %}
</p>

{% if p.scholar %}
<p><a href="{{ p.scholar }}" target="_blank">Google Scholar</a></p>
{% endif %}

</div>


<div class="col-sm-8">

<h3>Education</h3>
<ul>
{% for edu in p.education %}
<li>
<strong>{{ edu.degree }}</strong><br>
{{ edu.institution }} ({{ edu.years }})
</li>
{% endfor %}
</ul>


<h3>Research Interests</h3>
<ul>
{% for item in p.research_interests %}
<li>{{ item }}</li>
{% endfor %}
</ul>


<h3>Research Philosophy</h3>
<p>{{ p.research_philosophy }}</p>


<h3>Work Experience</h3>
<ul>
{% for job in p.work_experience %}
<li>
<strong>{{ job.title }}</strong><br>
{{ job.institution }} ({{ job.years }})
</li>
{% endfor %}
</ul>


<h3>International Honors and Awards</h3>
<ul>
{% for award in p.awards %}
  <li>
    {% if award.link %}
      <strong><a href="{{ award.link }}" target="_blank" rel="noopener">{{ award.title }}</a></strong>
    {% else %}
      <strong>{{ award.title }}</strong>
    {% endif %}
    <br>
    {{ award.organization }}{% if award.year %}, {{ award.year }}{% endif %}{% if award.recipient %} — {{ award.recipient }}{% endif %}
  </li>
{% endfor %}
</ul>

<h3>Invited Talks and Lectures</h3>
<ul>
{% for talk in p.invited_talks %}
  <li>
    <strong>{{ talk.title }}</strong><br>
    {{ talk.venue }}{% if talk.location != "" %}, {{ talk.location }}{% endif %}{% if talk.date %}, {{ talk.date }}{% endif %}
  </li>
{% endfor %}
</ul>

<h3>Professional Services</h3>
<ul>
{% for service in p.professional_services %}
<li>{{ service }}</li>
{% endfor %}
</ul>

</div>

</div>