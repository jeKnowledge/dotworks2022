from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pasteditions', views.pasteditions, name='pasteditions'),
    path('partners', views.partners, name='partners'),
    path('faq', views.faq, name='faq'),
    # PATHS PARA A PAGINA C OS ESTAGIOS E DE INSCRICAO
    path('internships', views.internships, name='internships')
    #path('signup', name = 'signup')

]
