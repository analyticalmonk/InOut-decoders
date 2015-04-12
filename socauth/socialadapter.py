from django.contrib.auth.models import User

from allauth.account.models import EmailAddress
from allauth.exceptions import ImmediateHttpResponse
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from allauth.account.adapter import DefaultAccountAdapter

class SocAdapter(DefaultSocialAccountAdapter):
    def is_auto_signup_allowed(self, request, sociallogin):
        return True

    #def pre_social_login(self, request, sociallogin):
    #    user = sociallogin.user
    #    if user.id:
    #        return
    #    try:
    #        existing_user = User.objects.get(email=user.email)
    #    except ObjectDoesNotExist:
    #        pass
    #    else:
    #        perform_login(request, existing_user, app_settings.EmailVerificationMethod.NONE)


class MessageFreeAdapter(DefaultAccountAdapter):
    def add_message(self, request, level, message_template,
                        message_context=None, extra_tags=''):
        pass
