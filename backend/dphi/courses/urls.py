from django.urls import include, path
from rest_framework import routers
from .views import UserViewSet, CoursesViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('course', CoursesViewSet)

urlpatterns = [
    path("", include(router.urls)),
]