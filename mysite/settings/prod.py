import django_heroku

from .base import *

DEBUG = False

ALLOWED_HOSTS = ['evandam.com']

django_heroku.settings(locals())
