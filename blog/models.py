from django.db import models


# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    publish_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=200)
    message = models.TextField()
    publish_date = models.DateTimeField(auto_now=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return 'Comment(author={}, post={}, date={})'.format(
           self.name, self.post, self.publish_date
        )



