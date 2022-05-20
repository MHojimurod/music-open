from django import forms
from .models import Musics

class MusicForm(forms.ModelForm):
    class Meta:
        model = Musics
        fields = ["music"]