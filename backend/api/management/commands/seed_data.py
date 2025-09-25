from django.core.management.base import BaseCommand
from django.core import management
import os

class Command(BaseCommand):
    help = 'Load sample fixtures for students and staff'

    def handle(self, *args, **options):
        base_dir = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
        fixtures_dir = os.path.join(base_dir, 'fixtures')
        self.stdout.write('Loading students fixture...')
        management.call_command('loaddata', os.path.join(fixtures_dir, 'students.json'))
        self.stdout.write('Loading staff fixture...')
        management.call_command('loaddata', os.path.join(fixtures_dir, 'staff.json'))
        self.stdout.write(self.style.SUCCESS('Sample data loaded.'))
