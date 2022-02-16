# Generated by Django 3.1.5 on 2021-04-22 14:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Area',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('area_field', models.CharField(max_length=100, verbose_name='Área')),
            ],
            options={
                'verbose_name': 'Área',
                'verbose_name_plural': 'Áreas',
            },
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Empresa')),
                ('logo', models.CharField(default='', max_length=255, verbose_name='Logotipo')),
                ('website', models.CharField(default='', max_length=255, verbose_name='Website')),
            ],
            options={
                'verbose_name': 'Empresa',
                'verbose_name_plural': 'Empresas',
            },
        ),
        migrations.CreateModel(
            name='Duration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('duration', models.CharField(max_length=100, verbose_name='Duração')),
                ('priority', models.IntegerField(verbose_name='Prioridade de Duração')),
            ],
            options={
                'verbose_name': 'Duração',
                'verbose_name_plural': 'Durações',
            },
        ),
        migrations.CreateModel(
            name='Faq',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=100, verbose_name='Questão')),
                ('answer', models.TextField(default='', verbose_name='Resposta')),
            ],
            options={
                'verbose_name': 'FAQ',
                'verbose_name_plural': 'FAQs',
            },
        ),
        migrations.CreateModel(
            name='PasEditionsImages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30, verbose_name='Título')),
                ('image', models.CharField(default='', max_length=255, verbose_name='Imagem')),
            ],
            options={
                'verbose_name': 'Imagem',
                'verbose_name_plural': 'Imagens de Edições Passadas',
            },
        ),
        migrations.CreateModel(
            name='PastEditions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.CharField(max_length=15, verbose_name='Ano')),
                ('description', models.TextField(verbose_name='Descrição')),
            ],
            options={
                'verbose_name': 'Edição Passada',
                'verbose_name_plural': 'Edições Passadas',
            },
        ),
        migrations.CreateModel(
            name='Testimony',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=30, verbose_name='Primeiro Nome')),
                ('lastName', models.CharField(max_length=30, verbose_name='Apelido')),
                ('test', models.TextField(verbose_name='Testemunho')),
            ],
            options={
                'verbose_name': 'Testemunho',
                'verbose_name_plural': 'Testemunhos',
            },
        ),
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('internship_type', models.CharField(max_length=100, verbose_name='Tipo de Estágio')),
            ],
            options={
                'verbose_name': 'Tipo de Estágio',
                'verbose_name_plural': 'Tipos de Estágio',
            },
        ),
        migrations.CreateModel(
            name='Internship',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('specific_area', models.CharField(max_length=100, verbose_name='Área Específica')),
                ('date_defined', models.BooleanField(default=False, verbose_name='Data Definida')),
                ('date_text', models.TextField(blank=True, null=True, verbose_name='Texto a colocar no lugar das Datas')),
                ('start_date', models.DateField(blank=True, null=True, verbose_name='Data de Começo')),
                ('end_date', models.DateField(blank=True, null=True, verbose_name='Data de Final')),
                ('payed', models.BooleanField(default=False, verbose_name='Remunerado')),
                ('location', models.CharField(max_length=100, verbose_name='Localização')),
                ('description', models.TextField(verbose_name='Descrição')),
                ('remote', models.BooleanField(default=False, verbose_name='Remoto')),
                ('area', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='website.area', verbose_name='Área')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='website.company', verbose_name='Empresa')),
                ('duration', models.ManyToManyField(to='website.Duration')),
                ('internship_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='website.type', verbose_name='Tipo de Estágio')),
            ],
            options={
                'verbose_name': 'Estágio',
                'verbose_name_plural': 'Estágios',
            },
        ),
    ]