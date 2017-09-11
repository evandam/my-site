from django.shortcuts import render

from .models import Post

# Create your views here.
def index(request):
    posts = Post.objects.order_by('-publish_date')[:10]
    context = {'posts': posts}
    return render(request, 'blog/index.html', context)
