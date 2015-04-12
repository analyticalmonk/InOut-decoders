# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('story', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scene',
            name='image',
            field=models.ImageField(upload_to='scenes'),
            preserve_default=True,
        ),
    ]
