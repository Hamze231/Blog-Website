from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path

urlpatterns = [
    path('a/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('',include('firstapp.urls')),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
