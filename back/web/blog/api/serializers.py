from rest_framework import serializers
from blog.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['title', 'body', 'create_at', 'update_at']