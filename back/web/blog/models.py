from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField(max_length=500)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.title} | {self.create_at}"