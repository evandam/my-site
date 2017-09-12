from django.db import models
from django import forms

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
            self.author, self.post, self.publish_date
         )

class BaseForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(BaseForm, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = 'input'

class CommentForm(BaseForm):
    class Meta:
        model = Comment
        fields = '__all__'
        widgets = {
            'post': forms.HiddenInput(),
        }

    def __init__(self, *args, **kwargs):
        super(CommentForm, self).__init__(*args, **kwargs)
        self.fields['email'].help_text = "Don't worry, your email won't be shared."
        self.fields['message'].help_text = "Markdown is supported!"
