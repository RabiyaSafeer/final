# Generated by Django 3.0.1 on 2020-05-15 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FYP_APP', '0016_auto_20200515_0017'),
    ]

    operations = [
        migrations.AddField(
            model_name='slip',
            name='challan_number',
            field=models.CharField(default=1, max_length=50, unique=True),
            preserve_default=False,
        ),
    ]
