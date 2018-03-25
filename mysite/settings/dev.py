from .base import *

DEBUG = True

# Allow all host headers
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']
INTERNAL_IPS = ['127.0.0.1', 'localhost']

INSTALLED_APPS.append('debug_toolbar')
MIDDLEWARE.insert(0, 'debug_toolbar.middleware.DebugToolbarMiddleware')
