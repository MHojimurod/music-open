import os
from django.db import models
from django.conf import settings
from django.core.validators import FileExtensionValidator
val=[FileExtensionValidator(allowed_extensions=['mp3', 'ogg','wma','aiff','wav'])]
class Musics(models.Model):
    music = models.FileField(validators=val)
    duration = models.IntegerField(default=0)
    name = models.CharField(max_length=200)
    class Meta:
        db_table = 'music'
    # def delete(self, *args, **kwargs):
    #     print(self.music.name,"AA")
    #     os.remove(os.path.join(settings.MEDIA_ROOT, self.music.name))
    #     super(Musics,self).delete(*args,**kwargs)

