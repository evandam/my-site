from django.db import models

# Create your models here.
class Section(models.Model):
	def __unicode__(self):
		return self.title

	title = models.CharField(max_length=50)
	htmlFile = models.CharField(max_length=100)
