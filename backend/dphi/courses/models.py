from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Courses(models.Model):
    name = models.CharField(max_length = 100)
    desc = models.CharField(max_length = 500)
    image = models.ImageField(upload_to = "images/")
    created_on = models.DateField(default = timezone.now)
    creator = models.ForeignKey(User, on_delete = models.CASCADE)

    def __str__(self):
        return f"{self.name} course was created by {self.creator}"

class Teacher(models.Model):
    name = models.ForeignKey(User, on_delete = models.CASCADE)
    course = models.ManyToManyField(Courses)

    def __str__(self):
        return f"Teacher {self.name} created {self.course} course."

class Student(models.Model):
    name = models.ForeignKey(User, on_delete = models.CASCADE)
    enrolled_courses = models.ManyToManyField(Courses)

    def __str__(self):
        return f"Student {self.name} enrolled in {self.enrolled_courses} courses"


class Category(models.Model):
    """ Category is category of the particular quiz"""
    name = models.CharField(max_length = 100)

    def __str__(self):
        return self.name

class Quizzes(models.Model):
    """
    Many quiz belongs to one category
     """
    name = models.CharField(max_length = 100)

    # many quizzes can belong to one category 
    category = models.ForeignKey(Category, default = 1, on_delete = models.CASCADE)

    def __str__(self):
        return self.name

class Question(models.Model):
    # One question can be part of many quizzes
    quiz = models.ForeignKey(Quizzes, related_name='question', on_delete=models.CASCADE)
    name = models.CharField(max_length = 100)

    def __str__(self):
        return self.name

class Answer(models.Model):
    question = models.ForeignKey(Question, related_name='answer', on_delete = models.CASCADE)
    answer = models.CharField(max_length = 100)
    is_right = models.BooleanField(default = False)

    def __str__(self):
        return f"{self.answer} {self.question}"   