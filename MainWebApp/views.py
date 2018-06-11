# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .back_end.forms import *
from django.http import HttpResponse
from django.core.serializers.json import *
from .back_end.emailServices import *
import datetime
import pytz


# Create your views here.

def index(request):
    return render(request,"MainWebApp/index.html")

def about(request):
    return render(request,"MainWebApp/about.html")

def service(request):
    return render(request,"MainWebApp/service.html")

def contact(request):
    if request.method == "POST":
        form = ContactEmail(request.POST)
        if form.is_valid():
            subject = "Email from " + form.cleaned_data['name']

            if form.cleaned_data['phone'] != "":
                subject = subject + ", phone number (" + form.cleaned_data['phone'] + ")"

            if form.cleaned_data['address'] != "":
                subject = subject + ", address (" + form.cleaned_data['address'] + ")"

            subject = subject + ", sent at " + datetime.datetime.now().strftime("%d-%m-%Y %H:%M:%S")
            email = EmailService()
            email.emailConstruct(subject, form.cleaned_data['message'], form.cleaned_data['email'],
                                 ['robert01011991@gmail.com'])
            sendEmailResult = email.sendEmail()


            if sendEmailResult == True:
                return HttpResponse(json.dumps("success"), content_type='application/json')
            else:
                return HttpResponse(json.dumps("failed"), content_type='application/json')
        else:
            print(form.errors)
    else:
        return render(request,"MainWebApp/contact.html")