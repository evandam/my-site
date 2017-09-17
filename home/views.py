from django.shortcuts import render

# Create your views here.
def index(request):
    context = {'title': 'Evan Van Dam'}
    return render(request, 'home/index.html', context)
