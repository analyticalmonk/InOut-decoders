from django.shortcuts import render,redirect
from django.views.generic import View
from django.conf import settings
from django.contrib.auth import login

from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLogin
import json
import requests
import sys


from django.http import HttpResponse
# Create your views here.

class FacebookLogin(SocialLogin):
    adapter_class = FacebookOAuth2Adapter
    def login(self):
        self.user = self.serializer.validated_data['user']
        self.token, created = self.token_model.objects.get_or_create(user=self.user)

class VerifyMail(View):
    def get(self, request, *args, **kwargs):
        key = self.kwargs['key']
        response = redirect('/verifyemail')
        response.set_cookie("email", key,max_age = 1000)
        return response
