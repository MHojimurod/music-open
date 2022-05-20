from django.http.response import JsonResponse
from django.shortcuts import redirect, render
from .forms import MusicForm
from .models import Musics
from django.db.models.fields.files import FieldFile






def with_opencv(filename):
    import cv2
    video = cv2.VideoCapture(filename)

    duration = video.get(cv2.CAP_PROP_POS_MSEC)

    return duration










def home(request):
    musics = Musics.objects.order_by('-id').all()
    model = Musics()
    form = MusicForm(request.POST, request.FILES, instance=model)
    if form.is_valid():
        form.save()
        mus: FieldFile = model.music
        return redirect('home')

    return render(request, 'main.html', {"musics": musics, "form": form})


def delete(request, pk):
    model = Musics.objects.get(id=pk)
    model.delete()
    return redirect('home')


def musics(request):
    _json = {}
    data = Musics.objects.all()
    for id in range(len(data)):
        x = data[id]
        _json[id] = str(x)
    print(_json)
    return JsonResponse(_json)
