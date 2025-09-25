from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet, StaffViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'staff', StaffViewSet)

urlpatterns = [
    path('', include(router.urls)),
]