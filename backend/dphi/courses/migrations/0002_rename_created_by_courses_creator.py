# Generated by Django 4.0.6 on 2022-08-06 13:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='courses',
            old_name='created_by',
            new_name='creator',
        ),
    ]
