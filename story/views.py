from django.shortcuts import render
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status

from story.models import Scene,Trip
from story.serializers import SceneSerializer,TripSerializer

# Create your views here.
class SceneViewSet(ModelViewSet):
    queryset=Scene.objects.all()
    serializer_class = SceneSerializer
    parser_classes = (MultiPartParser,FormParser,)

    def create(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            scene=Scene.objects.create(**serializer.validated_data)
            return Response("created scene", status = status.HTTP_201_CREATED)

class TripViewSet(ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

    def create(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            trip=Trip.objects.create(**serializer.validated_data)
            self.request.trip=trip
            return Response("created trip", status = status.HTTP_201_CREATED)
