from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password' : {'write_only' : True, 'required' : True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        token = Token.objects.create(user = user)
        print(token.key)
        return user


class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ['id', 'name', 'desc', 'image', 'creator']
    
    def create(self, validated_data):
        course = Courses(**validated_data)
        course.save()
        return course



class QuizSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Quizzes
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    # quiz = QuizSerializer(read_only = True)
    class Meta:
        model = Question 
        fields = '__all__'


