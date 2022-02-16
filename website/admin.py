from django.contrib import admin
from django.contrib.auth.models import Group, User
from django.contrib.sites.models import Site
from .models import PastEditions, PasEditionsImages, Company, Internship, Faq, Testimony, Area, Duration, Type
from django.core.validators import EMPTY_VALUES

admin.site.site_header = "Página de Administrador"
admin.site.site_title = "Página de Administrador"
admin.site.index_title = "Página de Administrador"


class companyAdmin(admin.ModelAdmin):
    list_display = ["name", "website"]


class internshipAdmin(admin.ModelAdmin):
    list_display = ["company", "area",
                    "specific_area", "internship_type", "remote"]


class durationAdmin(admin.ModelAdmin):
    ordering = ('priority',)


# Register your models here.
admin.site.register(Company, companyAdmin)
admin.site.register(Internship, internshipAdmin)
admin.site.register(Faq)
admin.site.register(Testimony)
admin.site.register(PastEditions)
admin.site.register(Area)
admin.site.register(Type)
admin.site.register(PasEditionsImages)
admin.site.register(Duration, durationAdmin)
admin.site.unregister(Group)
admin.site.unregister(User)
admin.site.unregister(Site)
