from django.shortcuts import render
from blog.models import Article
from blog.api.serializers import ArticleSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET', ])
def articles(request):
    articles = Article.objects.all()
    
    if request.method=="GET":
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)