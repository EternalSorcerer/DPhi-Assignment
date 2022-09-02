from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer, CoursesSerializer, QuizSerializer, QuestionSerializer
from .models import *
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import permissions

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CoursesViewSet(viewsets.ModelViewSet):
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer
    parser_classes = (MultiPartParser, FormParser)
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, format=None):
        serializer = CoursesSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):

        serializer = CoursesSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class QuizzesViewset(viewsets.ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quizzes.objects.all()


class QuizQuestionViewset(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    def get(self, request, format = None):
        quiz = Question.objects.filter(quiz = quiz)
        serializer = QuestionSerializer(quiz, many = True)
        return Response(serializer.data)
