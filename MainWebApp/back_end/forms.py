from django import forms

class ContactEmail(forms.Form):
    name = forms.CharField()
    phone = forms.CharField(required = False)
    email = forms.CharField()
    address = forms.CharField(required = False)
    message = forms.CharField(required = False)
