from django.db import models

class Category(models.Model):
	name = models.CharField(max_length=200)

	def __unicode__(self):
		return self.name

class Item(models.Model):
	category = models.ForeignKey(Category)
	dateadded = models.DateTimeField('date added')
	name = models.CharField(max_length=200)
	description = models.TextField(blank=True)
	quantity = models.IntegerField()
	