from rest_framework import viewsets
from .models import Student, Staff
from .serializers import StudentSerializer, StaffSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().order_by('id')
    serializer_class = StudentSerializer

class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all().order_by('id')
    serializer_class = StaffSerializer
