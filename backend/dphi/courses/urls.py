from django.urls import include, path
from rest_framework import routers
from .views import UserViewSet, CoursesViewSet, QuizzesViewset, QuizQuestionViewset

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('course', CoursesViewSet)
router.register('quiz', QuizzesViewset)
router.register('quiz_questions', QuizQuestionViewset)

urlpatterns = [
    path("", include(router.urls)),
]