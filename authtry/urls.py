from django.conf.urls import patterns, include, url
from django.contrib import admin

from authtry.views import IndexView
from socauth.views import FacebookLogin, VerifyMail
from story.views import SceneViewSet,TripViewSet


from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'trip',TripViewSet)
router.register(r'scene',SceneViewSet)


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'authtry.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^rest-auth/registration/account-confirm-email/(?P<key>\w+)/$',VerifyMail.as_view()),
    url(r'^rest-auth/', include('rest_auth.urls')),
    #url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^rest-auth/facebook/$',FacebookLogin.as_view(),name = "fb_login"),
     url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
     url(r'^accounts/', include('allauth.socialaccount.urls')),
     url(r'^story/',include(router.urls)),
     url('^.*$', IndexView.as_view(), name='index'),
)
