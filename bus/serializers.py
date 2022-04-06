from rest_framework import serializers
from .models import Bus

class BusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bus
        fields = ('bus_name', 'source', 'dest', 'tickets','tickets_avail', 'date', 'time')