from django.db import models
from django.utils import timezone

# Create your models here.
class Bus(models.Model):
    bus_name =models.CharField(max_length=50)
    source = models.CharField(max_length=50)
    dest = models.CharField(max_length=50)
    tickets= models.IntegerField()
    tickets_avail = models.IntegerField()
    date = models.DateField()
    time = models.TimeField()

    def _str_(self):
        return self.bus_name