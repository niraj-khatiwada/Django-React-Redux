# Generated by Django 3.0.6 on 2020-05-13 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lead',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('message', models.TextField(blank=True, null=True)),
                ('created_data', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
