from django.db import models

# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=100, verbose_name="Empresa")
    logo = models.CharField(max_length=255, default="",
                            verbose_name="Logotipo")
    website = models.CharField(
        max_length=255, default="", verbose_name="Website")

    class Meta:
        verbose_name = "Empresa"
        verbose_name_plural = "Empresas"

    def __str__(self):
        return self.name

# VAO SER USADOS PARA A FILTRAGEM DOS ESTAGIOS!


class Area(models.Model):
    # POSSO FAZER TMB CM CHOICES SE FOREM SMP AS MESMAS
    area_field = models.CharField(max_length=100, verbose_name="Área")

    class Meta:
        verbose_name = "Área"
        verbose_name_plural = "Áreas"

    def __str__(self):
        return self.area_field


class Duration(models.Model):
    duration = models.CharField(max_length=100, verbose_name="Duração")
    priority = models.IntegerField(verbose_name="Prioridade de Duração")

    class Meta:
        verbose_name = "Duração"
        verbose_name_plural = "Durações"

    def __str__(self):
        return self.duration


class Type(models.Model):
    internship_type = models.CharField(
        max_length=100, verbose_name="Tipo de Estágio")

    class Meta:
        verbose_name = "Tipo de Estágio"
        verbose_name_plural = "Tipos de Estágio"

    def __str__(self):
        return self.internship_type


class Internship(models.Model):
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, verbose_name="Empresa")
    # biomedica, informatica, design....
    area = models.ForeignKey(
        Area, on_delete=models.CASCADE, verbose_name="Área")
    # WebDesign, computerScience...
    specific_area = models.CharField(
        max_length=100, verbose_name="Área Específica")
    internship_type = models.ForeignKey(
        Type, on_delete=models.CASCADE, verbose_name="Tipo de Estágio")
    duration = models.ManyToManyField(Duration)
    date_defined = models.BooleanField(
        verbose_name="Data Definida", default=False)
    date_text = models.TextField(
        verbose_name="Texto a colocar no lugar das Datas", null=True, blank=True)
    start_date = models.DateField(
        verbose_name="Data de Começo", null=True, blank=True)
    end_date = models.DateField(
        verbose_name="Data de Final", null=True, blank=True)
    payed = models.BooleanField(default=False, verbose_name="Remunerado")
    location = models.CharField(max_length=100, verbose_name="Localização")
    description = models.TextField(verbose_name="Descrição")
    remote = models.BooleanField(verbose_name="Remoto", default=False)

    class Meta:
        verbose_name = "Estágio"
        verbose_name_plural = "Estágios"

    def getDurations(self):
        string = ""
        for dur in self.duration.all():
            string += dur.duration + " "

        return string

    def getDurationsDisplay(self):
        string = ""
        for dur in self.duration.all():
            string += dur.duration + " / "

        return string[:-2]

    def __str__(self):
        return self.company.name


class Testimony(models.Model):
    firstName = models.CharField(max_length=30, verbose_name="Primeiro Nome")
    lastName = models.CharField(max_length=30, verbose_name="Apelido")
    test = models.TextField(verbose_name="Testemunho")

    class Meta:
        verbose_name = "Testemunho"
        verbose_name_plural = "Testemunhos"

    def __str__(self):
        return self.firstName + " " + self.lastName


class PastEditions(models.Model):
    year = models.CharField(max_length=15, verbose_name="Ano")
    description = models.TextField(verbose_name="Descrição")

    class Meta:
        verbose_name = "Edição Passada"
        verbose_name_plural = "Edições Passadas"

    def __str__(self):
        return self.year


class PasEditionsImages(models.Model):
    title = models.CharField(max_length=30, verbose_name="Título")
    image = models.CharField(max_length=255, default="", verbose_name="Imagem")

    class Meta:
        verbose_name = "Imagem"
        verbose_name_plural = "Imagens de Edições Passadas"

    def __str__(self):
        return self.title


class Faq(models.Model):
    question = models.CharField(max_length=100, verbose_name="Questão")
    answer = models.TextField(default="", verbose_name="Resposta")

    class Meta:
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"

    def __str__(self):
        return self.question
