from django.forms import ValidationError
from django.shortcuts import get_list_or_404
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Bus
from .serializers import BusSerializer


# Create your views here.
class BusList(APIView):

    def get(self, request):
        buses = Bus.objects.all()
        serializer = BusSerializer(buses, many=True)
        return Response(serializer.data)

