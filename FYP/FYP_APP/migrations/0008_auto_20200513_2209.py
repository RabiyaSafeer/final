# Generated by Django 3.0.1 on 2020-05-13 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FYP_APP', '0007_auto_20200513_2209'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slip',
            name='cnic',
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name='slip',
            name='father_name',
            field=models.CharField(max_length=50),
        ),
    ]