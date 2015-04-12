from django.db import models

from django.contrib.auth.models import User

# Create your models here.
class Trip(models.Model):
    user=models.ForeignKey(User,related_name='trips')
    name=models.CharField(max_length=50)
    def __unicode__(self):
        return self.name

class Scene(models.Model):
    trip = models.ForeignKey(Trip,related_name="scenes")
    image = models.ImageField(upload_to='scenes')
    comment=models.CharField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)
