from django.urls import path
from .views import delete, home, musics
urlpatterns  =[
    path('',home,name='home'),
    path('delete/<int:pk>/',delete,name='delete'),
    path('musics/', musics)
]