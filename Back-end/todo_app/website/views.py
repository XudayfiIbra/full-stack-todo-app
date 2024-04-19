from django.shortcuts import render
from django.http import HttpResponse
from . models import Todo
from . serializers import TodoSerializers
from rest_framework import viewsets

def test(request):
    return HttpResponse('we good to go')

class TodoViews(viewsets.ModelViewSet):
    serializer_class = TodoSerializers
    queryset = Todo.objects.all()
