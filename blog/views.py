from django.shortcuts import render

from .models import Post, Comment
from .forms import CommentForm


def index(request):
    posts = Post.objects.order_by('-publish_date')[:10]
    context = {'posts': posts, 'title': 'My Blog'}
    return render(request, 'blog/index.html', context)


def detail(request, post_id):
    comment_form = None

    if request.method == 'POST':
        print('submitting a comment!')
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment_form.save()
            # Clear out the form after saving a post
            comment_form = None

    try:
        post = Post.objects.get(pk=post_id)
        comments = Comment.objects.filter(post__pk=post_id)
        comment_form = comment_form or CommentForm(initial={'post': post_id})
    except Post.DoesNotExist:
        raise Http404('Post does not exist')

    context = {
        'title': post.title,
        'post': post,
        'comments': comments,
        'comment_form': comment_form
    }
    return render(request, 'blog/detail.html', context)
