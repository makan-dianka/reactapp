from django.urls import path
from blog.api import views

app_name = 'blog'

urlpatterns = [
    path('articles', views.articles, name="articles"),
]