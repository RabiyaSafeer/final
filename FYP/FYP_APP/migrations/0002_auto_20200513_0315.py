# Generated by Django 3.0.1 on 2020-05-12 22:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FYP_APP', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='challan',
            name='program',
            field=models.CharField(choices=[('bs', 'BS'), ('mcs', 'MCS')], default='bs', max_length=4),
        ),
    ]
