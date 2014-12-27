from django.shortcuts import render
from myapp.models import Section

# Create your views here.
def index(request):
	return render(request, 'myapp/index.html', {'sections': Section.objects.all()})
