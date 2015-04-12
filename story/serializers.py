from rest_framework import serializers
from story.models import Scene,Trip

from django.contrib.auth.models import User

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ('user','name')

class SceneSerializer(serializers.ModelSerializer):

    class Meta:
        model = Scene
        fields = ('trip','image','comment','created')
        read_only_fields=('created',)
