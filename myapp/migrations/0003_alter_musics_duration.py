# Generated by Django 3.2.9 on 2022-05-14 08:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_musics_duration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='musics',
            name='duration',
            field=models.IntegerField(default=0),
        ),
    ]