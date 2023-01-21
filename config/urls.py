from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static
from django.urls import path
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.views.generic import TemplateView
from django.views import defaults as default_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('website.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



