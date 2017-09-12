from django import template
from django.utils import timezone

import markdown2

register = template.Library()

@register.filter(name='markdown')
def convert_markdown(value):
    return markdown2.markdown(value)

@register.filter(name='timeago')
def get_time_ago(value, since=None):
    if not since:
        since = timezone.now()

    delta = since - value

    if delta.seconds < 3600:
        val = delta.seconds // 60
        unit = 'minute'
    elif delta.days < 1:
        val = delta.seconds // 3600
        unit = 'hour'
    else:
        val = delta.days
        unit = 'day'

    return '{val:,} {unit} ago'.format(val=val, unit=unit if val == 1 else unit + 's')
