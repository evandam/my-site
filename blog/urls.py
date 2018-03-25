from django.urls import path

from . import views

urlpatterns = [
    path(r'post/<int:pk>', views.detail, name='post-detail'),
    path('', views.index, name='blog-home'),
]
