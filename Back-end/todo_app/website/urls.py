from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'tasks', views.TodoViews, 'task')


urlpatterns = [
    path('', views.test, name="test"),
    path('api/', include(router.urls))
]
