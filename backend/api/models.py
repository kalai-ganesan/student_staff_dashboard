from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=50)
    attendance = models.IntegerField(default=0)  # percentage
    marks = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class Staff(models.Model):
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=50)
    workload_hours = models.IntegerField(default=0)

    def __str__(self):
        return self.name
