from django.shortcuts import render, redirect
from .models import Faq, Testimony, PastEditions, Company, Type, Duration, Area, Internship, PasEditionsImages


# Create your views here.
def index(request):
    faqs = Faq.objects.all()[:3]
    testimonys = Testimony.objects.all()
    companys = Company.objects.all()
    return render(request, "website/index.html", {"faqs": faqs, "testimonys": testimonys, "companys": companys})


def pasteditions(request):
    pastEditions = PastEditions.objects.all()
    pastEditionsPhotos = PasEditionsImages.objects.all()
    return render(request, "website/pasteditions.html", {"pastE": pastEditions, "pastEP": pastEditionsPhotos})


def partners(request):
    companys = Company.objects.all()
    return render(request, "website/partners.html", {"companys": companys})


def faq(request):
    faqs = Faq.objects.all()
    return render(request, "website/faq.html", {"faqs": faqs})


def internships(request):
    queryType = Type.objects.all().order_by('internship_type')
    queryDuration = Duration.objects.all().order_by('priority')
    queryCompany = Company.objects.all().order_by('name')
    queryArea = Area.objects.all().order_by('area_field')
    queryInternship = Internship.objects.all().order_by('start_date')
    return render(request, "website/internships.html", {"queryType": queryType, "queryDuration": queryDuration, "queryCompany": queryCompany, "queryArea": queryArea, "queryInternship": queryInternship})
