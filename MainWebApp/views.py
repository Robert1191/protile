# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,"MainWebApp/index.html")

def about(request):
    return render(request,"MainWebApp/about.html")

def service(request):
    return render(request,"MainWebApp/service.html")

def contact(request):
    return render(request,"MainWebApp/contact.html")