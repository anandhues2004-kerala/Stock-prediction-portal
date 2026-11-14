from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password as django_validate_password  # NEW
from django.core.exceptions import ValidationError as DjangoValidationError  # NEW
import re  # NEW

class UserSerializer(serializers.ModelSerializer):
    
    password = serializers.CharField(
        write_only=True,
        min_length=8,
        style={'input_type': 'password'},
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    # NEW: strength rules for the password field
    def validate_password(self, value):
        if not re.search(r'[A-Z]', value):
            raise serializers.ValidationError("Password must contain at least one uppercase letter.")
        if not re.search(r'[a-z]', value):
            raise serializers.ValidationError("Password must contain at least one lowercase letter.")
        if not re.search(r'\d', value):
            raise serializers.ValidationError("Password must contain at least one number.")
        if not re.search(r'[!@#$%^&*(),.?":{}|<>_\-]', value):
            raise serializers.ValidationError("Password must contain at least one special character.")
        return value

    # NEW: Django's built-in validators (common passwords, too similar to username/email, all numeric)
    def validate(self, attrs):
        temp_user = User(username=attrs.get('username'), email=attrs.get('email'))
        try:
            django_validate_password(attrs.get('password'), user=temp_user)
        except DjangoValidationError as e:
            raise serializers.ValidationError({'password': list(e.messages)})
        return attrs

    # NEW: block duplicate emails
    def validate_email(self, value):
        if User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            #user=User.objects.create_user(**validated_data)  
        )
        return user